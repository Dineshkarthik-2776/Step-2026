import { useState, useEffect } from 'react';
import { researchDomains, committeeData } from '../data/data';
import { SiteContext } from './context';

export function SiteProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const value = { loading, menuOpen, setMenuOpen, researchDomains, committeeData };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
