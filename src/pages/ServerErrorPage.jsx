import { useState } from 'react';
import { Link } from 'react-router-dom';
import FloatingBackground from '@/components/ui/FloatingBackground';
import { ArrowLeft, RotateCcw, AlertOctagon, Check } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useTheme } from '@/context/ThemeContext';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export const ServerErrorPage = () => {
  const { theme, setTheme } = useTheme();
  const [retrying, setRetrying] = useState(false);
  const [retried, setRetried] = useState(false);

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      setRetried(true);
      setTimeout(() => {
        window.location.reload();
      }, 800);
    }, 1200);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f4f5f8] dark:bg-black px-3.5 sm:px-4 py-8 sm:py-12 font-sans text-slate-900 dark:text-white selection:bg-amber-500/30 selection:text-amber-800 dark:selection:text-amber-200 transition-colors duration-300">
      <FloatingBackground />

      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
        <AnimatedThemeToggler
          theme={theme}
          onThemeChange={setTheme}
          className="p-2.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/90 hover:bg-white text-slate-700 dark:bg-white/5 dark:hover:bg-white/15 dark:text-slate-200 backdrop-blur-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
        />
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 bottom-1/4 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-amber-600/15 blur-3xl" />

      <main className="relative z-10 w-full max-w-lg">
        <Link to="/" className="mx-auto mb-6 sm:mb-8 flex w-fit items-center gap-2.5 group" aria-label="NexAI home">
          <img
            src={logo}
            alt="NEXAI"
            className="h-10 w-10 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">NEXAI</span>
        </Link>

        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-white/20 bg-slate-200 dark:bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl transition-all duration-300 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 px-3 sm:px-3.5 py-1.5 text-xs font-mono font-medium text-amber-700 dark:text-amber-300 backdrop-blur-md shadow-sm mb-5 sm:mb-6 max-w-full">
              <AlertOctagon className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="truncate">ERROR 500 • KERNEL EXCEPTION</span>
            </span>

            <div className="font-mono text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-600 to-indigo-600 dark:from-rose-400 dark:via-amber-400 dark:to-indigo-400 leading-none">
              500
            </div>

            <h1 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Internal Mesh Anomaly
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm mx-auto">
              An unexpected kernel interception anomaly occurred. Our automated autonomous swarms have quarantined the telemetry thread and initiated auto-recovery.
            </p>

            <div className="mt-5 sm:mt-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-black/40 p-3 sm:p-3.5 text-left font-mono text-xs text-slate-500 dark:text-slate-400 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                <span className="text-slate-500 dark:text-slate-400">EXCEPTION_VECTOR:</span>
                <span className="text-amber-600 dark:text-amber-400 font-semibold break-all">SIGSEGV_CONTAINER_ISOLATED</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                <span className="text-slate-500 dark:text-slate-400">RECOVERY_AGENT:</span>
                <span className="text-emerald-600 dark:text-emerald-400 break-all font-semibold">SWARM_AUTO_REPAIR_ACTIVE</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleRetry}
                disabled={retrying || retried}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-semibold transition-colors disabled:opacity-80 shadow-lg cursor-pointer"
              >
                {retried ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Reloading mesh...</span>
                  </>
                ) : retrying ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 dark:border-black/20 border-t-white dark:border-t-black" />
                    <span>Re-establishing...</span>
                  </>
                ) : (
                  <>
                    <RotateCcw className="h-4 w-4" />
                    <span>Retry Connection</span>
                  </>
                )}
              </button>

              <Link
                to="/"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 backdrop-blur-md transition-all hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 px-2">
          Persistent outage?{' '}
          <Link to="/contact" className="font-semibold text-slate-900 dark:text-white underline underline-offset-4 hover:text-amber-600 dark:hover:text-amber-300 transition-colors">
            Escalate to 24/7 SOC Rapid Response
          </Link>
        </p>
      </main>
    </div>
  );
};

export default ServerErrorPage;
