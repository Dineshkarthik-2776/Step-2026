import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export function useAnimation(elementRef, animationClass) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && elementRef.current) {
      elementRef.current.classList.add(animationClass);
    }
  }, [inView, elementRef, animationClass]);

  return ref;
}

export function useScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector('.go-top');
      if (window.pageYOffset > 300) {
        backToTop?.classList.add('active');
      } else {
        backToTop?.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}