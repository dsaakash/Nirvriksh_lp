import React from 'react';
import logoSrc from '../assets/p1.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', hideText = false }) => {
  const isDark = variant === 'dark';
  
  // High-contrast text colors
  const textColor = isDark ? 'text-white' : 'text-[#0B1B32]';
  const iconTmColor = isDark ? 'text-white/60' : 'text-[#0B1B32]/60';
  
  return (
    <div className={`flex items-center select-none group ${className}`}>
      {/* Tree Icon with its TM */}
      <div className="relative flex items-center justify-center transition-transform duration-300 active:scale-95">
        <img 
          src={logoSrc} 
          alt="Nirvriksh Logo" 
          className="h-14 w-auto object-contain drop-shadow-sm"
        />
        
        {/* Absolute TM for Icon - Sharp Text rendering */}
        <span className={`absolute -top-1 -right-2 text-[8px] font-bold ${iconTmColor} select-none`}>™</span>
      </div>

      {/* Corporate Wordmark */}
      {!hideText && (
        <div className={`ml-4 flex items-start ${textColor} font-["Inter",system-ui,sans-serif]`}>
          <span className="text-3xl font-[900] uppercase leading-none tracking-tight">
            Nirvriksh
          </span>
          <span className="text-[10px] font-bold mt-1 ml-0.5 opacity-60">™</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
