import { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <div className="sk-rotating-plane"></div>
        </div>
      )}

      {/* Main content */}
      <Header />
      <main className="flex-grow pt-24 scroll-smooth bg-white">
        {children}
      </main>
      <Footer />

      {/* Back to top button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className="fas fa-angle-up text-2xl"></i>
      </a>
    </div>
  );
}
