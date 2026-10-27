import { useState, useEffect } from 'react';
import { X, Shield, Sparkles, Check, ArrowRight, Building, Mail, User, Layers } from 'lucide-react';

export const DemoModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cloud, setCloud] = useState('AWS Multi-Region');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate realistic dispatch with unique reference ID
    setTimeout(() => {
      setLoading(false);
      setRefId(`AGX-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-slate-950/90 p-6 sm:p-8 text-white shadow-2xl backdrop-blur-2xl z-10 transition-all duration-300">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-3xl" />

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="relative z-10 flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
              <Check className="h-7 w-7 text-cyan-400" />
            </div>
            <h3 id="demo-modal-title" className="text-2xl font-bold tracking-tight text-white">
              Demonstration Reserved
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-sm">
              Your architectural walkthrough has been logged. A solution engineer will reach out with calendar options.
            </p>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs text-cyan-300">
              Reference: <span className="font-bold text-white">{refId}</span>
            </div>

            <div className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-3 text-left text-xs text-indigo-200">
              <p className="font-semibold text-cyan-300 mb-1">Developer Integration Note:</p>
              <p className="text-slate-400">
                Easily wire this modal to Formspree, HubSpot, or a webhook endpoint inside <code className="text-cyan-200">DemoModal.jsx</code>.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition-colors hover:bg-slate-200 shadow-lg"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-300">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                Live Architecture Demo
              </span>
            </div>

            <h2 id="demo-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Schedule Architecture Walkthrough
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              See the AEGIX zero-trust topology, live incident simulation, and multi-cloud telemetry in action.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                  className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work Email"
                  className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>

              <div className="relative">
                <Building className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company / Infrastructure"
                  className="w-full rounded-xl border border-white/15 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-md transition-all focus:border-cyan-400/60 focus:bg-white/10"
                />
              </div>

              <div className="relative">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Deployment Environment
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['AWS Multi-Cloud', 'Kubernetes Mesh', 'GCP / GKE', 'Hybrid On-Prem'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCloud(c)}
                      className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-left transition-all ${
                        cloud === c
                          ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 font-semibold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <Layers className="h-3 w-3 shrink-0 text-cyan-400" />
                      <span className="truncate">{c}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-600/25 transition-all hover:shadow-cyan-400/30 hover:-translate-y-0.5 disabled:opacity-70"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    <Shield className="h-4 w-4" />
                    <span>Confirm Walkthrough</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
