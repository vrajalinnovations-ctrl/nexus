import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingBackground from '@/components/ui/FloatingBackground';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const inputClass =
  'w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-500 dark:focus:border-cyan-400/50 focus:bg-white dark:focus:bg-white/10';

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/verify', { state: { email, flow: 'reset-password' } });
    }, 800);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f4f5f8] dark:bg-black px-3.5 sm:px-4 py-8 sm:py-12 font-sans text-slate-900 dark:text-white selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300">
      <FloatingBackground />

      {/* Top Controls: Back to Home & Theme Toggler */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <Link
          to="/signin"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/90 hover:bg-white text-slate-700 dark:bg-white/5 dark:hover:bg-white/15 dark:text-slate-200 backdrop-blur-xl text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-md group"
          aria-label="Back to sign in"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <AnimatedThemeToggler
          theme={theme}
          onThemeChange={setTheme}
          className="p-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/90 hover:bg-white text-slate-700 dark:bg-white/5 dark:hover:bg-white/15 dark:text-slate-200 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/4 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/20 blur-3xl" />

      <main className="relative z-10 w-full max-w-md">
        <Link to="/" className="mx-auto mb-6 sm:mb-8 flex w-fit items-center gap-2.5 group" aria-label="NexAI home">
          <img
            src={logo}
            alt="NEXAI"
            className="h-10 w-10 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">NEXAI</span>
        </Link>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-white/20 bg-slate-200 dark:bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10">
            <div className="mx-auto mb-3.5 sm:mb-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-cyan-600 dark:text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Reset password
            </h1>
            <p className="mt-2 text-center text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed px-1">
              Enter your email to receive a 6-digit verification code
            </p>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-4">
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 dark:text-slate-400 z-10" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-80 shadow-lg cursor-pointer"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 dark:border-black/20 border-t-white dark:border-t-black" />
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-2">
          Remember your password?{' '}
          <Link to="/signin" className="font-semibold text-slate-900 dark:text-white underline underline-offset-4 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;