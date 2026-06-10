import React from 'react';
import { T } from './T';

interface EyebrowProps {
  children: string;
  dark?: boolean;
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, dark = false, className = '' }) => {
  return (
    <span className={`eyebrow ${dark ? 'eyebrow-dark' : ''} ${className}`}>
      <span className="dot" aria-hidden="true" />
      <T>{children}</T>
    </span>
  );
};
