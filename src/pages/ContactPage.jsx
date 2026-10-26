import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight, Plus, Minus, Shield, Clock, ExternalLink } from 'lucide-react';
import contactData from '@/mock/contact.json';
import heroImg from '@/assets/3.png';
import sfImg from '@/assets/4.png';
import londonImg from '@/assets/5.png';
import parisImg from '@/assets/6.png';

const locationImgs = [sfImg, londonImg, parisImg];

const iconMap = {
  Mail,
  Phone,
  MapPin
};

const channels = (contactData.channels || []).map(c => ({
  ...c,
  icon: iconMap[c.icon] || Mail
}));

const locations = (contactData.locations || []).map((loc, idx) => ({
  ...loc,
  image: locationImgs[idx] || loc.image
}));
const topics = contactData.topics || [];
const faqs = contactData.faqs || [];

const inputClass =
  'w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-colors focus:border-cyan-400/60';

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-400" />
    {children}
  </span>
);

const CallNow = () => (
  <a
    href="tel:+14158904220"
    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 shadow-lg cursor-pointer"
  >
    <Phone className="h-3 w-3 text-cyan-300" />
    Emergency Hotline
  </a>
);

const SectionHead = ({ pill, dark, light, action = true }) => (
  <div className="flex flex-col gap-6">
    <div>
      <Pill>{pill}</Pill>
    </div>
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
        {dark}
        {light && <span className="block text-slate-400 sm:inline"> {light}</span>}
      </h2>
      {action && <CallNow />}
    </div>
  </div>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
);

const Photo = ({ src, alt, className = '' }) => (
  <div className={`relative w-full overflow-hidden border border-white/20 bg-slate-900 shadow-2xl ${className}`}>
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  </div>
);

const ChannelRow = ({ icon: Icon, label, value, href }) => {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-300 transition-colors group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-200">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className="flex-1">
        <span className="block text-xs font-mono uppercase tracking-wider text-slate-400">{label}</span>
        <span className="block text-sm font-medium text-white">{value}</span>
      </span>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
      )}
    </>
  );

  const base = 'group flex items-center gap-4 border-b border-white/10 py-5 transition-colors hover:bg-white/5 px-3 rounded-xl';
  return href ? (
    <a href={href} className={base}>
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
};

export const ContactPage = () => {
  const [topic, setTopic] = useState('Incident Response');
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-700/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-16 sm:px-10">
        <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Pill>{contactData.pill || 'Connect Us'}</Pill>
          <h1 className="mt-8 flex flex-wrap items-center justify-center gap-x-3 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            <span className="text-slate-400">{contactData.heading || "Let's Talk"}</span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-8 w-8 text-cyan-400 sm:h-12 sm:w-12" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent font-bold">
                {contactData.headingHighlight || 'Autonomous Defense'}
              </span>
            </span>
          </h1>
          <p className="mt-8 text-lg font-medium leading-relaxed text-slate-300 sm:text-xl">
            {contactData.tagline}
          </p>
          <div className="mt-6 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>{contactData.availability}</span>
          </div>
        </section>

        <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
          <section className="space-y-8">
            <SectionHead
              pill={contactData.hero?.pill || 'Global Operations'}
              dark={contactData.hero?.headingDark || 'Global Security'}
              light={contactData.hero?.headingLight || 'Operations Centers'}
            />
            <Photo
              src={heroImg}
              alt={contactData.hero?.imageAlt}
              className="aspect-video rounded-3xl"
            />
            <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-slate-400">
              {contactData.hero?.caption}
            </p>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHead
              pill="Worldwide Hubs"
              dark="Physical Facilities &"
              light="Edge Centers"
              action={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <Card
                  key={loc.city}
                  padding="p-0"
                  className="rounded-3xl overflow-hidden hover:border-cyan-400/40"
                >
                  <div className="relative h-48 w-full overflow-hidden border-b border-white/10">
                    <img
                      src={loc.image}
                      alt={loc.city}
                                      className="h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md">
                      {loc.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white tracking-tight">{loc.city}</h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                          {loc.region}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300">
                        {loc.address}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs font-semibold text-cyan-300 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{loc.phone}</span>
                      </a>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        <span>24/7 Monitored</span>
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHead pill="Direct Dispatch" dark="Open An" light="Inquiry" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Direct Channels</h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Routing directly to designated L3 security specialists and architectural leads.
                  </p>
                </div>

                <div className="border-t border-white/10">
                  {channels.map((c) => (
                    <ChannelRow key={c.label} {...c} />
                  ))}
                </div>
              </div>

              <Card
                padding="px-6 py-10 sm:px-10 sm:py-12"
                className="lg:col-span-3 hover:border-cyan-500/30"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />

                {sent ? (
                  <div className="relative flex flex-col items-center py-16 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                      <Mail className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 text-2xl font-bold text-white">Message Dispatched</h2>
                    <p className="mt-2 text-sm text-slate-300">A Principal Security Architect will be in touch shortly.</p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:border-cyan-400/40 cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                    <div>
                      <p className="mb-3 text-xs font-mono uppercase tracking-wider text-slate-400">Select Inquiry Domain</p>
                      <div className="flex flex-wrap gap-2">
                        {topics.map((t) => (
                          <button
                            key={t}
                            type="button"
                            aria-pressed={topic === t}
                            onClick={() => setTopic(t)}
                            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all cursor-pointer ${topic === t
                                ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/40'
                                : 'border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10'
                              }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input required type="text" placeholder="Your Name" className={inputClass} />
                      <input required type="email" placeholder="Work Email" className={inputClass} />
                    </div>
                    <input type="text" placeholder="Organization / Infrastructure Mesh" className={inputClass} />
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your security challenge or architecture requirements..."
                      className={`${inputClass} resize-none`}
                    />

                    <button
                      type="submit"
                      className="mt-2 w-full rounded-full border border-white/20 bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-indigo-600 hover:shadow-cyan-500/40 cursor-pointer"
                    >
                      Dispatch Request
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHead pill="Knowledge Base" dark="Frequently Asked" light="Questions" action={false} />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Transparent protocols regarding triage speed, architectural walkthroughs, vulnerability disclosures, and air-gapped enclaves.
                </p>
              </div>

              <ul className="lg:col-span-3 space-y-3">
                {faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <li
                      key={f.q}
                      className="rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenFaq(open ? -1 : i)}
                        className="flex w-full items-center justify-between gap-6 p-5 sm:p-6 text-left cursor-pointer hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
                        {open ? (
                          <Minus className="h-4 w-4 shrink-0 text-cyan-400" />
                        ) : (
                          <Plus className="h-4 w-4 shrink-0 text-slate-400" />
                        )}
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${open ? 'opacity-100' : 'opacity-0'
                          }`}
                        style={{
                          gridTemplateRows: open ? '1fr' : '0fr'
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                            {f.a}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;