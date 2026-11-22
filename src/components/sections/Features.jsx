import { ShieldCheck, MousePointer2, Power, Cloud, Container, Webhook, Bell, Sparkles, Zap, GitBranch, MessageSquare } from 'lucide-react';
import Card from '@/components/ui/Card';
import FloatingBackground from '@/components/ui/FloatingBackground';
import featuresData from '@/mock/features.json';

const threats = featuresData.threats;
const environments = featuresData.environments;

const leftNodes = [
  { Icon: GitBranch, y: 40 },
  { Icon: Cloud, y: 110 },
  { Icon: Container, y: 180 }
];

const rightNodes = [
  { Icon: MessageSquare, y: 40 },
  { Icon: Webhook, y: 110 },
  { Icon: Bell, y: 180 }
];

const ThreatBreakdown = () => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 p-5 backdrop-blur-md shadow-sm">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/10 via-transparent to-transparent pointer-events-none rounded-2xl" />

    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Real-Time Threat Breakdown
        </p>
        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
          Live Telemetry
        </span>
      </div>

      <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="relative w-44 shrink-0">
          <svg viewBox="0 0 200 110" className="h-auto w-full" fill="none">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="40 100"
              className="stroke-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="31 100"
              strokeDashoffset="-42"
              className="stroke-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="23 100"
              strokeDashoffset="-75"
              className="stroke-fuchsia-400 drop-shadow-[0_0_10px_rgba(232,121,249,0.5)]"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 text-center">
            <p className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              12,847
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Neutralized</p>
          </div>
        </div>

        <ul className="w-full space-y-3 text-xs sm:w-auto sm:min-w-40">
          {threats.map((t) => (
            <li key={t.label} className="flex items-center justify-between gap-6 text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-2 font-medium">
                <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} />
                {t.label}
              </span>
              <span className="font-bold text-slate-900 dark:text-white font-mono">{t.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const RuleStack = () => (
  <div className="relative h-36">
    <div className="absolute inset-x-4 top-14 flex items-center gap-3 rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-300/60 dark:bg-white/5 p-4 opacity-70 backdrop-blur-sm">
      <Bell className="h-4 w-4 text-amber-500 dark:text-amber-400" />
      <span className="text-xs text-slate-500 dark:text-slate-400">PagerDuty &amp; Slack Alert Trigger</span>
    </div>

    <div className="group/item absolute inset-x-0 top-0 flex items-center justify-between rounded-2xl border border-violet-400/30 dark:border-violet-500/40 bg-gradient-to-r from-violet-500/15 via-indigo-500/15 to-transparent dark:bg-white/10 p-4 shadow-md backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-1 hover:border-violet-400 dark:hover:border-violet-400">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/15 via-transparent to-transparent pointer-events-none rounded-2xl" />

      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/40 bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/30">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold text-slate-900 dark:text-white">Autonomous Policy Guard</span>
      </div>
      <Power className="relative z-10 h-4 w-4 text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
    </div>

    <MousePointer2 className="absolute right-6 top-10 h-5 w-5 fill-cyan-400 text-cyan-600 dark:text-black transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-20 drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]" />
  </div>
);

const Autopilot = () => (
  <div className="relative overflow-hidden rounded-2xl border border-slate-300 dark:border-white/15 bg-slate-100 dark:bg-white/5 p-5 backdrop-blur-md shadow-md transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/15 via-transparent to-transparent pointer-events-none rounded-2xl" />

    <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-cyan-500/15 blur-2xl" />
    <div className="pointer-events-none absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-violet-600/15 blur-2xl" />

    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 text-cyan-600 dark:text-cyan-300 shadow-sm shadow-cyan-500/20">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-300" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-900 dark:text-white tracking-wide">Autonomous Engine</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Zero-touch self-healing</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-emerald-600 dark:text-emerald-300 uppercase">
            Autonomous Active
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-slate-300 dark:border-white/10 bg-slate-200/90 dark:bg-black/30 px-3.5 py-2.5 backdrop-blur-sm">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-2xl font-bold tracking-tight text-slate-900 dark:text-white">99.8%</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">hands-off</span>
          </div>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Avg mitigation: <span className="font-mono text-cyan-600 dark:text-cyan-300">4.2ms</span>
          </p>
        </div>

        <div className="flex items-end gap-1 h-8 px-1">
          {[40, 75, 55, 90, 60, 100, 70, 85, 50, 95].map((h, i) => (
            <span
              key={i}
              className="w-1 rounded-full bg-gradient-to-t from-violet-500 via-cyan-400 to-emerald-300 opacity-80"
              style={{
                height: `${h}%`,
                animation: `pulse 1.${(i % 4) + 2}s ease-in-out infinite alternate`,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {environments.map((env) => (
          <div
            key={env.name}
            className="rounded-xl border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-200 hover:border-slate-400 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{env.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
            </div>
            <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
              {env.name === 'Kubernetes' ? '142 pods guarded' : '0 alerts pending'}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 min-w-0">
          <Zap className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
          <span className="truncate text-xs">Zero-day probe auto-quarantined</span>
        </div>
        <span className="shrink-0 font-mono text-xs text-emerald-600 dark:text-emerald-400">0.02s ago</span>
      </div>
    </div>
  </div>
);

const curve = (fromX, fromY, toX, toY) => {
  const mid = (fromX + toX) / 2;
  return `M ${fromX} ${fromY} C ${mid} ${fromY}, ${mid} ${toY}, ${toX} ${toY}`;
};

const IntegrationHub = () => {
  const paths = [
    ...leftNodes.map((n) => curve(54, n.y, 184, 110)),
    ...rightNodes.map((n) => curve(236, 110, 366, n.y))
  ];

  const leftColors = [
    { stroke: '#10b981', fill: 'rgba(16, 185, 129, 0.15)', text: '#10b981' }, // Emerald
    { stroke: '#06b6d4', fill: 'rgba(6, 182, 212, 0.15)', text: '#06b6d4' }, // Cyan
    { stroke: '#6366f1', fill: 'rgba(99, 102, 241, 0.15)', text: '#6366f1' }, // Indigo
  ];

  const rightColors = [
    { stroke: '#f43f5e', fill: 'rgba(244, 63, 94, 0.15)', text: '#f43f5e' }, // Rose
    { stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.15)', text: '#f59e0b' }, // Amber
    { stroke: '#a855f7', fill: 'rgba(168, 85, 247, 0.15)', text: '#a855f7' }, // Purple
  ];

  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" fill="none" role="img" aria-label="Integrations">
      <defs>
        <linearGradient id="hubPathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="hubPathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="hubCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} strokeWidth="2" stroke={i < 3 ? 'url(#hubPathGrad1)' : 'url(#hubPathGrad2)'} strokeDasharray="4 3" opacity="0.65" />
          <circle r="3.5" className={i % 2 === 0 ? 'fill-cyan-400 drop-shadow-[0_0_6px_rgba(6,182,212,0.8)]' : 'fill-fuchsia-400 drop-shadow-[0_0_6px_rgba(217,70,239,0.8)]'}>
            <animateMotion dur="2.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}

      {leftNodes.map(({ Icon, y }, idx) => {
        const c = leftColors[idx % leftColors.length];
        return (
          <g key={`l${y}`}>
            <rect x="10" y={y - 22} width="44" height="44" rx="14" fill={c.fill} stroke={c.stroke} strokeWidth="1.5" />
            <Icon x="21" y={y - 11} width="22" height="22" color={c.text} />
          </g>
        );
      })}

      {rightNodes.map(({ Icon, y }, idx) => {
        const c = rightColors[idx % rightColors.length];
        return (
          <g key={`r${y}`}>
            <rect x="366" y={y - 22} width="44" height="44" rx="14" fill={c.fill} stroke={c.stroke} strokeWidth="1.5" />
            <Icon x="377" y={y - 11} width="22" height="22" color={c.text} />
          </g>
        );
      })}

      <rect x="184" y="84" width="52" height="52" rx="16" fill="url(#hubCenterGrad)" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" className="drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
      <ShieldCheck x="199" y="99" width="22" height="22" className="text-white drop-shadow" />
    </svg>
  );
};

export const Features = () => {
  return (
    <section id="features" className="relative w-full overflow-hidden bg-[#f4f5f8] dark:bg-black px-4 py-24 sm:px-6 sm:py-32 transition-colors duration-300">
      <FloatingBackground />

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)',
          backgroundImage: 'radial-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <div className="h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute top-0 h-px w-1/2 max-w-xl bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50" />
        <div className="absolute -top-1 h-3 w-1/3 max-w-md bg-gradient-to-r from-transparent via-violet-500/30 to-transparent blur-sm" />
      </div>

      {/* Radiant Multi-Color Aurora Blobs */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/25 via-indigo-600/25 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-fuchsia-500/25 via-violet-600/25 to-transparent blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 via-indigo-600/20 to-fuchsia-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
          <span className="rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-fuchsia-500/15 px-4.5 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 shadow-sm shadow-cyan-500/10">
            Platform Capabilities
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Power features to{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
              supercharge
            </span>{' '}
            your defense
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Smart, scalable protection that works while you sleep.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="pointer-events-none absolute inset-x-1/4 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent md:block" />

          <Card
            title="Built for massive scale"
            text="Deploy effortlessly from single clusters to multi-region cloud meshes without latency."
            className="md:col-span-3"
          >
            <ThreatBreakdown />
          </Card>

          <Card
            title="Visual policy builder"
            text="Create, test, and enforce security policies without writing custom code."
            className="md:col-span-2"
          >
            <RuleStack />
          </Card>

          <Card
            title="Automated threat mitigation"
            text="Neutralize zero-day exploits and abnormal traffic patterns in real time."
            className="md:col-span-2"
          >
            <Autopilot />
          </Card>

          <Card
            title="Native ecosystem integrations"
            text="Connects directly into your existing CI/CD pipelines, SIEM, and monitoring tools."
            className="md:col-span-3"
          >
            <IntegrationHub />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;