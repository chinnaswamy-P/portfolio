"use client";

import { useEffect, useState } from "react";

export default function SignalNetwork() {
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const still = paused || reducedMotion;

  return (
    <div className={`signal-network${still ? " is-paused" : ""}`}>
      <svg className="signal-network-art" viewBox="0 0 1100 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="signal-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#48d6d2" stopOpacity=".02" />
            <stop offset="55%" stopColor="#48d6d2" stopOpacity=".24" />
            <stop offset="100%" stopColor="#48d6d2" stopOpacity=".06" />
          </linearGradient>
        </defs>
        <g className="signal-lines" fill="none" stroke="url(#signal-line)" strokeWidth="1.3">
          <path d="M180 140 L380 95 L545 180 L735 110 L960 175" />
          <path d="M110 390 L305 315 L505 365 L735 265 L960 175" />
          <path d="M305 315 L380 95 M505 365 L545 180 M735 265 L735 110" />
          <path d="M110 390 L310 535 L505 365 L760 490 L960 175" />
        </g>
        <g className="signal-nodes" fill="#48d6d2">
          <circle cx="180" cy="140" r="3" /><circle cx="380" cy="95" r="4" />
          <circle cx="545" cy="180" r="3" /><circle cx="735" cy="110" r="4" />
          <circle cx="960" cy="175" r="3" /><circle cx="110" cy="390" r="3" />
          <circle cx="305" cy="315" r="4" /><circle cx="505" cy="365" r="4" />
          <circle cx="735" cy="265" r="3" /><circle cx="310" cy="535" r="3" />
          <circle cx="760" cy="490" r="3" />
        </g>
        <circle className="signal-pulse" r="5" fill="#81fff1">
          <animateMotion dur="12s" repeatCount="indefinite" path="M110 390 L305 315 L505 365 L735 265 L960 175" />
        </circle>
      </svg>
      {!reducedMotion && (
        <button
          className="signal-motion-toggle"
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play background motion" : "Pause background motion"}
          aria-pressed={paused}
        >
          {paused ? "Play motion" : "Pause motion"}
        </button>
      )}
    </div>
  );
}
