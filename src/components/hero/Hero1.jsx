import { Link } from 'react-router-dom';
import GhostFibers from '@/components/ui/GhostFibers';
import Navbar from '@/components/layout/Navbar';
import robotImage from '@/assets/2.png';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import { Shield, ArrowRight, Play, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const Hero1 = () => {
  const { theme } = useTheme();

  return (
    <div id="home" className="relative min-h-screen w-full bg-[#f4f5f8] dark:bg-black text-slate-900 dark:text-slate-100 overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-85">
        <GhostFibers
          lineColor={theme === 'light' ? '#818cf8' : '#140E35'}
          glowColor={theme === 'light' ? '#6366f1' : '#3437A0'}
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={theme === 'light'}
          fps={60}
          paused={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/40 to-slate-50 dark:via-black/40 dark:to-black pointer-events-none" />

        {/* Radiant Ambient Atmospheric Aurora Blobs */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400/30 via-indigo-600/25 to-transparent blur-[120px] animate-pulse" />
        <div className="pointer-events-none absolute top-1/4 right-10 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-fuchsia-500/25 via-violet-600/25 to-indigo-700/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 h-[420px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-400/15 via-cyan-500/20 to-indigo-600/20 blur-[120px]" />
      </div>

      <Navbar />

      <main className="relative z-20 max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        {/* Iridescent Cyber Badge */}
        <Link
          to="/features"
          className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full border border-cyan-500/40 dark:border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-fuchsia-500/15 backdrop-blur-xl mb-8 hover:border-cyan-400/70 transition-all cursor-pointer group shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25 hover:scale-[1.02]"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-sm" />
          </span>
          <span className="text-xs font-semibold bg-gradient-to-r from-cyan-700 via-indigo-700 to-fuchsia-700 dark:from-cyan-200 dark:via-indigo-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
            NEXAI 2.0 • Autonomous AI Cyber Defense &amp; Cloud Mesh
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6 drop-shadow-sm">
          Modern Cyber Defense <br className="hidden sm:inline" />
          Built for{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(99,102,241,0.3)]">
            Enterprise Scale
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 font-normal">
          Continuous threat detection, automated incident containment, and zero-trust monitoring across your cloud, Kubernetes, and API networks.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <Link
            to="/signup"
            className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl shadow-indigo-600/35 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-fuchsia-600 via-indigo-500 to-cyan-400" />
            <span className="relative flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-cyan-200" />
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/features"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-cyan-500/40 dark:border-white/20 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-transparent hover:from-cyan-500/20 hover:to-indigo-500/20 backdrop-blur-xl text-sm font-semibold text-slate-800 dark:text-slate-100 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 hover:border-cyan-400"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-sm shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Explore Platform</span>
          </Link>
        </div>

        {/* Hero Showcase with Radiant Border Glow */}
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl p-2.5 border border-slate-300/80 dark:border-white/20 bg-slate-200/90 dark:bg-white/5 hover:bg-slate-300/70 dark:hover:bg-white/10 backdrop-blur-2xl shadow-2xl transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/15 via-transparent to-transparent pointer-events-none rounded-3xl" />
          <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/35 to-fuchsia-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden bg-slate-900 dark:bg-black/90 border border-slate-200/60 dark:border-white/10 shadow-inner">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={robotImage}
                alt="NEXAI Autonomous AI Cyber Defense Agent"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-20 w-full pb-16">
        <TrustedCompanies />
      </div>
    </div>
  );
};

export default Hero1;
