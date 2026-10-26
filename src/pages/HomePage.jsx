import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/layout/Footer';

export const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-black text-slate-100">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default HomePage;
