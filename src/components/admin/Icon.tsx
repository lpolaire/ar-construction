import React from 'react'

export function CustomIcon() {
  return (
    <div className="ar-admin-icon">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-svg"
      >
        <g className="emblem-group">
          {/* Blueprint Grid Lines */}
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
          
          {/* Constructed Letter R */}
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
          
          {/* Architect Anchor Circles */}
          <circle cx="16" cy="10" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
          <circle cx="20" cy="10" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
          <circle cx="34" cy="35" r="1.5" fill="var(--theme-accent, #c35522)" className="anchor-dot" />
        </g>
      </svg>
    </div>
  )
}

export default CustomIcon
