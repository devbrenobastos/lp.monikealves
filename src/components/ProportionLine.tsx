import React, { useEffect, useRef, useState } from 'react';

interface ProportionLineProps {
  className?: string;
  strokeColor?: string;
  dotColor?: string;
  amberColor?: string;
}

export const ProportionLine: React.FC<ProportionLineProps> = ({
  className = "",
  strokeColor = "var(--olive-d)",
  dotColor = "var(--olive)",
  amberColor = "var(--amber)"
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
      <svg
        width="280"
        height="320"
        viewBox="0 0 280 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Linha de proporção facial"
        className="w-full h-auto max-w-[280px]"
      >
        {/* proportion guide lines */}
        <line x1="40" y1="70" x2="240" y2="70" stroke="var(--mist)" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
        <line x1="40" y1="160" x2="240" y2="160" stroke="var(--mist)" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
        <line x1="40" y1="250" x2="240" y2="250" stroke="var(--mist)" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
        
        {/* subtle vertical axis */}
        <line x1="140" y1="20" x2="140" y2="300" stroke="var(--cream)" strokeWidth="1" opacity="0.5" />

        {/* facial profile, single elegant stroke */}
        <path
          ref={pathRef}
          d="M196 26 C150 26 120 54 120 96 C120 116 128 128 126 142 C124 156 104 158 104 170 C104 180 120 182 122 190 C124 200 112 206 116 218 C120 232 150 232 156 250 C160 264 150 282 132 292 C160 300 200 296 214 270"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          style={{
            strokeDasharray: 800,
            strokeDashoffset: isVisible ? 0 : 800,
            transition: 'stroke-dashoffset 2s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        />

        {/* key proportion points */}
        <circle
          cx="120"
          cy="70"
          r="4.5"
          fill={dotColor}
          className="transition-transform duration-500 delay-1000"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(0)', transformOrigin: '120px 70px' }}
        />
        <circle
          cx="104"
          cy="160"
          r="4.5"
          fill={dotColor}
          className="transition-transform duration-500 delay-1200"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(0)', transformOrigin: '104px 160px' }}
        />
        <circle
          cx="132"
          cy="250"
          r="4.5"
          fill={amberColor}
          className="transition-transform duration-500 delay-1400"
          style={{ transform: isVisible ? 'scale(1)' : 'scale(0)', transformOrigin: '132px 250px' }}
        />
      </svg>
    </div>
  );
};
