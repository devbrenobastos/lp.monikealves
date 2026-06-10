import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  holdMs?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 45, holdMs = 5000 }) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIndex(text.length);
      return;
    }

    let timer: number;
    if (!isDeleting) {
      if (index < text.length) {
        timer = window.setTimeout(() => {
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, holdMs);
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
  }, [index, isDeleting, text, speed, holdMs, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{text}</span>;
  }

  const visibleText = text.slice(0, index);
  const invisibleText = text.slice(index);

  return (
    <span className="relative inline-block" aria-label={text}>
      <span>{visibleText}</span>
      <span className="cursor-blink" aria-hidden="true">|</span>
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {invisibleText}
      </span>
    </span>
  );
};
