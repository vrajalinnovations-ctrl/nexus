import LogoLoop from '@/components/ui/LogoLoop';
import { Cloud, Shield, Database, Box, Cpu, Activity, Zap, Lock, Layers, Wifi, ShieldCheck, Server, Hexagon, Globe, Key, Laptop} from 'lucide-react';
import companiesData from '@/mock/companies.json';

const iconMap = {
  Cloud,
  Shield,
  Database,
  Box,
  Cpu,
  Activity,
  Zap,
  Lock,
  Layers,
  Wifi,
  ShieldCheck,
  Server,
  Hexagon,
  Globe,
  Key,
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
      <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-slate-300/80 dark:border-white/15 bg-slate-200/90 dark:bg-slate-900/60 hover:bg-slate-300/80 dark:hover:bg-slate-800/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer select-none group/item">
        <div className={`flex items-center justify-center shrink-0 ${item.color} group-hover/item:scale-125 transition-transform duration-300 drop-shadow-sm`}>
          <IconComponent className="w-5 h-5" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-200 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-300 transition-colors whitespace-nowrap">
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
      {/* Vibrant Ambient Aurora Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br from-indigo-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-bl from-fuchsia-500/20 via-violet-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-tr from-cyan-500/10 via-indigo-600/15 to-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-fuchsia-500/15 backdrop-blur-md mb-6 hover:border-cyan-400/50 transition-all cursor-pointer group shadow-lg shadow-cyan-500/15">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-400 to-indigo-400 shadow-sm" />
          </span>
          <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300">
            {companiesData.badge}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Trusted by{' '}
          <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)]">
            Global Leaders
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
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

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16 pt-8 border-t border-slate-300/80 dark:border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
          {companiesData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent tracking-tight drop-shadow-sm`}>
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
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
