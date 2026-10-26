import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import { Shield, Sparkles, Phone, Lock, Zap, GitBranch, ShieldCheck } from 'lucide-react';
import aboutData from '@/mock/about.json';
import about from '../assets/1.png';
import person1 from '@/assets/people/1.png';
import person2 from '@/assets/people/2.png';
import person3 from '@/assets/people/3.png';
import person4 from '@/assets/people/4.png';
import person5 from '@/assets/people/5.png';
import person6 from '@/assets/people/6.png';

const peoplePhotos = [person1, person2, person3, person4, person5, person6];

const Linkedin = ({ className = '', ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6h2.75v-7.6H6.46M7.83 6.25c-.94 0-1.7.76-1.7 1.7s.76 1.7 1.7 1.7 1.7-.76 1.7-1.7-.76-1.7-1.7-1.7Z" />
  </svg>
);

const iconMap = {
  Lock,
  Zap,
  GitBranch,
  ShieldCheck
};

const values = aboutData.values.map(v => ({
  ...v,
  icon: iconMap[v.icon] || ShieldCheck
}));

const team = (aboutData.team || []).map((member, idx) => ({
  ...member,
  photo: peoplePhotos[idx] || member.photo
}));

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
    <Sparkles className="h-3 w-3 text-cyan-400" />
    {children}
  </span>
);

const BookCall = () => (
  <a
    href="#contact"
    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 shadow-lg"
  >
    <Phone className="h-3 w-3 text-cyan-300" />
    Book a call
  </a>
);

const SectionHead = ({ pill, dark, light }) => (
  <div className="flex flex-col gap-6">
    <div>
      <Pill>{pill}</Pill>
    </div>
    <div className="flex items-end justify-between gap-6 flex-wrap">
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
        {dark}
        {light && <span className="block text-slate-400 sm:inline"> {light}</span>}
      </h2>
      <BookCall />
    </div>
  </div>
);

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
);

const Photo = ({ src, alt, className }) => (
  <div className={`relative w-full overflow-hidden border border-white/20 bg-slate-900 shadow-2xl ${className}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 hover:grayscale-0"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  </div>
);

export const AboutPage = () => {
  const [sent, setSent] = useState(false);

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
          <Pill>About Us</Pill>
          <h1 className="mt-8 flex flex-wrap items-center justify-center gap-x-3 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            <span className="text-slate-400">Welcome to</span>
            <span className="inline-flex items-center gap-2">
              <Shield className="h-8 w-8 text-cyan-400 sm:h-12 sm:w-12" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent font-bold">NEXUS</span>
            </span>
          </h1>
          <p className="mt-8 text-lg font-medium leading-relaxed text-slate-300 sm:text-xl">
            We believe in the transformative <span className="text-cyan-400">power of autonomous defense.</span> Our
            mission is to stop attacks before they run, so every team can build without fear.
          </p>
        </section>

        <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
          <section className="space-y-8">
            <SectionHead pill="Who We Are" dark="Get to Know" light="Us" />
            <Photo
              src={about}
              alt="The Nexus team collaborating"
              className="aspect-video rounded-3xl"
            />
            <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-slate-400">
              NEXUS was founded by kernel engineers and researchers who saw that humans can't out-type automated
              attacks. Today our team of engineers, cryptographers and data scientists builds defense that answers in
              microseconds.
            </p>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHead pill="Our Values" dark="What We" light="Stand For" />
            <ul className="divide-y divide-white/10">
              {values.map(({ icon: Icon, name, label, text }) => (
                <li
                  key={name}
                  className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3 md:gap-8 items-start"
                >
                  <div className="flex items-center gap-3 text-cyan-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-md shadow-md">
                      <Icon className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-semibold text-white">{name}</span>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">{label}</p>
                    <p className="mt-1 text-sm font-medium text-slate-200 leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <Divider />

          <section className="space-y-8">
            <SectionHead pill="Our Team" dark="The People Behind" light="Your Security" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-12 sm:grid-cols-3 lg:grid-cols-6">
              {team.map((p, i) => (
                <div key={p.name} className={`group ${i % 2 === 1 ? 'lg:translate-y-16' : ''}`}>
                  <div className={`relative overflow-hidden border border-white/20 bg-white/5 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan-400/50 aspect-square ${i % 2 === 0 ? 'rounded-full' : 'rounded-t-full rounded-b-3xl'}`}>
                    <img
                      src={p.photo}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{p.name}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
                    {p.role}
                    <Linkedin className="h-3 w-3 fill-slate-400 transition-colors group-hover:fill-cyan-400" />
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          <section id="contact" className="space-y-8">
            <SectionHead pill="Connect Us" dark="Tell Us What" light="You Need Secured" />

            <Card
              padding="px-6 py-12 sm:px-10 sm:py-16"
              className="hover:border-cyan-500/30"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden opacity-35"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(6, 182, 212, 0.18) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(99, 102, 241, 0.18) 1px, transparent 1px)
                  `,
                  backgroundSize: '48px 48px',
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
              />

              <span className="pointer-events-none absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 text-cyan-400/50 font-mono text-xs select-none">+</span>
              <span className="pointer-events-none absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 text-cyan-400/50 font-mono text-xs select-none">+</span>
              <span className="pointer-events-none absolute left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2 text-indigo-400/50 font-mono text-xs select-none">+</span>
              <span className="pointer-events-none absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 text-indigo-400/50 font-mono text-xs select-none">+</span>

              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />

              {sent ? (
                <div className="relative text-center py-8">
                  <p className="text-xl font-bold text-white">
                    Thanks for connecting.
                  </p>
                  <p className="mt-2 text-sm text-cyan-300 font-mono">
                    A Principal Security Architect will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative mx-auto flex w-full max-w-lg flex-col gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-colors focus:border-cyan-400/60"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-colors focus:border-cyan-400/60"
                  />
                  <textarea
                    required
                    rows={5}
                    placeholder="Share what you need secured..."
                    className="w-full resize-none rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-colors focus:border-cyan-400/60"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full border border-white/20 bg-gradient-to-r from-cyan-500 via-indigo-600 to-indigo-700 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-indigo-600 hover:shadow-cyan-500/40 cursor-pointer"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;