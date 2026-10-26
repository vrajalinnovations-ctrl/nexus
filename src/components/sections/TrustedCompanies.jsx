import LogoLoop from '@/components/ui/LogoLoop';
import {
  Music,
  MessageSquare,
  Box,
  Users,
  Share2,
  Globe,
  Play,
  Camera,
  LayoutGrid,
  Search,
  Package,
  Laptop
} from 'lucide-react';
import companiesData from '@/mock/companies.json';

const iconMap = {
  Music,
  MessageSquare,
  Box,
  Users,
  Share2,
  Globe,
  Play,
  Camera,
  LayoutGrid,
  Search,
  Package,
  Laptop
};

const row1 = companiesData.row1.map(item => ({
  ...item,
  icon: iconMap[item.icon] || Globe
}));

const row2 = companiesData.row2.map(item => ({
  ...item,
  icon: iconMap[item.icon] || Globe
}));

const renderPill = item => {
  const IconComponent = item.icon;
  return {
    node: (
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer select-none">
        <div className={`flex items-center justify-center shrink-0 ${item.color} group-hover/item:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-slate-200 group-hover/item:text-white transition-colors whitespace-nowrap">
          {item.name}
        </span>
      </div>
    ),
    title: item.name,
  };
};

export const TrustedCompanies = () => {
  const logosRow1 = row1.map(renderPill);
  const logosRow2 = row2.map(renderPill);

  return (
    <section className="relative w-full py-20 overflow-hidden bg-transparent z-20 flex flex-col items-center">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-2xl h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 backdrop-blur-md mb-6 hover:border-indigo-400/50 transition-all cursor-pointer group shadow-lg shadow-indigo-500/20">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="text-xs font-medium text-indigo-200">
            {companiesData.badge}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Trusted by{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            Global Leaders
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          {companiesData.subheading}
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-5 my-2">
        <div className="w-full">
          <LogoLoop
            logos={logosRow1}
            speed={35}
            direction="left"
            gap={20}
            logoHeight={48}
            pauseOnHover={true}
            hoverSpeed={10}
            fadeOut={true}
            fadeOutWidth={0.16}
            scaleOnHover={true}
            draggable={true}
            ariaLabel="Trusted partner logos row 1"
          />
        </div>

        <div className="w-full">
          <LogoLoop
            logos={logosRow2}
            speed={30}
            direction="right"
            gap={20}
            logoHeight={48}
            pauseOnHover={true}
            hoverSpeed={10}
            fadeOut={true}
            fadeOutWidth={0.16}
            scaleOnHover={true}
            draggable={true}
            ariaLabel="Trusted partner logos row 2"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
          {companiesData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent tracking-tight`}>
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
