import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Pricing from '@/components/sections/Pricing';
import Card from '@/components/ui/Card';
import { Sparkles, Check, Minus } from 'lucide-react';
import pricingData from '@/mock/pricing.json';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-800 dark:text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
    {children}
  </span>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 via-indigo-500/30 to-transparent" />
);

export const PricingPage = () => {
  const comparisonCategories = pricingData.comparisonCategories || [];

  return (
    <div className="relative min-h-screen w-full bg-[#f4f5f8] dark:bg-black font-sans text-slate-900 dark:text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 overflow-hidden transition-colors duration-300">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-full max-w-7xl rounded-full bg-gradient-to-tr from-cyan-500/25 via-indigo-600/25 to-fuchsia-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[450px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-[450px] w-[500px] rounded-full bg-gradient-to-tl from-fuchsia-500/25 via-violet-600/20 to-cyan-500/15 blur-[130px]" />

      <Navbar />

      <main className="relative z-10 w-full">
        <Pricing />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 lg:pb-28">
          <Divider />

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
              <Pill>In-Depth Specification</Pill>
              <h2 className="mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Compare Plan{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Detailed breakdown of kernel-level filters, edge scrubbing volume, and compliance certifications across all tiers.
              </p>
            </div>

            <div className="sm:hidden flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3 font-mono">
              <span>Swipe horizontally to compare full specs</span>
              <span>&rarr;</span>
            </div>

            <Card padding="p-0" className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-300 dark:border-white/20 bg-slate-200 dark:bg-white/5">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" style={{ minWidth: '620px' }}>
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5">
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">Features</th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 text-center w-1/4">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-slate-900 dark:text-white">Sentinel</span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">$39/node</span>
                        </div>
                      </th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300 text-center w-1/4 bg-cyan-50/80 dark:bg-cyan-950/20">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-slate-900 dark:text-white">Professional</span>
                          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">$139/node</span>
                        </div>
                      </th>
                      <th className="py-4 sm:py-5 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 text-center w-1/4">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-slate-900 dark:text-white">Enterprise</span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">$479/node</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-xs sm:text-sm">
                    {comparisonCategories.map((cat, cIdx) => (
                      <React.Fragment key={cIdx}>
                        <tr className="bg-slate-100/70 dark:bg-white/5 border-t border-b border-slate-200 dark:border-white/10">
                          <td colSpan={4} className="py-2.5 sm:py-3 px-4 sm:px-6 text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                            {cat.category}
                          </td>
                        </tr>
                        {cat.features.map((feat, fIdx) => (
                          <tr key={fIdx} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">{feat.name}</td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-slate-700 dark:text-slate-300">
                              {typeof feat.sentinel === 'boolean' ? (
                                feat.sentinel ? (
                                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-xs font-mono font-medium">{feat.sentinel}</span>
                              )}
                            </td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-cyan-800 dark:text-cyan-200 bg-cyan-50/50 dark:bg-cyan-950/10">
                              {typeof feat.neural === 'boolean' ? (
                                feat.neural ? (
                                  <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-300">{feat.neural}</span>
                              )}
                            </td>
                            <td className="py-3 sm:py-4 px-4 sm:px-6 text-center text-slate-700 dark:text-slate-300">
                              {typeof feat.sovereign === 'boolean' ? (
                                feat.sovereign ? (
                                  <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mx-auto" />
                                ) : (
                                  <Minus className="w-4 h-4 text-slate-400 dark:text-slate-600 mx-auto" />
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
