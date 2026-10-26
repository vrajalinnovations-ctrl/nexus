import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import { Shield, FileCheck, AlertTriangle, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

export const TermsPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-700/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-16 sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            Legal Agreement
          </span>
          <h1 className="mt-8 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Terms of{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed">
            Last Updated: October 2026 • Governing Enterprise Access to the NEXUS Neural Defense Mesh
          </p>
        </div>

        <Card padding="p-8 sm:p-12" className="rounded-3xl border border-white/20">
          <div className="space-y-12 text-sm leading-relaxed text-slate-300">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <Shield className="h-5 w-5 text-cyan-400" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or deploying the NEXUS autonomous neural defense platform, eBPF agent binaries, or management console, you ("Customer" or "User") agree to be bound by these Terms of Service ("Terms"). If you represent an entity, you warrant that you possess the requisite authority to bind that entity to these Terms.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <FileCheck className="h-5 w-5 text-indigo-400" />
                2. Platform License & Acceptable Use
              </h2>
              <p className="mb-4">
                NEXUS grants Customer a non-exclusive, worldwide, revocable license to deploy our telemetry agents across Customer-owned or Customer-leased compute nodes in accordance with the subscribed tier:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Authorized Operations:</strong> Agents must be deployed strictly to monitor, detect, and isolate cyber threats within authorized networks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Restrictions:</strong> Customer shall not reverse-engineer, decompile, or create derivative works of our eBPF kernel modules or proprietary AI models.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Fair API Usage:</strong> Programmatic telemetry retrieval must adhere to published API rate thresholds to maintain global mesh stability.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                3. Service Level Agreement (SLA) & Uptime
              </h2>
              <p>
                For Enterprise and Sovereign Enclave plans, NEXUS commits to a 99.999% Service Level Agreement for autonomous edge scrubbing and telemetry collection. Scheduled maintenance windows will be communicated at least 72 hours in advance via the SOC status dashboard.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                4. Limitation of Liability
              </h2>
              <p>
                While the NEXUS neural defense mesh employs state-of-the-art autonomous models, no cybersecurity platform guarantees absolute immunity against all evolving threat vectors. In no event shall NEXUS be liable for indirect, incidental, or consequential damages exceeding the fees paid by Customer during the preceding twelve (12) months.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4">
                5. Governing Law & Arbitration
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any dispute arising under these Terms shall be resolved via binding confidential arbitration in San Francisco, California.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/privacy"
              className="text-xs font-semibold text-cyan-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
