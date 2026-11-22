import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import logo from '@/assets/logo.png';
import footer from '@/assets/7.png';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer
      className="relative w-full overflow-hidden bg-slate-100 dark:bg-black text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-white/10 selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-300"
      aria-label="NexAI Footer"
    >
      {/* Top Radiant Multi-Color Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 via-indigo-500 to-fuchsia-500 pointer-events-none" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <Link to="/" className="inline-block group select-none">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="NexAI Logo"
                className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-xs font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">
                Zero-Trust Cloud Defense
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
                NexAI
              </span>
              <br />
              Security
            </h2>
          </Link>

          <div className="w-full max-w-md">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 font-medium">
              Sign up for our <strong className="text-slate-900 dark:text-white font-bold">Newsletter</strong>
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-slate-300 dark:border-white/20 bg-white dark:bg-white/5 py-3.5 pl-6 pr-14 text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none backdrop-blur-xl shadow-lg transition-all hover:border-slate-400 dark:hover:border-white/30 focus:border-cyan-500 dark:focus:border-white/40 focus:bg-white dark:focus:bg-white/10 font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 text-white hover:scale-105 transition-all cursor-pointer shadow-md shadow-indigo-500/30"
              >
                {subscribed ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-slate-200 dark:bg-white/10 my-12" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 w-full max-w-2xl">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Find your Way
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/features" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Cloud Defense
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Runtime Shield
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/500" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <p>500 Howard Street, CA 94105</p>
                <a href="mailto:soc@nexai.ai" className="block hover:text-slate-900 dark:hover:text-white transition-colors">
                  soc@nexai.ai
                </a>
                <a href="tel:+14158904220" className="block hover:text-slate-900 dark:hover:text-white transition-colors">
                  +1 (415) 890-4220
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-t-full border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-white/5 backdrop-blur-xl flex flex-col items-center justify-end p-6 overflow-hidden mx-auto lg:mx-0 shrink-0 group">
            <img
              src={footer}
              alt="Protected family"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent dark:from-black dark:via-black/50 dark:to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-1 drop-shadow">
                24/7 Security Operations
              </span>
              <span className="text-xs text-slate-300 font-sans max-w-xs drop-shadow">
                Continuous threat monitoring and autonomous protection.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-sans">
          <p>© NexAI Security Co. 2026. All rights reserved</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms
            </Link>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              X (Twitter)
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/vrajalinnovations-ctrl/nexus" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
