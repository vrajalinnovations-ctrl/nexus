import { Quote } from 'lucide-react';
import testimonialsData from '@/mock/testimonials.json';

const avatarGradients = [
  'from-cyan-500 to-blue-600',
  'from-indigo-500 to-violet-600',
  'from-violet-500 to-fuchsia-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-rose-600',
  'from-pink-500 to-purple-600',
];

const TestimonialCard = ({ item, index = 0 }) => {
  const avatarGrad = avatarGradients[index % avatarGradients.length];

  return (
    <div className="group relative flex w-80 sm:w-96 shrink-0 flex-col justify-between rounded-3xl border border-slate-300/90 dark:border-white/20 bg-slate-200 hover:bg-slate-300/70 dark:bg-white/5 dark:hover:bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 dark:hover:border-cyan-400/60 shadow-md hover:shadow-xl select-none overflow-hidden text-start">
      {/* Iridescent Hover Ambient Glow */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-fuchsia-500/15 blur-sm" />
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 via-indigo-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-start">
        <Quote className="h-8 w-8 text-cyan-500/60 dark:text-cyan-400/70 fill-cyan-500/15 dark:fill-cyan-400/15 mb-3 rtl:scale-x-[-1]" />
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-normal line-clamp-4 text-start">
          "{item.quote}"
        </p>
      </div>

      <div className="relative z-10">
        <div className="h-px w-full bg-slate-300/80 dark:bg-white/10 my-5" />
        <div className="flex items-center gap-3.5">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr ${avatarGrad} text-xs font-bold text-white shadow-md shadow-indigo-500/20`}>
            {item.initials}
          </div>
          <div className="min-w-0 text-start">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">
              {item.author}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {item.role}, {item.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const allItems = testimonialsData.testimonials;
  const midpoint = Math.ceil(allItems.length / 2);
  const row1 = allItems.slice(0, midpoint);
  const row2 = allItems.slice(midpoint);

  const displayRow1 = [...row1, ...row1];
  const displayRow2 = [...row2, ...row2];

  return (
    <section className="relative w-full overflow-hidden bg-[#f4f5f8] dark:bg-black py-20 sm:py-28 font-sans text-slate-900 dark:text-white transition-colors duration-300">

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 h-px w-1/2 max-w-xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-1 h-3 w-1/3 max-w-md bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      </div>

      {/* Multi-Color Radiant Aurora Blobs */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-600/20 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-fuchsia-500/20 via-violet-600/20 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 via-indigo-600/15 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-300 font-bold mb-3 px-4 py-1 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-fuchsia-500/15 shadow-sm shadow-cyan-500/10">
            TESTIMONIALS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Our Clients{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Say!
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {testimonialsData.subheading}
          </p>
        </div>
      </div>

      <div className="relative mt-14 w-full overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-24 md:w-48 bg-gradient-to-r from-[#f4f5f8] via-[#f4f5f8]/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-24 md:w-48 bg-gradient-to-l from-[#f4f5f8] via-[#f4f5f8]/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />

        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex w-full overflow-hidden py-2">
            <div className="animate-marquee flex gap-6">
              {displayRow1.map((item, idx) => (
                <TestimonialCard key={`r1-${item.id}-${idx}`} item={item} index={idx} />
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden py-2">
            <div className="animate-marquee-reverse flex gap-6">
              {displayRow2.map((item, idx) => (
                <TestimonialCard key={`r2-${item.id}-${idx}`} item={item} index={idx + midpoint} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
