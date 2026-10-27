import { Link } from 'react-router-dom';
import GhostFibers from '@/components/ui/GhostFibers';
import Navbar from '@/components/layout/Navbar';
import robotImage from '@/assets/2.png';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import { Shield, ArrowRight, Play, ChevronRight } from 'lucide-react';

export const Hero = () => {

  return (
    <div id="home" className="relative min-h-screen w-full bg-black text-slate-100 overflow-hidden font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-85">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
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
          lightMode={false}
          fps={60}
          paused={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      </div>

      <Navbar />

      <main className="relative z-20 max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 backdrop-blur-md mb-8 hover:border-indigo-400/50 transition-all cursor-pointer group shadow-lg shadow-indigo-500/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-xs font-medium text-indigo-200">
            AEGIX Template • Enterprise Cyber Defense & AI Cloud UI
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6 drop-shadow-sm">
          Modern Cyber Defense <br className="hidden sm:inline" />
          Built for{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg">
            Enterprise Scale
          </span>
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
          Continuous threat detection, automated incident containment, and zero-trust monitoring across your cloud, Kubernetes, and API networks.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <Link
            to="/signup"
            className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600" />
            <span className="relative flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-cyan-200" />
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/features"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-sm font-semibold text-slate-200 hover:text-white transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-400/40"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Explore Platform</span>
          </Link>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-2xl p-2 border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-2xl transition-all duration-300 group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none rounded-2xl" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative rounded-xl overflow-hidden bg-black/90 border border-white/10">
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img
                src={robotImage}
                alt="AEGIX Autonomous AI Cyber Defense Agent"
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

export default Hero;
