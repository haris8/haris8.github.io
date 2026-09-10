/* oxlint-disable jsx-a11y/prefer-tag-over-role -- Inline SVG diagrams need an accessible image role and label. */
import { ArrowUpRight } from 'lucide-react';

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap nav-row">
          <a className="monogram" href="/" aria-label="Haris Siddiqui, home">
            HS<span>.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/#projects">Projects</a>
            <a href="/#experience">Experience</a>
            <a href="/#education">Education</a>
          </nav>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <a className="footer-name" href="/">
        Haris Siddiqui<span>.</span>
      </a>
      <a className="back-top" href="#top" aria-label="Back to top">
        Back to top <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}
export function MarketChart({ large = false }: { large?: boolean }) {
  const path =
    'M0 188 L12 195 L22 177 L34 180 L42 156 L53 169 L65 136 L77 142 L85 122 L96 154 L107 150 L115 172 L127 153 L138 160 L150 144 L160 158 L174 129 L183 137 L194 104 L206 113 L218 82 L230 99 L243 85 L254 113 L266 105 L278 132 L289 117 L300 122 L313 94 L324 101 L338 63 L350 81 L361 67 L373 40 L384 49 L397 25 L408 41 L422 15 L434 28 L446 12 L460 22';
  return (
    <svg
      className={`market-chart ${large ? 'market-chart-large' : ''}`}
      viewBox="0 0 460 230"
      fill="none"
      role="img"
      aria-label="Illustrative natural gas market chart using simulated data"
    >
      <g stroke="currentColor" opacity=".11">
        {[35, 85, 135, 185, 229].map((y) => (
          <path key={y} d={`M0 ${y}H460`} />
        ))}
        {[0, 92, 184, 276, 368, 459].map((x) => (
          <path key={x} d={`M${x} 0V230`} />
        ))}
      </g>
      <path d={`${path} L460 230 H0 Z`} fill="currentColor" opacity=".035" />
      <path
        className="chart-line"
        d={path}
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="460" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}
export function DataDiagram() {
  return (
    <svg
      className="data-diagram"
      viewBox="0 0 640 220"
      fill="none"
      role="img"
      aria-label="Simplified database diagram linking candidates, applications, and employers"
    >
      <g stroke="#687483" strokeWidth="1">
        <path d="M180 111H238M402 111H458" />
        <circle cx="180" cy="111" r="3" fill="#9caac0" />
        <circle cx="458" cy="111" r="3" fill="#9caac0" />
      </g>
      {[
        {
          x: 16,
          name: 'Candidates',
          fields: ['candidate_id', 'name', 'experience'],
        },
        {
          x: 238,
          name: 'Applications',
          fields: ['application_id', 'candidate_id', 'job_id'],
        },
        {
          x: 458,
          name: 'Employers',
          fields: ['employer_id', 'company', 'industry'],
        },
      ].map((t) => (
        <g key={t.name}>
          <rect
            x={t.x}
            y="43"
            width="164"
            height="139"
            rx="3"
            fill="#191e25"
            stroke="#3c4552"
          />
          <path d={`M${t.x} 83H${t.x + 164}`} stroke="#3c4552" />
          <text
            x={t.x + 15}
            y="68"
            fontFamily="Arial, sans-serif"
            fontSize="15"
            fill="#d1d5dc"
          >
            {t.name}
          </text>
          {t.fields.map((f, i) => (
            <text
              key={f}
              x={t.x + 15}
              y={106 + i * 25}
              fontFamily="monospace"
              fontSize="12"
              fill={i === 0 ? '#b8c6dd' : '#8490a0'}
            >
              {i === 0 ? '↳ ' : ''}
              {f}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}
