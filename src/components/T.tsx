import React from 'react';

const SHORT = new Set([
  'a', 'o', 'e', 'é', 'de', 'da', 'do', 'das', 'dos', 'em', 'no', 'na', 'nos', 'nas',
  'um', 'uma', 'que', 'ou', 'se', 'ao', 'à', 'às', 'aos', 'por', 'com', 'sem', 'pra', 'para', 'os', 'as'
]);

export function typeset(input: string): string {
  if (!input) return '';
  const words = input.trim().split(/\s+/);
  
  // 1) cola palavra curta à próxima (forward)
  for (let i = words.length - 2; i >= 0; i--) {
    if (SHORT.has(words[i].toLowerCase())) {
      words[i] = words[i] + '\u00A0' + words[i + 1];
      words.splice(i + 1, 1);
    }
  }
  
  // 2) cola as duas últimas
  if (words.length > 1) {
    words[words.length - 2] += '\u00A0' + words[words.length - 1];
    words.pop();
  }
  
  return words.join(' ');
}

interface TProps {
  children: string;
}

export const T: React.FC<TProps> = ({ children }) => {
  if (typeof children !== 'string') return <>{children}</>;
  return <>{typeset(children)}</>;
};
