import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Features from '@/components/sections/Features';
import Card from '@/components/ui/Card';
import {
  Sparkles,
  Cpu,
  Zap,
  Globe,
  Lock,
  Check,
  Shield,
  ArrowRight,
  Server,
  Layers,
  Terminal
} from 'lucide-react';
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
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-400" />
    {children}
  </span>
);

export const FeaturesPage = () => {
  const pillars = (featuresData.pillars || []).map(p => ({
    ...p,
    icon: iconMap[p.icon] || Cpu
  }));

  const capabilities = featuresData.capabilities || [];

  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-700/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <Navbar />

      <main className="relative z-10 w-full pt-16">
        <section className="mx-auto flex max-w-4xl flex-col items-center text-center px-6 mb-20">
          <Pill>Architecture & Capabilities</Pill>
          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              Microsecond Zero-Day
            </span>{' '}
            Defense
          </h1>
          <p className="mt-8 text-base sm:text-lg font-medium leading-relaxed text-slate-300 max-w-2xl">
            Explore the eBPF kernel mesh, autonomous AI swarms, and wire-speed global scrubbing that power modern mission-critical infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/pricing"
              className="w-full sm:w-auto relative group px-8 py-3.5 rounded-xl font-semibold text-sm text-white shadow-xl shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Deploy Free Trial</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-sm font-semibold text-slate-200 hover:text-white transition-all duration-300"
            >
              <span>Schedule Architecture Review</span>
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.id}
                  padding="p-8 sm:p-10"
                  className="rounded-3xl hover:border-cyan-400/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-2.5">
                    {pillar.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center shrink-0">
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Pill>Platform Attestation</Pill>
            <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Grade by{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
                Design
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Every component is built for zero downtime, hardware-level isolation, and immutable regulatory attestation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <Card key={idx} padding="p-6" className="rounded-2xl hover:border-cyan-400/30">
                <div className="w-8 h-8 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 flex items-center justify-center mb-4">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-white tracking-tight mb-2">
                  {cap.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
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
