import React from 'react'

export function CustomLogo() {
  return (
    <div className="ar-admin-logo">
      <svg
        width="220"
        height="50"
        viewBox="0 0 220 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Emblem / Geometric AR Grid */}
        <g className="emblem-group">
          {/* Blueprint Grid Lines (Light background/helper lines) */}
          <rect x="2" y="2" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="blueprint-frame" />
          <line x1="2" y1="2" x2="38" y2="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" className="blueprint-diagonal" />
          <line x1="38" y1="2" x2="2" y2="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" className="blueprint-diagonal" />
          
          {/* Constructed Letter A */}
          <path
            d="M8 32 L16 10 L20 10 L28 32"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="letter-stroke stroke-primary"
          />
          <path
            d="M12 24 H24"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="letter-stroke stroke-primary"
          />
          
          {/* Constructed Letter R (overlapping A) */}
          <path
            d="M20 18 H29 C32 18 34 20 34 23 C34 26 32 28 29 28 H20 V32"
            stroke="var(--theme-accent, #c35522)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="letter-stroke stroke-accent"
          />
          <path
            d="M27 28 L34 35"
            stroke="var(--theme-accent, #c35522)"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="letter-stroke stroke-accent"
          />
          
          {/* Architect Anchor Circles (Anchor markers) */}
          <circle cx="16" cy="10" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
          <circle cx="20" cy="10" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
          <circle cx="34" cy="35" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
        </g>

        {/* Brand Text */}
        <text
          x="52"
          y="26"
          fontFamily="var(--font-heading, 'Barlow Condensed', sans-serif)"
          fontSize="23"
          fontWeight="800"
          letterSpacing="0.05em"
          fill="currentColor"
          className="brand-title"
        >
          AR CONSTRUCTION
        </text>
        
        {/* Tagline */}
        <text
          x="52"
          y="38"
          fontFamily="var(--font-sans, 'Manrope', sans-serif)"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="0.25em"
          fill="var(--theme-accent, #c35522)"
          className="brand-subtitle"
        >
          ENTREPRENEUR GÉNÉRAL
        </text>
      </svg>
    </div>
  )
}

export default CustomLogo
