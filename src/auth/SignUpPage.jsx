import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FloatingBackground from '@/components/ui/FloatingBackground';
import { Shield, User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import authData from '@/mock/auth.json';
import logo from '@/assets/logo.png';

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/5 py-3.5 pl-11 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-400/50 focus:bg-white/10';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const finish = (delay = 1000) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/verify', { state: { email } }), 800);
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    finish();
  };

  const busy = loading || success;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-3.5 sm:px-4 py-8 sm:py-12 font-sans text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <FloatingBackground />

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/4 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-600/20 blur-3xl" />

      <main className="relative z-10 w-full max-w-md">
        <Link to="/" className="mx-auto mb-6 sm:mb-8 flex w-fit items-center gap-2.5 group" aria-label="Nexus home">
          <img
            src={logo}
            alt="NEXUS"
            className="h-10 w-10 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-white">NEXUS</span>
        </Link>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10">
            <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-white">Create an account</h1>
            <p className="mt-2 text-center text-xs sm:text-sm text-slate-300">Start your 14-day free trial</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                  className={`${inputClass} pr-4`}
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Work Email
                </label>
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work Email"
                  autoComplete="email"
                  required
                  className={`${inputClass} pr-4`}
                />
              </div>

              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                  className={`${inputClass} pr-12`}
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
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  required
                  className={`${inputClass} pr-12`}
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

              {error && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-950/40 px-3.5 py-2.5 text-center text-xs text-rose-300 backdrop-blur-md">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={busy}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition-colors hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-80 shadow-lg shadow-white/10"
              >
                {success ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                ) : (
                  <>
                    Create account
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-400">
              By registering, you agree to our{' '}
              <Link to="/terms" className="text-slate-300 underline underline-offset-2 hover:text-cyan-300">
                Terms
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-slate-300 underline underline-offset-2 hover:text-cyan-300">
                Privacy Policy
              </Link>.
            </p>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-slate-400">or continue with</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {authData.ssoProviders.map((prov) => (
                <button
                  key={prov.id}
                  type="button"
                  disabled={busy}
                  onClick={() => finish(600)}
                  className="flex items-center justify-center gap-2 truncate rounded-xl border border-white/15 bg-white/5 px-3 py-3 text-xs font-medium text-slate-200 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Shield className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                  <span className="truncate">{prov.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/signin" className="font-semibold text-white underline underline-offset-4 hover:text-cyan-300 transition-colors">
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
};

export default SignUpPage;
