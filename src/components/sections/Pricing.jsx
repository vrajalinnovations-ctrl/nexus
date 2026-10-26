import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';
import { Check, Sparkles, Shield, Zap, Building2, Lock,ArrowRight, ChevronDown, HelpCircle, Server } from 'lucide-react';
import pricingData from '@/mock/pricing.json';

const iconMap = {
  Shield,
  Zap,
  Building2,
  Lock,
  Server
};

const pricingTiers = pricingData.tiers.map(tier => ({
  ...tier,
  icon: iconMap[tier.icon] || Shield
}));

const guarantees = (pricingData.guarantees || []).map(g => ({
  ...g,
  icon: iconMap[g.icon] || Shield
}));

const faqs = pricingData.faqs;

export const Pricing = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section id="pricing" className="relative w-full py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black text-slate-100 overflow-hidden">

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute top-0 h-px w-1/2 max-w-xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-1 h-3 w-1/3 max-w-md bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-200 text-xs font-medium mb-5 sm:mb-6 backdrop-blur-md shadow-lg shadow-indigo-500/20 hover:border-indigo-400/50 transition-all cursor-pointer">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-mono text-xs">Flexible, Transparent Pricing</span>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-6">
            Simple, Predictable Plans for{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              Every Team
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Protect your cloud infrastructure with transparent pricing. Scale nodes on demand with no hidden egress fees or surprise charges.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="w-full max-w-sm sm:w-auto flex items-center justify-center p-1 sm:p-1.5 gap-1 sm:gap-3 mb-10 sm:mb-16 rounded-full border border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => setAnnualBilling(false)}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap text-center ${!annualBilling
              ? 'bg-white/15 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setAnnualBilling(true)}
            className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap text-center ${annualBilling
              ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            <span>Annual Billing</span>
            <span className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 font-mono leading-none">
              -25%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid using Reusable Card Component */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch">
          {pricingTiers.map(tier => {
            const Icon = tier.icon;
            const price = annualBilling ? tier.annualPrice : tier.monthlyPrice;

            return (
              <Card
                key={tier.id}
                overflowVisible={true}
                className={tier.popular ? 'border-cyan-400/70 ring-1 ring-cyan-400/30 scale-100 lg:-translate-y-2 lg:scale-105 mt-2 lg:mt-0' : ''}
                badge={
                  tier.popular ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 fill-current text-cyan-200" />
                      <span>{tier.badge}</span>
                    </>
                  ) : null
                }
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${tier.popular
                            ? 'border-cyan-500/40 bg-cyan-950/50 text-cyan-300'
                            : 'border-white/10 bg-white/5 text-slate-300'
                            }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight">
                          {tier.name}
                        </span>
                      </div>

                      {!tier.popular && (
                        <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 border border-white/5 shrink-0">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {tier.tagline}
                    </p>

                    {/* Pricing Display */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-slate-400">
                          / node / month
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {annualBilling ? 'Billed annually' : 'Billed month-to-month'}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        Included Capabilities:
                      </span>
                      {tier.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 sm:gap-3">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.popular
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-white/10 text-slate-300 border border-white/10'
                              }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={tier.ctaVariant === 'enterprise' ? '/contact' : '/signup'}
                    className={`w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 via-indigo-500 to-indigo-600 text-white shadow-xl shadow-indigo-600/30 hover:shadow-cyan-400/30 hover:-translate-y-0.5'
                      : tier.ctaVariant === 'enterprise'
                        ? 'border border-cyan-500/40 bg-cyan-950/30 text-cyan-200 hover:bg-cyan-900/40 hover:text-white'
                        : 'border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white hover:border-white/30'
                      }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enterprise Trust & Security Guarantees Bar using Card component */}
        <div className="mt-12 sm:mt-16 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {guarantees.map((item, idx) => {
            const GIcon = item.icon;
            return (
              <Card key={idx} padding="p-3.5 sm:p-4" className="rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center justify-center shrink-0">
                    <GIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-snug">{item.title}</span>
                    <span className="text-xs text-slate-400 leading-tight mt-0.5">{item.description}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enterprise FAQ Accordion */}
        <div className="mt-14 sm:mt-20 lg:mt-24 w-full max-w-4xl flex flex-col items-center">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Clear Answers to Critical Questions
            </h3>
          </div>

          <div className="space-y-3 sm:space-y-3.5 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr'
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3 sm:pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Card
          padding="p-6 sm:p-8 lg:p-10"
          className="mt-12 sm:mt-16 lg:mt-20 w-full max-w-5xl rounded-2xl sm:rounded-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
            <div className="flex flex-col">
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {pricingData.consultationBanner?.title || 'Need a Custom Multi-Region Mesh Architecture?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {pricingData.consultationBanner?.description || 'Talk directly with a Principal Security Architect for dedicated bare-metal clusters, compliance attestation, or air-gapped deployments.'}
              </p>
            </div>

            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-6 sm:px-7 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all shrink-0 cursor-pointer hover:border-cyan-400/40"
            >
              {pricingData.consultationBanner?.ctaText || 'Schedule Architecture Review'}
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
