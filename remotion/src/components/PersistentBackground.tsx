import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, display } from "../theme";

const LETTERS = ["ا", "ب", "ج", "د", "ه", "و", "ز", "ح", "ط", "ي", "ك", "ل", "م", "ن", "س", "ع"];

const SEEDS = LETTERS.map((ch, i) => ({
  ch,
  x: (i * 37) % 92 + 3,
  y: (i * 61) % 90 + 4,
  size: 34 + ((i * 23) % 46),
  amp: 26 + ((i * 17) % 40),
  speed: 0.006 + ((i % 5) * 0.0022),
  tone: i % 3 === 0 ? C.gold : i % 3 === 1 ? C.emerald : C.creamDim,
  op: 0.1 + ((i % 4) * 0.045),
}));

export const PersistentBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const drift = interpolate(frame, [0, 1000], [0, 40]);
  const glowScale = 1 + Math.sin(frame * 0.012) * 0.08;

  return (
    <AbsoluteFill style={{ backgroundColor: C.navyDeep, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `linear-gradient(${140 + drift}deg, ${C.navyDeep} 0%, ${C.navy} 45%, ${C.navySoft} 100%)`,
        }}
      />
      {/* soft radial glows */}
      <div
        style={{
          position: "absolute",
          left: -240,
          top: -180,
          width: 900,
          height: 900,
          borderRadius: "50%",
          transform: `scale(${glowScale})`,
          background: `radial-gradient(circle, ${C.gold}33 0%, transparent 68%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -260,
          bottom: -220,
          width: 860,
          height: 860,
          borderRadius: "50%",
          transform: `scale(${2 - glowScale})`,
          background: `radial-gradient(circle, ${C.emerald}33 0%, transparent 68%)`,
        }}
      />

      {/* geometric arch grid */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, opacity: 0.16 }}>
        {new Array(9).fill(0).map((_, i) => {
          const r = 120 + i * 105;
          const rot = interpolate(frame, [0, 1000], [0, i % 2 === 0 ? 16 : -16]);
          return (
            <g key={i} transform={`rotate(${rot} ${width / 2} ${height * 0.55})`}>
              <circle
                cx={width / 2}
                cy={height * 0.55}
                r={r}
                fill="none"
                stroke={i % 2 === 0 ? C.gold : C.creamDim}
                strokeWidth={1.4}
              />
            </g>
          );
        })}
        {new Array(12).fill(0).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 + frame * 0.0018;
          return (
            <line
              key={`l${i}`}
              x1={width / 2}
              y1={height * 0.55}
              x2={width / 2 + Math.cos(a) * 1400}
              y2={height * 0.55 + Math.sin(a) * 1400}
              stroke={C.creamDim}
              strokeWidth={0.9}
              opacity={0.5}
            />
          );
        })}
      </svg>

      {/* drifting arabic letters */}
      {SEEDS.map((s, i) => {
        const dy = Math.sin(frame * s.speed + i) * s.amp;
        const dx = Math.cos(frame * s.speed * 0.8 + i * 1.7) * (s.amp * 0.7);
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontFamily: display,
              fontSize: s.size,
              color: s.tone,
              opacity: s.op,
              transform: `translate3d(${dx}px, ${dy}px, 0)`,
            }}
          >
            {s.ch}
          </span>
        );
      })}
    </AbsoluteFill>
  );
};
