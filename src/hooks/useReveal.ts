import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    if (containerRef.current) {
      const children = containerRef.current.querySelectorAll('.reveal-item');
      children.forEach((child) => {
        child.classList.add('reveal-init');
        observer.observe(child);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
};
