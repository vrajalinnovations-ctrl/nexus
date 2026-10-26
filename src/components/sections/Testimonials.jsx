import { Quote } from 'lucide-react';
import testimonialsData from '@/mock/testimonials.json';

const TestimonialCard = ({ item }) => (
  <div className="group relative flex w-80 sm:w-96 shrink-0 flex-col justify-between rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10 select-none">
    <div>
      <Quote className="h-8 w-8 text-white/30 fill-white/10 mb-3" />
      <p className="text-sm leading-relaxed text-slate-200 font-normal line-clamp-4">
        "{item.quote}"
      </p>
    </div>

    <div>
      <div className="h-px w-full bg-white/10 my-5" />
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white shadow-md">
          {item.initials}
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold text-white truncate">
            {item.author}
          </h4>
          <p className="text-xs text-slate-400 truncate">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const allItems = testimonialsData.testimonials;
  const midpoint = Math.ceil(allItems.length / 2);
  const row1 = allItems.slice(0, midpoint);
  const row2 = allItems.slice(midpoint);

  const displayRow1 = [...row1, ...row1];
  const displayRow2 = [...row2, ...row2];

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-28 font-sans text-white">

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 h-px w-1/2 max-w-xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-1 h-3 w-1/3 max-w-md bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-sm" />
      </div>

      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="block text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-3">
            TESTIMONIALS
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Our Clients Say!
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            {testimonialsData.subheading}
          </p>
        </div>
      </div>

      <div className="relative mt-14 w-full overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent" />

        <div className="flex flex-col gap-6">
          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee flex gap-6">
              {displayRow1.map((item, idx) => (
                <TestimonialCard key={`r1-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>

          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee-reverse flex gap-6">
              {displayRow2.map((item, idx) => (
                <TestimonialCard key={`r2-${item.id}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
