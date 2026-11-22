import Hero1 from '@/components/hero/Hero1';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/layout/Footer';

export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f4f5f8] dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero1 />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default HomePage;
