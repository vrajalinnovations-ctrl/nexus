import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    let rfId;
    const raf = (time) => {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    };
    rfId = requestAnimationFrame(raf);

    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      cancelAnimationFrame(rfId);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollManager;
