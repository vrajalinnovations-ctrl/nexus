import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import { Shield, Lock, FileText, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-full max-w-5xl -translate-x-1/2 rounded-full bg-indigo-700/25 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-3xl" />

      <Navbar />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-16 sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-xl shadow-md">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            Legal & Compliance
          </span>
          <h1 className="mt-8 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed">
            Last Updated: October 2026 • Effective for all NEXUS Enterprise Cloud & On-Premises Meshes
          </p>
        </div>

        <Card padding="p-8 sm:p-12" className="rounded-3xl border border-white/20">
          <div className="space-y-12 text-sm leading-relaxed text-slate-300">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <Shield className="h-5 w-5 text-cyan-400" />
                1. Overview & Commitment to Zero-Knowledge Telemetry
              </h2>
              <p>
                NEXUS Inc. ("NEXUS", "we", "us", or "our") operates an autonomous neural defense mesh designed to protect cloud infrastructure, containers, and edge clusters. Our architecture adheres strictly to zero-knowledge telemetry principles: kernel-level eBPF probes analyze runtime anomalies locally within hardware enclaves without inspecting private customer payload data.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <Lock className="h-5 w-5 text-indigo-400" />
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We collect only the technical telemetry necessary to deliver autonomous threat mitigation and account administration:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Account Information:</strong> Name, business email address, billing contacts, and authentication credentials for organization administrators.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Kernel Telemetry Metadata:</strong> Syscall frequency histograms, CPU execution vectors, eBPF filter states, and packet header anomalies. We do NOT capture plain-text payload bodies or database contents.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Audit Logs:</strong> Operational console access records, node provisioning events, and autonomous mitigation rule triggers for enterprise compliance.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <FileText className="h-5 w-5 text-cyan-300" />
                3. Data Isolation & Cryptographic Enclaves
              </h2>
              <p>
                All telemetry data in transit is encrypted using TLS 1.3 with quantum-resistant key exchange algorithms. Telemetry at rest is protected with AES-256 hardware enclave encryption. Customer keys remain under customer custody via our Cloud KMS / HSM integration protocols.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                4. International Compliance & Data Sovereignty
              </h2>
              <p className="mb-4">
                NEXUS complies with global data protection frameworks:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white mb-1">GDPR & UK GDPR</h3>
                  <p className="text-xs text-slate-400">Strict data minimization, EU data residency options, and standard contractual clauses (SCCs).</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white mb-1">CCPA / CPRA</h3>
                  <p className="text-xs text-slate-400">We do not sell, rent, or monetize any enterprise customer telemetry or user personal information.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white mb-1">SOC 2 Type II</h3>
                  <p className="text-xs text-slate-400">Annually audited by independent AICPA certified auditors covering Security, Availability, and Confidentiality.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white mb-1">FIPS 140-3</h3>
                  <p className="text-xs text-slate-400">Cryptographic modules validated for federal and high-assurance defense requirements.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4">
                5. Contact the Data Protection Officer (DPO)
              </h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact our Data Protection Office at{' '}
                <a href="mailto:privacy@nexus.ai" className="text-cyan-300 underline underline-offset-4 hover:text-white transition-colors">
                  privacy@nexus.ai
                </a>{' '}
                or reach our 24/7 incident desk via our{' '}
                <Link to="/contact" className="text-cyan-300 underline underline-offset-4 hover:text-white transition-colors">
                  Contact Center
                </Link>.
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
              to="/terms"
              className="text-xs font-semibold text-cyan-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
