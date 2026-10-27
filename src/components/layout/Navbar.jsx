import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Shield, Sparkles } from 'lucide-react';
import DemoModal from '@/components/ui/DemoModal';
import logo from '@/assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <header className="relative z-30 max-w-7xl mx-auto px-6 pt-6">
        <nav className="relative flex items-center justify-between rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none rounded-full" />

          <Link to="/" className="relative flex items-center gap-2.5 cursor-pointer group">
            <img
              src={logo}
              alt="AEGIX logo"
              className="w-10 h-10 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white text-base leading-none">
                AEGIX
              </span>
              <span className="text-xs tracking-widest text-slate-300 uppercase font-mono mt-1">Cloud Security</span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active State */}
          <div className="relative hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white border border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="relative hidden sm:flex items-center gap-3">
            <Link
              to="/signin"
              className={`text-xs font-medium px-4 py-2 rounded-full transition-all ${
                location.pathname === '/signin'
                  ? 'bg-white/15 text-white border border-white/20 font-semibold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </Link>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="relative group px-5 py-2 rounded-full font-semibold text-xs text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-0.5 overflow-hidden active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                <span>Request Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          <div className="relative flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2.5 px-3.5 rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-200 border border-cyan-400/30 font-semibold shadow-sm'
                      : 'text-slate-200 hover:text-cyan-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between gap-3">
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-medium py-2 px-3 rounded-xl transition-all ${
                  location.pathname === '/signin'
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Sign In
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoOpen(true);
                }}
                className="relative group px-5 py-2 rounded-full font-semibold text-xs text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:shadow-indigo-500/40 overflow-hidden active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600" />
                <span className="relative flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                  <span>Request Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
