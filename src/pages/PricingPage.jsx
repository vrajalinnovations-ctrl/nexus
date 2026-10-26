import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Pricing from '@/components/sections/Pricing';
import Card from '@/components/ui/Card';
import { Sparkles, Check, Minus } from 'lucide-react';
import pricingData from '@/mock/pricing.json';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-400" />
    {children}
  </span>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
);

export const PricingPage = () => {
  const comparisonCategories = pricingData.comparisonCategories || [];

  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-700/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <Navbar />

      <main className="relative z-10 w-full">
        <Pricing />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 lg:pb-28">
          <Divider />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <Pill>In-Depth Specification</Pill>
              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Compare Plan{' '}
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Detailed breakdown of kernel-level filters, edge scrubbing volume, and compliance certifications across all tiers.
              </p>
            </div>

            <div className="sm:hidden flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-3 font-mono">
              <span>Swipe horizontally to compare full specs</span>
              <span>&rarr;</span>
            </div>

            <Card padding="p-0" className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" style={{ minWidth: '620px' }}>
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white">Features</th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-200 text-center w-1/4">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-white">Sentinel</span>
                          <span className="text-xs font-mono text-slate-400">$39/node</span>
                        </div>
                      </th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-cyan-300 text-center w-1/4 bg-cyan-950/20">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-white">Professional</span>
                          <span className="text-xs font-mono text-cyan-400">$139/node</span>
                        </div>
                      </th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-200 text-center w-1/4">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-white">Enterprise</span>
                          <span className="text-xs font-mono text-slate-400">$479/node</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                    {comparisonCategories.map((cat, cIdx) => (
                      <React.Fragment key={cIdx}>
                        <tr className="bg-white/5 border-t border-b border-white/10">
                          <td colSpan={4} className="py-2.5 sm:py-3 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                            {cat.category}
                          </td>
                        </tr>
                        {cat.features.map((feat, fIdx) => (
                          <tr key={fIdx} className="hover:bg-white/5 transition-colors">
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-slate-200 font-medium">{feat.name}</td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-slate-300">
                              {typeof feat.sentinel === 'boolean' ? (
                                feat.sentinel ? (
                                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-xs font-mono font-medium">{feat.sentinel}</span>
                              )}
                            </td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-cyan-200 bg-cyan-950/10">
                              {typeof feat.neural === 'boolean' ? (
                                feat.neural ? (
                                  <Check className="w-4 h-4 text-cyan-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-xs font-mono font-semibold text-cyan-300">{feat.neural}</span>
                              )}
                            </td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-slate-300">
                              {typeof feat.sovereign === 'boolean' ? (
                                feat.sovereign ? (
                                  <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-xs font-mono font-medium">{feat.sovereign}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;
