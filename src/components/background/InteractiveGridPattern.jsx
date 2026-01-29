import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * InteractiveGridPattern (JS-only, no Tailwind required)
 * - Fullscreen background that sits BEHIND your UI (zIndex: -1)
 * - Does NOT block clicks (pointerEvents: "none")
 * - Still reacts to mouse because it listens to window mousemove
 * - Includes stronger "rim glow" so cells feel less flat
 *
 * Customize:
 * - glowColor: main highlight color (rgba)
 * - backgroundColor: base background
 * - borderColor: grid line color
 * - proximity: how far the glow spreads
 * - rimStrength: how strong the rim glow is
 * - haloStrength: how strong the outer halo is
 */

function mergeClassName(...classes) {
  return classes.filter(Boolean).join(" ");
}

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

// Change alpha of an rgba() string like "rgba(r,g,b,a)"
function withAlpha(rgba, a) {
  return rgba.replace(/[\d.]+\)\s*$/, `${clamp01(a)})`);
}

export function InteractiveGridPattern({
  className,
  children,
  cellSize = 56,

  // Lighter palette defaults (tweak freely)
  glowColor = "rgba(200, 150, 60, 0.45)", // soft blue, stronger default
  borderColor = "rgba(148, 163, 184, 0.20)", // light slate
  proximity = 160,

  // Background tuning
  backgroundColor = "#f8fafc",
  vignetteStrength = 0.10, // 0..0.35
  centerGlowOpacity = 0.16, // 0..0.35

  // Rim glow tuning
  rimStrength = 0.95, // higher = brighter rim
  haloStrength = 0.55, // higher = stronger outer halo
}) {
  const containerRef = useRef(null);
  const [grid, setGrid] = useState({ rows: 0, cols: 0, scale: 1 });
  const [mousePos, setMousePos] = useState({ x: -10000, y: -10000 });

  const updateGrid = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    const scale = Math.max(1, Math.min(width, height) / 900);
    const s = cellSize * scale;

    setGrid({
      rows: Math.ceil(height / s) + 1,
      cols: Math.ceil(width / s) + 1,
      scale,
    });
  }, [cellSize]);

  useEffect(() => {
    updateGrid();
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(updateGrid);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateGrid]);

  // ✅ Track mouse globally so background can stay behind & non-blocking
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleOut = (e) => {
      // when mouse leaves browser window
      if (!e.relatedTarget && !e.toElement) {
        setMousePos({ x: -10000, y: -10000 });
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleOut);
    };
  }, []);

  const s = cellSize * grid.scale;
  const prox = proximity * grid.scale;

  return (
    <div
      ref={containerRef}
      className={mergeClassName(className)}
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: backgroundColor,

        // Push behind everything:
        zIndex: -1,

        // Don't block clicks on your UI:
        pointerEvents: "none",
      }}
    >
      {/* Grid */}
      <div style={{ position: "absolute", inset: 0 }}>
        {Array.from({ length: grid.rows }).map((_, r) => (
          <div key={r} style={{ display: "flex" }}>
            {Array.from({ length: grid.cols }).map((_, c) => {
              const cx = c * s + s / 2;
              const cy = r * s + s / 2;

              const dx = mousePos.x - cx;
              const dy = mousePos.y - cy;
              const dist = Math.sqrt(dx * dx + dy * dy);
              const p = clamp01(1 - dist / prox); // 0..1

              // Rim gradient: edges glow more than center
              const rimBg =
                p > 0
                  ? `radial-gradient(circle at center,
                      transparent 42%,
                      ${withAlpha(glowColor, p * 0.35)} 68%,
                      ${withAlpha(glowColor, p * rimStrength)} 100%)`
                  : "transparent";

              // Dynamic border = better edge definition
              const dynamicBorder =
                p > 0 ? withAlpha(glowColor, p * 0.6) : borderColor;

              // Multi-layer shadow for depth (outer halo + inner glow + sharp rim)
              const shadow =
                p > 0
                  ? `
                    0 0 ${36 * grid.scale}px ${withAlpha(
                      glowColor,
                      p * haloStrength
                    )},
                    inset 0 0 ${18 * grid.scale}px ${withAlpha(
                      glowColor,
                      p * 0.35
                    )},
                    inset 0 0 ${2 * grid.scale}px ${withAlpha(
                      glowColor,
                      0.75
                    )}
                  `
                  : "none";

              return (
                <div
                  key={`${r}-${c}`}
                  style={{
                    width: s,
                    height: s,
                    flex: "0 0 auto",
                    border: `1px solid ${dynamicBorder}`,
                    background: rimBg,
                    boxShadow: shadow,
                    transition: "all 900ms ease-out",
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Center ambient glow */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "65vmin",
          height: "65vmin",
          borderRadius: "9999px",
          opacity: centerGlowOpacity,
          background: `radial-gradient(circle,
            ${withAlpha(glowColor, 0.28)} 0%,
            ${withAlpha(glowColor, 0.10)} 38%,
            transparent 72%)`,
        }}
      />

      {/* Soft vignette (light-mode friendly) */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0) 55%,
            rgba(15,23,42,${vignetteStrength}) 100%)`,
        }}
      />

      {/* Content layer (optional) */}
      {children ? (
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      ) : null}
    </div>
  );
}

export default function InteractiveGridPatternDemo() {
  return <InteractiveGridPattern />;
}
