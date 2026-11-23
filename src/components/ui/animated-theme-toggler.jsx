import { useCallback, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  theme,
  onThemeChange,
  children,
  ...props
}) => {
  const isDark = theme === 'dark';
  const buttonRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const activeAnimRef = useRef(null);

  const cancelAnim = useCallback(() => {
    activeAnimRef.current?.cancel();
    activeAnimRef.current = null;
  }, []);

  const applyTheme = useCallback(() => {
    // Read live state directly from DOM to prevent any stale closure
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const nextMode = isCurrentlyDark ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark', nextMode === 'dark');
    document.documentElement.classList.toggle('light', nextMode === 'light');
    document.documentElement.style.colorScheme = nextMode;
    localStorage.setItem('nexai-theme', nextMode);
    onThemeChange?.(nextMode);
  }, [onThemeChange]);

  const toggleTheme = useCallback(() => {
    if (isTransitioningRef.current) return;

    if (typeof document.startViewTransition !== 'function') {
      applyTheme();
      return;
    }

    const button = buttonRef.current;
    const rect = button?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const toX = (val) => `${(val / viewportWidth) * 100}%`;
    const toY = (val) => `${(val / viewportHeight) * 100}%`;
    // 5% overscan ensures all four corner pixels are completely covered
    const endRadius = maxRadius * 1.05;
    const toRadius = (r) => `${(r / (Math.hypot(viewportWidth, viewportHeight) / Math.SQRT2)) * 100}%`;

    const clipFrom = `circle(0% at ${toX(x)} ${toY(y)})`;
    const clipTo = `circle(${toRadius(endRadius)} at ${toX(x)} ${toY(y)})`;

    const root = document.documentElement;
    root.dataset.magicuiThemeVt = 'active';
    root.style.setProperty('--magicui-theme-toggle-vt-duration', `${duration}ms`);
    root.style.setProperty('--magicui-theme-vt-clip-from', clipFrom);

    const cleanup = () => {
      isTransitioningRef.current = false;
      delete root.dataset.magicuiThemeVt;
      root.style.removeProperty('--magicui-theme-toggle-vt-duration');
      root.style.removeProperty('--magicui-theme-vt-clip-from');
      cancelAnim();
    };

    isTransitioningRef.current = true;
    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    transition.finished.finally(cleanup).catch(() => cleanup());

    transition.ready
      ?.then(() => {
        const anim = document.documentElement.animate(
          { clipPath: [clipFrom, clipTo] },
          {
            duration,
            easing: 'ease-in-out',
            fill: 'forwards',
            pseudoElement: '::view-transition-new(root)',
          }
        );
        activeAnimRef.current = anim;
      })
      ?.catch(() => {});
  }, [applyTheme, duration, cancelAnim]);

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      {...props}
    >
      {children || (
        isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
        )
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default AnimatedThemeToggler;
