import React from 'react';

interface NoWidowProps {
  children: string;
}

export const NoWidow: React.FC<NoWidowProps> = ({ children }) => {
  if (typeof children !== 'string') return <>{children}</>;
  
  const trimmed = children.trim();
  const lastSpaceIndex = trimmed.lastIndexOf(' ');
  
  if (lastSpaceIndex === -1) {
    return <>{trimmed}</>;
  }
  
  const before = trimmed.substring(0, lastSpaceIndex);
  const after = trimmed.substring(lastSpaceIndex + 1);
  
  return (
    <>
      {before}&nbsp;{after}
    </>
  );
};
