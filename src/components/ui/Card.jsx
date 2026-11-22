import React from 'react';

export const Card = ({
  title,
  text,
  className = '',
  sheen = true,
  padding = 'p-6 sm:p-8',
  overflowVisible = false,
  badge,
  children,
  ...props
}) => {
  const overflowStyle = overflowVisible ? 'overflow-visible' : 'overflow-hidden';
  const glassStyle =
    'border border-slate-300/90 bg-slate-200 hover:bg-slate-300/70 hover:border-cyan-500/40 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-cyan-400/50 backdrop-blur-xl shadow-md hover:shadow-xl dark:shadow-2xl transition-all duration-300';
  const baseStyle = `group relative flex flex-col rounded-3xl ${padding} ${glassStyle} ${overflowStyle}`;

  return (
    <div
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {/* Iridescent Ambient Glow on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-sm" />

      {/* Top subtle radiant light beam */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 dark:via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {sheen && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/10 via-transparent to-transparent rounded-3xl overflow-hidden" />
      )}

      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/40 flex items-center gap-1.5 whitespace-nowrap border border-white/30">
          {badge}
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {title && (
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h3>
        )}
        {text && (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {text}
          </p>
        )}
        {children && (
          <div className={title || text ? 'mt-6 flex flex-1 flex-col justify-end' : 'relative flex flex-1 flex-col'}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
