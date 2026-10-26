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
    'border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-xl shadow-2xl transition-all duration-300';
  const baseStyle = `group relative flex flex-col rounded-3xl ${padding} ${glassStyle} ${overflowStyle}`;

  return (
    <div
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {sheen && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-3xl overflow-hidden" />
      )}

      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg shadow-indigo-500/40 flex items-center gap-1.5 whitespace-nowrap border border-white/30">
          {badge}
        </div>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {title && (
          <h3 className="text-xl font-semibold tracking-tight text-white">
            {title}
          </h3>
        )}
        {text && (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-300">
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

export const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`mb-4 flex flex-col gap-1.5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={`text-xl font-semibold tracking-tight text-white ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className = '', children, ...props }) => (
  <p className={`text-sm leading-relaxed text-slate-300 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className = '', children, ...props }) => (
  <div className={`flex flex-1 flex-col ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className = '', children, ...props }) => (
  <div className={`mt-6 pt-4 border-t border-white/10 flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
