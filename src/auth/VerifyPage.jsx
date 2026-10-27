import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import FloatingBackground from '@/components/ui/FloatingBackground';
import { ArrowRight, Check, RotateCcw, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

export const VerifyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'operator@enterprise.com';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(45);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (resendCountdown <= 0) return;
    const timer = setInterval(() => {
      setResendCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCountdown]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').trim();
    if (/^\d{6}$/.test(pasted)) {
      const digits = pasted.split('');
      setOtp(digits);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 6) return;

    setLoading(true);
    const flow = location.state?.flow;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        if (flow === 'reset-password') {
          navigate('/confirm-password', { state: { email } });
        } else {
          navigate('/signin', { state: { email, verified: true } });
        }
      }, 1200);
    }, 1000);
  };

  const handleResend = () => {
    if (resendCountdown > 0) return;
    setResendCountdown(45);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  const isComplete = otp.every((digit) => digit !== '');
  const busy = loading || success;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-3.5 sm:px-4 py-8 sm:py-12 font-sans text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <FloatingBackground />

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/4 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/20 blur-3xl" />

      <main className="relative z-10 w-full max-w-md">
        <Link to="/" className="mx-auto mb-6 sm:mb-8 flex w-fit items-center gap-2.5 group" aria-label="Aegix home">
          <img
            src={logo}
            alt="AEGIX"
            className="h-10 w-10 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-white">AEGIX</span>
        </Link>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-3.5 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Verify your email
            </h1>
            <p className="mt-2 text-center text-xs sm:text-sm text-slate-300 leading-relaxed px-1">
              We sent a 6-digit security code to
              <span className="block font-medium text-white mt-0.5 break-all">{email}</span>
            </p>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between gap-1.5 sm:gap-2.5" onPaste={handlePaste}>
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    disabled={busy}
                    autoFocus={idx === 0}
                    className="h-11 sm:h-14 w-full flex-1 min-w-0 max-w-12 rounded-lg sm:rounded-xl border border-white/15 bg-white/5 text-center text-lg sm:text-xl font-bold font-mono text-white outline-none backdrop-blur-md transition-all focus:border-cyan-400 focus:bg-white/10 disabled:opacity-50"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={!isComplete || busy}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-semibold text-black transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg shadow-white/10 cursor-pointer"
              >
                {success ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                ) : (
                  <>
                    <span>Verify & Continue</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-5 sm:mt-6 flex items-center justify-center text-xs text-slate-400">
              {resendCountdown > 0 ? (
                <span>Resend code in {resendCountdown}s</span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Resend code</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-slate-400 px-2">
          Wrong email address?{' '}
          <Link to="/signup" className="font-semibold text-white underline underline-offset-4 hover:text-cyan-300 transition-colors">
            Back to sign up
          </Link>
        </p>
      </main>
    </div>
  );
};

export default VerifyPage;
