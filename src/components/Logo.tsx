import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark-bg' | 'light-bg';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'dark-bg',
  className = '',
  showTagline = false
}) => {
  // Height and scale configuration based on size
  const scale = size === 'sm' ? 'h-7' : size === 'md' ? 'h-10' : size === 'lg' ? 'h-14' : 'h-20';
  const taglineSize = size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-[11px]' : 'text-xs';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className={`flex items-center gap-1.5 ${scale}`}>
        {/* Custom Stylized Logo SVG reflecting "NHUNGFIT" from uploaded logo image */}
        <svg
          viewBox="0 0 420 85"
          className="h-full w-auto filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE033" />
              <stop offset="50%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>
            
            <filter id="glowEffect" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Group with Forward Slant (Italic athletic dynamic posture) */}
          <g transform="skewX(-16)">
            {/* N */}
            <path
              d="M 22 15 C 32 15, 36 22, 36 32 L 36 70 C 36 73, 31 75, 27 75 C 23 75, 20 72, 20 68 L 20 40 L 40 70 C 43 74, 48 75, 52 75 L 56 75 C 60 75, 63 72, 63 68 L 63 18 C 63 14, 59 12, 54 12 C 49 12, 47 15, 47 19 L 47 48 L 29 20 C 26 16, 23 15, 22 15 Z"
              fill="url(#yellowGradient)"
            />

            {/* H */}
            <path
              d="M 72 15 C 77 15, 80 18, 80 22 L 80 37 L 98 37 L 98 22 C 98 18, 101 15, 106 15 C 111 15, 114 18, 114 22 L 114 68 C 114 72, 111 75, 106 75 C 101 75, 98 72, 98 68 L 98 50 L 80 50 L 80 68 C 80 72, 77 75, 72 75 C 67 75, 64 72, 64 68 L 64 22 C 64 18, 67 15, 72 15 Z"
              fill="url(#yellowGradient)"
            />

            {/* U */}
            <path
              d="M 122 15 C 127 15, 130 18, 130 22 L 130 52 C 130 62, 137 66, 146 66 C 155 66, 162 62, 162 52 L 162 22 C 162 18, 165 15, 170 15 C 175 15, 178 18, 178 22 L 178 52 C 178 70, 165 78, 146 78 C 127 78, 114 70, 114 52 L 114 22 C 114 18, 117 15, 122 15 Z"
              fill="url(#yellowGradient)"
            />

            {/* N */}
            <path
              d="M 188 15 C 198 15, 202 22, 202 32 L 202 70 C 202 73, 197 75, 193 75 C 189 75, 186 72, 186 68 L 186 40 L 206 70 C 209 74, 214 75, 218 75 L 222 75 C 226 75, 229 72, 229 68 L 229 18 C 229 14, 225 12, 220 12 C 215 12, 213 15, 213 19 L 213 48 L 195 20 C 192 16, 189 15, 188 15 Z"
              fill="url(#yellowGradient)"
            />

            {/* G with distinct yellow tail downward curve as in photo */}
            <path
              d="M 276 22 C 276 17, 271 13, 255 13 C 240 13, 232 24, 232 45 C 232 66, 242 76, 258 76 C 272 76, 276 68, 276 56 L 256 56 C 252 56, 249 53, 249 49 C 249 45, 252 42, 256 42 L 285 42 C 289 42, 292 45, 292 49 L 292 65 C 292 82, 278 88, 258 88 C 232 88, 216 73, 216 45 C 216 18, 236 0, 256 0 C 276 0, 292 8, 292 22 C 292 26, 288 28, 284 28 C 280 28, 276 26, 276 22 Z"
              fill="url(#yellowGradient)"
            />

            {/* F in yellow with sharp athletic cuts */}
            <path
              d="M 298 15 L 332 15 C 336 15, 339 18, 339 22 C 339 26, 336 28, 332 28 L 312 28 L 312 40 L 328 40 C 332 40, 335 43, 335 47 C 335 51, 332 54, 328 54 L 312 54 L 312 68 C 312 72, 309 75, 304 75 C 299 75, 296 72, 296 68 L 296 22 C 296 18, 298 15, 298 15 Z"
              fill="url(#yellowGradient)"
            />

            {/* IT in Crisp White (or dark mode dependent) */}
            <g fill={variant === 'light-bg' ? '#111827' : '#FFFFFF'}>
              {/* I */}
              <rect x="345" y="15" width="16" height="60" rx="4" />
              
              {/* T */}
              <path d="M 368 15 L 408 15 C 412 15, 415 18, 415 22 C 415 26, 412 28, 408 28 L 395 28 L 395 68 C 395 72, 392 75, 387 75 C 382 75, 379 72, 379 68 L 379 28 L 368 28 C 364 28, 361 26, 361 22 C 361 18, 364 15, 368 15 Z" />
            </g>
          </g>
        </svg>
      </div>

      {showTagline && (
        <span className={`font-semibold tracking-[0.2em] text-amber-400 uppercase mt-0.5 ${taglineSize}`}>
          Women Only Studio
        </span>
      )}
    </div>
  );
};
