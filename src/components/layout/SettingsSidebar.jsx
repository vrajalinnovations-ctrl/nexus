import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Settings,
  X,
  RotateCcw,
  Sun,
  Moon,
  AlignLeft,
  AlignRight,
  BookOpen,
  Check,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useSettings } from '@/context/SettingsContext';
import logo from '@/assets/logo.png';

const EXCLUDED_ROUTES = [
  // Authentication Routes
  '/signin',
  '/login',
  '/signup',
  '/register',
  '/forgot-password',
  '/verify',
  '/verify-email',
  '/confirm-password',
  '/reset-password',
  // Error Routes
  '/404',
  '/500'
];

const MAIN_PAGES = [
  '/',
  '/home',
  '/about',
  '/features',
  '/pricing',
  '/contact',
  '/privacy',
  '/terms'
];

export const SettingsSidebar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const {
    direction,
    setDirection,
    resetDefaults,
    isSettingsOpen,
    setIsSettingsOpen
  } = useSettings();

  // Hide on auth routes, explicit error pages (404, 500), and unknown catch-all 404 paths
  const isHidden = EXCLUDED_ROUTES.includes(location.pathname) || !MAIN_PAGES.includes(location.pathname);

  useEffect(() => {
    if (isHidden && isSettingsOpen) {
      setIsSettingsOpen(false);
    }
  }, [isHidden, isSettingsOpen, setIsSettingsOpen]);

  // Close on Escape key & Pause Lenis / Body scroll lock
  useEffect(() => {
    if (isHidden) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSettingsOpen) {
        setIsSettingsOpen(false);
      }
    };
    if (isSettingsOpen) {
      document.body.style.overflow = 'hidden';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.stop();
      }
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSettingsOpen, setIsSettingsOpen, isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <>
      {/* Floating Trigger Button (Pinned on Edge) - Only Gear Icon */}
      <div className={`fixed top-1/2 -translate-y-1/2 z-40 ${direction === 'rtl' ? 'left-0' : 'right-0'}`}>
        <button
          type="button"
          onClick={() => setIsSettingsOpen(true)}
          aria-label="Open Settings Customizer"
          title="Open Settings Customizer"
          className={`flex items-center justify-center ${
            direction === 'rtl'
              ? 'rounded-r-2xl border-y border-r pl-2.5 pr-3'
              : 'rounded-l-2xl border-y border-l pr-2.5 pl-3'
          } py-3 border border-cyan-400/50 bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-fuchsia-500 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 dark:border-white/20 dark:bg-none dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/30 dark:text-cyan-400 dark:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-110 group cursor-pointer`}
        >
          <Settings className="w-5 h-5 animate-spin-slow group-hover:rotate-90 transition-transform duration-500 text-white dark:text-cyan-400 drop-shadow-sm" />
        </button>
      </div>

      {/* Backdrop Overlay */}
      {isSettingsOpen && (
        <div
          onClick={() => setIsSettingsOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        />
      )}

      {/* Slide-In Customizer Drawer (Glassmorphic Card Design) */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Settings Customizer Drawer"
        data-lenis-prevent="true"
        className={`fixed inset-y-0 ${direction === 'rtl' ? 'left-0' : 'right-0'} z-50 w-full sm:w-[380px] max-w-full h-full max-h-screen bg-[#f4f5f8]/95 dark:bg-black/75 text-slate-900 dark:text-slate-100 backdrop-blur-2xl ${
          direction === 'rtl' ? 'border-r' : 'border-l'
        } border-slate-300/90 dark:border-white/20 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out overflow-hidden ${
          isSettingsOpen
            ? 'translate-x-0'
            : direction === 'rtl'
            ? '-translate-x-full pointer-events-none'
            : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Card Sheen Light Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/5 dark:from-white/10 via-transparent to-transparent" />

        {/* Drawer Header (Fixed at Top) */}
        <div className="relative z-10 shrink-0 p-5 border-b border-slate-300/80 dark:border-white/15 flex items-center justify-between bg-slate-200/60 dark:bg-white/[0.04] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <img src={logo} alt="NexAI" className="w-8 h-8 object-contain" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base tracking-tight text-slate-900 dark:text-white leading-none">
                  Live Customizer
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 font-semibold border border-cyan-500/30">
                  v1.0
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Real-time layout &amp; style controls
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={resetDefaults}
              title="Reset all settings to default"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setIsSettingsOpen(false)}
              aria-label="Close customizer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Customizer Body */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          className="relative z-10 flex-1 min-h-0 overflow-y-auto overscroll-contain no-scrollbar p-5 space-y-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* 1. Theme Mode (Dark / Light) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-cyan-500" />
                Color Theme
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 capitalize">
                {theme} Mode
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Dark Option */}
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl ${
                  theme === 'dark'
                    ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/15 dark:bg-cyan-500/15 shadow-md shadow-cyan-500/20'
                    : 'border-slate-300/90 dark:border-white/20 bg-slate-200/70 dark:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
              >
                {theme === 'dark' && (
                  <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-slate-950/80 flex items-center justify-center border border-white/15 mb-2 shadow-inner">
                  <Moon className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="font-semibold text-xs text-slate-900 dark:text-white">Cyber Dark</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">High contrast glass</span>
              </button>

              {/* Light Option */}
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`relative flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl ${
                  theme === 'light'
                    ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/15 dark:bg-cyan-500/15 shadow-md shadow-cyan-500/20'
                    : 'border-slate-300/90 dark:border-white/20 bg-slate-200/70 dark:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
              >
                {theme === 'light' && (
                  <span className="absolute top-2 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-[#f4f5f8] flex items-center justify-center border border-slate-300 mb-2 shadow-sm">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-semibold text-xs text-slate-900 dark:text-white">Clean Light</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Anti-glare off-white</span>
              </button>
            </div>
          </div>

          {/* 2. Layout Direction (LTR / RTL) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <AlignLeft className="w-3.5 h-3.5 text-cyan-500" />
                Layout Direction
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase">
                {direction}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* LTR Option */}
              <button
                type="button"
                onClick={() => setDirection('ltr')}
                className={`relative flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl ${
                  direction === 'ltr'
                    ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/15 dark:bg-cyan-500/15 shadow-md shadow-cyan-500/20'
                    : 'border-slate-300/90 dark:border-white/20 bg-slate-200/70 dark:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-slate-300/80 dark:bg-white/10 flex items-center justify-center shrink-0">
                  <AlignLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-xs text-slate-900 dark:text-white">LTR Layout</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Left-to-Right</div>
                </div>
                {direction === 'ltr' && (
                  <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </button>

              {/* RTL Option */}
              <button
                type="button"
                onClick={() => setDirection('rtl')}
                className={`relative flex items-center gap-3 p-3 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl ${
                  direction === 'rtl'
                    ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/15 dark:bg-cyan-500/15 shadow-md shadow-cyan-500/20'
                    : 'border-slate-300/90 dark:border-white/20 bg-slate-200/70 dark:bg-white/5 hover:border-slate-400 dark:hover:border-white/30 dark:hover:bg-white/10'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-slate-300/80 dark:bg-white/10 flex items-center justify-center shrink-0">
                  <AlignRight className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-xs text-slate-900 dark:text-white">RTL Layout</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Right-to-Left</div>
                </div>
                {direction === 'rtl' && (
                  <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* 3. Quick Navigation & Actions */}
          <div>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-500" />
              Template Shortcuts
            </span>

            <div className="space-y-2">
              <a
                href="/documentation/landing.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-300/90 dark:border-white/20 bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/70 dark:hover:bg-white/10 dark:hover:border-white/30 backdrop-blur-xl transition-all group cursor-pointer text-slate-900 dark:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Item Showcase Landing</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Marketing &amp; feature presentation</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href="/documentation/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl border border-slate-300/90 dark:border-white/20 bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300/70 dark:hover:bg-white/10 dark:hover:border-white/30 backdrop-blur-xl transition-all group cursor-pointer text-slate-900 dark:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Developer Documentation</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">10-section comprehensive guide</div>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Footer (Fixed at Bottom) */}
        <div className="relative z-10 shrink-0 p-5 border-t border-slate-300/80 dark:border-white/15 bg-slate-200/60 dark:bg-white/[0.04] backdrop-blur-md flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={resetDefaults}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={() => setIsSettingsOpen(false)}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 text-xs font-semibold shadow-md transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </aside>
    </>
  );
};

export default SettingsSidebar;
