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
            Last Updated: October 2026 • Governing Enterprise Access to the AEGIX Neural Defense Mesh
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
                By accessing, browsing, or utilizing the AEGIX website, documentation, and digital assets ("Services"), you agree to be bound by these Terms of Service. If you are accessing these Services on behalf of an enterprise or organization, you confirm that you have the authority to bind that entity to these Terms.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <FileCheck className="h-5 w-5 text-indigo-400" />
                2. Acceptable Use & Conduct
              </h2>
              <p className="mb-4">
                Users agree to use our digital resources in full compliance with all applicable laws and regulations. You agree not to:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Lawful Use:</strong> Use the website or resources for any unlawful purpose or to solicit illegal cybersecurity activities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>System Integrity:</strong> Attempt to interfere with, compromise, or disrupt the integrity or security of the hosting network or infrastructure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Data Harvesting:</strong> Scrape, harvest, or extract data from this service using automated bots, spiders, or scrapers without express written authorization.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                3. Intellectual Property Rights
              </h2>
              <p>
                All trademarks, logos, visual layouts, branding assets, custom illustrations, and original interface styling displayed on this website are the intellectual property of AEGIX and their respective rights holders. Commercial use, reproduction, or distribution is subject to the applicable marketplace license under which this template or asset was acquired.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5 mb-4">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                4. Disclaimers & Limitation of Liability
              </h2>
              <p>
                The materials and information on this website are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. In no event shall AEGIX or its creators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this website.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4">
                5. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and interpreted in accordance with applicable commercial laws, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved through competent legal jurisdiction.
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
