import React from 'react';

interface BalanceProps {
  children: string;
}

export const Balance: React.FC<BalanceProps> = ({ children }) => {
  if (typeof children !== 'string') return <>{children}</>;
  
  const parts = children.trim().split(' ');
  const glued = parts.length > 2
    ? parts.slice(0, -2).join(' ') + ' ' + parts.slice(-2).join('\u00A0')
    : children;
    
  return (
    <span style={{ textWrap: 'balance' }} className="inline-block">
      {glued}
    </span>
  );
};
