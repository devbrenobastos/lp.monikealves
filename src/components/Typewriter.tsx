import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  holdMs?: number;
  loop?: boolean;
  hideCursorOnComplete?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 45, 
  holdMs = 5000, 
  loop = true,
  hideCursorOnComplete = false
}) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !isVisible) {
      if (prefersReducedMotion) setIndex(text.length);
      return;
    }

    let timer: number;
    if (!isDeleting) {
      if (index < text.length) {
        timer = window.setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        if (loop) {
          timer = window.setTimeout(() => {
            setIsDeleting(true);
          }, holdMs);
        }
      }
    } else {
      if (index > 0) {
        timer = window.setTimeout(() => {
          setIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, holdMs, prefersReducedMotion, isVisible, loop]);

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  const visibleText = text.slice(0, index);
  const invisibleText = text.slice(index);
  const isComplete = index === text.length;
  const showCursor = !isDeleting && (!isComplete || !hideCursorOnComplete);

  return (
    <span ref={containerRef} className="relative inline-block" aria-label={text}>
      <span>{visibleText}</span>
      {showCursor && <span className="cursor-blink" aria-hidden="true">|</span>}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {invisibleText}
      </span>
    </span>
  );
};
