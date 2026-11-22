import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Features from '@/components/sections/Features';
import Card from '@/components/ui/Card';
import { Sparkles, Cpu, Zap, Globe, Lock, Check, Shield, ArrowRight, Server, Layers, Terminal } from 'lucide-react';
import featuresData from '@/mock/features.json';

const iconMap = {
  Cpu,
  Zap,
  Globe,
  Lock,
  Server,
  Layers,
  Terminal
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-800 dark:text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
    {children}
  </span>
);

const pillarColors = [
  {
    iconBox: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-300 shadow-cyan-500/20',
    tagline: 'text-cyan-600 dark:text-cyan-400',
    check: 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30'
  },
  {
    iconBox: 'bg-fuchsia-500/15 border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-300 shadow-fuchsia-500/20',
    tagline: 'text-fuchsia-600 dark:text-fuchsia-400',
    check: 'bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/30'
  },
  {
    iconBox: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-300 shadow-indigo-500/20',
    tagline: 'text-indigo-600 dark:text-indigo-400',
    check: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30'
  },
  {
    iconBox: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-300 shadow-emerald-500/20',
    tagline: 'text-emerald-600 dark:text-emerald-400',
    check: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
  }
];

const capabilityColors = [
  'bg-cyan-500/15 border-cyan-500/30 text-cyan-600 dark:text-cyan-300',
  'bg-indigo-500/15 border-indigo-500/30 text-indigo-600 dark:text-indigo-300',
  'bg-fuchsia-500/15 border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-300',
  'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-300'
];

export const FeaturesPage = () => {
  const pillars = (featuresData.pillars || []).map(p => ({
    ...p,
    icon: iconMap[p.icon] || Cpu
  }));

  const capabilities = featuresData.capabilities || [];

  return (
    <div className="relative min-h-screen w-full bg-[#f4f5f8] dark:bg-black font-sans text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 overflow-hidden transition-colors duration-300">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-full max-w-7xl rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-600/25 to-fuchsia-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-[450px] w-[500px] rounded-full bg-gradient-to-tl from-fuchsia-500/25 via-violet-600/20 to-cyan-500/15 blur-[130px]" />

      <Navbar />

      <main className="relative z-10 w-full pt-16">
        <section className="mx-auto flex max-w-4xl flex-col items-center text-center px-6 mb-20">
          <Pill>Architecture & Capabilities</Pill>
          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              Microsecond Zero-Day
            </span>{' '}
            Defense
          </h1>
          <p className="mt-8 text-base sm:text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
            Explore the eBPF kernel mesh, autonomous AI swarms, and wire-speed global scrubbing that power modern mission-critical infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/pricing"
              className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Deploy Free Trial</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white/80 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 shadow-md hover:border-cyan-500/40"
            >
              <span>Schedule Architecture Review</span>
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              const colorTheme = pillarColors[pIdx % pillarColors.length];
              return (
                <Card
                  key={pillar.id}
                  padding="p-8 sm:p-10"
                  className="rounded-3xl hover:border-cyan-500/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${colorTheme.iconBox}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className={`text-xs font-mono uppercase tracking-wider mb-4 ${colorTheme.tagline}`}>
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-2.5">
                    {pillar.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${colorTheme.check}`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <div className="w-full">
          <Features />
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-t border-slate-200 dark:border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Pill>Platform Attestation</Pill>
            <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Enterprise Grade by{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-indigo-600 to-fuchsia-600 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
                Design
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Every component is built for zero downtime, hardware-level isolation, and immutable regulatory attestation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <Card key={idx} padding="p-6" className="rounded-2xl hover:border-cyan-500/30">
                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center mb-4 ${capabilityColors[idx % capabilityColors.length]}`}>
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
