import { BoltIcon, ServerIcon, AirIcon, FireIcon } from "./icons";

export default function WhatIsRAF() {
  return (
    <section className="raf" id="what">
      <div className="wrap">
        <div className="raf-grid">
          <div className="raf-text reveal">
            <span className="eyebrow">What is raised access flooring?</span>
            <h2
              style={{
                fontSize: "clamp(1.9rem,3.3vw,2.6rem)",
                fontWeight: 800,
                color: "var(--navy)",
                margin: "16px 0 18px",
              }}
            >
              An elevated floor with room to work underneath
            </h2>
            <p>
              A raised access floor is an elevated floor area built above another
              floor — typically a concrete slab. It comprises load-bearing floor
              panels laid in a horizontal grid, supported by adjustable vertical
              pedestals.
            </p>
            <p>
              This creates an underfloor void to cost-effectively house and
              distribute your building services. Panels are readily removable, so
              access to everything beneath is fast and easy.
            </p>
            <div className="uses">
              <div className="use">
                <BoltIcon /> Electric power
              </div>
              <div className="use">
                <ServerIcon /> Data &amp; telecoms
              </div>
              <div className="use">
                <AirIcon /> Air conditioning
              </div>
              <div className="use">
                <FireIcon /> Fire &amp; security
              </div>
            </div>
          </div>
          <div className="diagram reveal">
            <svg
              viewBox="0 0 460 300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Raised access floor cross-section"
            >
              <defs>
                <linearGradient id="panelG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3c86d6" />
                  <stop offset="1" stopColor="#2469b2" />
                </linearGradient>
                <linearGradient id="slabG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d8dee5" />
                  <stop offset="1" stopColor="#b9c2cc" />
                </linearGradient>
              </defs>
              {/* concrete slab */}
              <rect x="20" y="250" width="420" height="34" rx="3" fill="url(#slabG)" />
              <text
                x="230"
                y="272"
                textAnchor="middle"
                fontFamily="Archivo,sans-serif"
                fontSize="12"
                fill="#5b6670"
                fontWeight="600"
              >
                CONCRETE SLAB
              </text>
              {/* pedestals */}
              <g fill="#7f97ad">
                <rect x="55" y="170" width="14" height="80" rx="2" />
                <rect x="160" y="170" width="14" height="80" rx="2" />
                <rect x="285" y="170" width="14" height="80" rx="2" />
                <rect x="390" y="170" width="14" height="80" rx="2" />
              </g>
              <g fill="#5b6670">
                <rect x="46" y="244" width="32" height="8" rx="2" />
                <rect x="151" y="244" width="32" height="8" rx="2" />
                <rect x="276" y="244" width="32" height="8" rx="2" />
                <rect x="381" y="244" width="32" height="8" rx="2" />
              </g>
              {/* services in void */}
              <circle cx="115" cy="225" r="9" fill="none" stroke="#2c7cce" strokeWidth="3" />
              <circle cx="225" cy="232" r="7" fill="none" stroke="#48b06a" strokeWidth="3" />
              <path d="M250 215 q40 -18 80 0" fill="none" stroke="#e0a13c" strokeWidth="3" />
              <text
                x="230"
                y="205"
                textAnchor="middle"
                fontFamily="Hanken Grotesk,sans-serif"
                fontSize="11"
                fill="#6b7884"
                fontStyle="italic"
              >
                underfloor services void
              </text>
              {/* floor panels */}
              <g>
                <rect x="40" y="150" width="120" height="20" rx="2" fill="url(#panelG)" />
                <rect x="166" y="150" width="120" height="20" rx="2" fill="url(#panelG)" />
                <rect x="292" y="150" width="108" height="20" rx="2" fill="url(#panelG)" />
                <rect x="40" y="150" width="360" height="6" rx="2" fill="#5fa0e0" opacity=".5" />
              </g>
              {/* removed panel showing access */}
              <rect
                x="166"
                y="150"
                width="120"
                height="20"
                rx="2"
                fill="#fff"
                stroke="#2469b2"
                strokeWidth="2"
                strokeDasharray="5 4"
              />
              <text
                x="226"
                y="164"
                textAnchor="middle"
                fontFamily="Archivo,sans-serif"
                fontSize="10"
                fill="#2469b2"
                fontWeight="700"
              >
                ACCESS
              </text>
              <text
                x="230"
                y="135"
                textAnchor="middle"
                fontFamily="Archivo,sans-serif"
                fontSize="12"
                fontWeight="700"
                fill="#15325f"
              >
                REMOVABLE FLOOR PANELS
              </text>
            </svg>
            <p className="cap">
              Cross-section: load-bearing panels on adjustable pedestals over the
              structural slab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
