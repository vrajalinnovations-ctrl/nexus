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
  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none rounded-2xl" />

    <div className="relative z-10">
      <p className="text-xs font-medium text-slate-300">Threat breakdown</p>

      <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="relative w-44 shrink-0">
          <svg viewBox="0 0 200 110" className="h-auto w-full" fill="none">
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="40 100"
              className="stroke-indigo-500"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="31 100"
              strokeDashoffset="-42"
              className="stroke-violet-300"
            />
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              pathLength="100"
              strokeWidth="22"
              strokeDasharray="23 100"
              strokeDashoffset="-75"
              className="stroke-pink-300"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 text-center">
            <p className="text-2xl font-bold text-white">12,847</p>
            <p className="text-xs text-slate-400">Blocked</p>
          </div>
        </div>

        <ul className="w-full space-y-3 text-xs sm:w-auto sm:min-w-40">
          {threats.map((t) => (
            <li key={t.label} className="flex items-center justify-between gap-6 text-slate-300">
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                {t.label}
              </span>
              <span className="font-medium text-white">{t.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const RuleStack = () => (
  <div className="relative h-36">
    <div className="absolute inset-x-4 top-14 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 opacity-50 backdrop-blur-sm">
      <Bell className="h-4 w-4 text-slate-400" />
      <span className="text-xs text-slate-400">Alert on-call</span>
    </div>

    <div className="group/item absolute inset-x-0 top-0 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-1 hover:border-white/30">
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none rounded-2xl" />

      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-500/20 text-violet-300 shadow-sm shadow-violet-500/20">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <span className="text-sm font-medium text-white">Block bad IPs</span>
      </div>
      <Power className="relative z-10 h-4 w-4 text-emerald-400 drop-shadow" />
    </div>

    <MousePointer2 className="absolute right-6 top-10 h-5 w-5 fill-white text-black transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-20" />
  </div>
);

const Autopilot = () => (
  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md shadow-2xl transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none rounded-2xl" />

    <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-cyan-500/15 blur-2xl" />
    <div className="pointer-events-none absolute -left-6 -bottom-6 h-28 w-28 rounded-full bg-violet-600/15 blur-2xl" />

    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 text-cyan-300 shadow-sm shadow-cyan-500/20">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white tracking-wide">Autonomous Engine</p>
            <p className="text-xs text-slate-400">Zero-touch self-healing</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-emerald-300 uppercase">
            Chill Mode
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3.5 py-2.5 backdrop-blur-sm">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-mono text-2xl font-bold tracking-tight text-white">99.8%</span>
            <span className="text-xs font-medium text-emerald-400">hands-off</span>
          </div>
          <p className="mt-0.5 text-xs text-slate-400">
            Avg mitigation: <span className="font-mono text-cyan-300">4.2ms</span>
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
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-200">{env.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
            </div>
            <p className="mt-1 font-mono text-xs text-slate-400">
              {env.name === 'Kubernetes' ? '142 pods guarded' : '0 alerts pending'}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs">
        <div className="flex items-center gap-2 text-slate-300 min-w-0">
          <Zap className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span className="truncate text-xs">Zero-day probe auto-quarantined</span>
        </div>
        <span className="shrink-0 font-mono text-xs text-emerald-400">0.02s ago</span>
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

  return (
    <svg viewBox="0 0 420 220" className="h-auto w-full" fill="none" role="img" aria-label="Integrations">
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} strokeWidth="1.5" className="stroke-violet-400/40" />
          <circle r="3" className="fill-cyan-300">
            <animateMotion dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" path={d} />
          </circle>
        </g>
      ))}

      {leftNodes.map(({ Icon, y }) => (
        <g key={`l${y}`}>
          <rect x="10" y={y - 22} width="44" height="44" rx="12" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <Icon x="21" y={y - 11} width="22" height="22" className="text-violet-200" />
        </g>
      ))}

      {rightNodes.map(({ Icon, y }) => (
        <g key={`r${y}`}>
          <rect x="366" y={y - 22} width="44" height="44" rx="12" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <Icon x="377" y={y - 11} width="22" height="22" className="text-violet-200" />
        </g>
      ))}

      <rect x="184" y="84" width="52" height="52" rx="14" fill="rgba(124, 58, 237, 0.85)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
      <ShieldCheck x="199" y="99" width="22" height="22" className="text-white" />
    </svg>
  );
};

export const Features = () => {
  return (
    <section id="features" className="relative w-full overflow-hidden bg-black px-4 py-24 sm:px-6 sm:py-32">
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

      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-1/4 bottom-16 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-slate-300">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Power features to supercharge your defense
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Smart, scalable protection that works while you sleep.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="pointer-events-none absolute inset-x-1/4 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-violet-300 to-transparent md:block" />

          <Card
            title="Scale without the scream"
            text="From ten nodes to ten thousand, nothing slows down."
            className="md:col-span-3"
          >
            <ThreatBreakdown />
          </Card>

          <Card
            title="Drag, drop, deploy"
            text="No code. Build rules visually."
            className="md:col-span-2"
          >
            <RuleStack />
          </Card>

          <Card
            title="Smart enough to chill"
            text="AI does the thinking while you relax."
            className="md:col-span-2"
          >
            <Autopilot />
          </Card>

          <Card
            title="Plug it all in"
            text="Works with the tools you already use."
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