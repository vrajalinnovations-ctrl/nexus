import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import FloatingBackground from '@/components/ui/FloatingBackground';
import { Lock, Eye, EyeOff, ArrowRight, Check, KeyRound } from 'lucide-react';
import logo from '@/assets/logo.png';

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 pr-12 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-400/50 focus:bg-white/10';

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/signin', { state: { email, resetSuccess: true } }), 1500);
    }, 1000);
  };

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
              <KeyRound className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <h1 className="text-center text-3xl font-semibold tracking-tight text-white">
              Confirm new password
            </h1>
            <p className="mt-2 text-center text-sm text-slate-300">
              Create and confirm your new access password
            </p>

            {error && (
              <div className="mt-4 rounded-xl border border-rose-500/30 bg-rose-950/40 px-3.5 py-2.5 text-center text-xs text-rose-300 backdrop-blur-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="relative">
                <label htmlFor="new-password" className="sr-only">
                  New Password
                </label>
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="new-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password"
                  autoComplete="new-password"
                  required
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <div className="relative">
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  autoComplete="new-password"
                  required
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={busy}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-80 shadow-lg shadow-white/10"
              >
                {success ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Password updated</span>
                  </>
                ) : loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                ) : (
                  <>
                    Reset password
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Remembered your password?{' '}
          <Link to="/signin" className="font-semibold text-white underline underline-offset-4 hover:text-cyan-300 transition-colors">
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
