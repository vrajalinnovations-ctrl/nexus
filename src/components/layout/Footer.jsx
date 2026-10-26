import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import logo from '@/assets/logo.png';

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
      className="relative w-full overflow-hidden bg-black text-slate-100 border-t border-white/10 selection:bg-cyan-500/30 selection:text-cyan-200"
      aria-label="Nexus Footer"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <Link to="/" className="inline-block group select-none">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Nexus Logo"
                className="w-12 h-12 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Zero-Trust Cloud Defense
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none">
              Nexus
              <br />
              Security
            </h2>
          </Link>

          <div className="w-full max-w-md">
            <p className="text-sm sm:text-base text-slate-300 mb-3 font-medium">
              Sign up for our <strong className="text-white font-bold">Newsletter</strong>
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-white/20 bg-white/5 py-3.5 pl-6 pr-14 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-xl shadow-2xl transition-all hover:border-white/30 focus:border-white/40 focus:bg-white/10 font-medium"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black hover:bg-slate-200 transition-all cursor-pointer shadow-md"
              >
                {subscribed ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 my-12" />

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12 w-full max-w-2xl">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
                Find your Way
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                    Cloud Defense
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-slate-400 hover:text-white transition-colors">
                    Runtime Shield
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/500" className="text-slate-400 hover:text-white transition-colors">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-white mb-4">
                Contact Us
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-400">

                <p>500 Howard Street, CA 94105</p>
                <a href="mailto:soc@nexus.ai" className="block hover:text-white transition-colors">
                  soc@nexus.ai
                </a>
                <a href="tel:+14158904220" className="block hover:text-white transition-colors">
                  +1 (415) 890-4220
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-t-full border border-white/15 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-end p-6 overflow-hidden mx-auto lg:mx-0 shrink-0 group">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
              alt="Protected family"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
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

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-sans">
          <p>© Nexus Security Co. 2026. All rights reserved</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
