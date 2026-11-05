import React from 'react';

interface SchoolEmblemProps {
  className?: string;
  size?: number;
}

export const SchoolEmblem: React.FC<SchoolEmblemProps> = ({ className = '', size = 96 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Lambang Resmi SMP Negeri 6 Jember"
    >
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />

      {/* SVG Badge */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl transition-transform duration-300 hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B2545" />
            <stop offset="50%" stopColor="#134074" />
            <stop offset="100%" stopColor="#0B2545" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9D423" />
            <stop offset="50%" stopColor="#E65C00" />
            <stop offset="100%" stopColor="#F9D423" />
          </linearGradient>
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring with Gold Accent */}
        <circle cx="50" cy="50" r="47" stroke="url(#goldGrad)" strokeWidth="2.5" fill="#06182C" />
        <circle cx="50" cy="50" r="43.5" stroke="#1D4ED8" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />

        {/* Heraldic Shield */}
        <path
          d="M26 26 C36 24, 64 24, 74 26 C75 48, 68 70, 50 82 C32 70, 25 48, 26 26 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="1.8"
        />

        {/* Laurel / Padi & Kapas Wreath Silhouette on flanks */}
        <path
          d="M20 54 C18 42, 22 34, 26 30 C25 35, 23 44, 26 52 C22 56, 21 62, 25 68 C22 72, 24 76, 28 80 C23 76, 20 66, 20 54 Z"
          fill="#EAB308"
          opacity="0.8"
        />
        <path
          d="M80 54 C82 42, 78 34, 74 30 C75 35, 77 44, 74 52 C78 56, 79 62, 75 68 C78 72, 76 76, 72 80 C77 76, 80 66, 80 54 Z"
          fill="#EAB308"
          opacity="0.8"
        />

        {/* Open Book (Ilmu Pengetahuan) */}
        <path
          d="M34 60 C38 56, 45 56, 50 58 C55 56, 62 56, 66 60 C66 66, 55 64, 50 67 C45 64, 34 66, 34 60 Z"
          fill="#FFFFFF"
          stroke="#0F172A"
          strokeWidth="1"
        />
        <path d="M50 58 L50 67" stroke="#0F172A" strokeWidth="1" />

        {/* Torch / Obor Semangat */}
        <path
          d="M47 54 L53 54 L51 44 L49 44 Z"
          fill="#B45309"
          stroke="#F59E0B"
          strokeWidth="0.8"
        />
        <path
          d="M50 32 C53 36, 54 39, 52 42 C51 44, 49 44, 48 42 C46 39, 47 36, 50 32 Z"
          fill="url(#flameGrad)"
        />

        {/* Number 6 (Prestisius SMPN 6) */}
        <text
          x="50"
          y="52"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="#FEF3C7"
          fontFamily="Cinzel, serif"
          letterSpacing="0.5"
        >
          6
        </text>

        {/* Text Curving or Top Banner */}
        <path id="topCurve" d="M 28 20 A 30 30 0 0 1 72 20" fill="none" />
        <text fontSize="4.8" fill="#FDE047" fontWeight="bold" letterSpacing="1">
          <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
            SMPN 6 JEMBER
          </textPath>
        </text>

        {/* Small 5-Point Stars */}
        <polygon points="50,11 51.5,14 55,14 52,16 53,19 50,17 47,19 48,16 45,14 48.5,14" fill="#FBBF24" />
      </svg>
    </div>
  );
};
