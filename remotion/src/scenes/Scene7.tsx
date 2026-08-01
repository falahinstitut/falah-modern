import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, body, display } from "../theme";
import { Title, useEnter } from "../components/Kit";

export const Scene7: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sub = useEnter(22);
  const btn = spring({ frame: frame - 36, fps, config: { damping: 13 } });
  const pulse = 1 + Math.sin(Math.max(0, frame - 60) * 0.12) * 0.022;

  return (
    <AbsoluteFill
      style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 40, padding: 92 }}
    >
      <div style={{ textAlign: "center" }}>
        <Title size={92}>
          Votre première séance
          <br />
          <span style={{ color: C.gold, fontStyle: "italic" }}>vous attend</span>
        </Title>
      </div>
      <p
        style={{
          margin: 0,
          opacity: sub.opacity,
          transform: `translateY(${sub.y * 0.5}px)`,
          fontFamily: body,
          fontSize: 34,
          color: C.creamDim,
          textAlign: "center",
        }}
      >
        Écrivez-nous sur WhatsApp — réponse rapide, 7j/7.
      </p>

      <div
        style={{
          transform: `scale(${interpolate(btn, [0, 1], [0.8, 1]) * pulse})`,
          opacity: interpolate(btn, [0, 0.4], [0, 1], { extrapolateRight: "clamp" }),
          display: "flex",
          alignItems: "center",
          gap: 20,
          background: "#25D366",
          color: "#08321c",
          padding: "30px 56px",
          borderRadius: 999,
          fontFamily: display,
          fontWeight: 600,
          fontSize: 42,
          boxShadow: `0 40px 80px -30px #25D36688`,
        }}
      >
        <svg width={46} height={46} viewBox="0 0 24 24" fill="#08321c">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.48-.72-2.95-1.16-4.79-4.2-4.94-4.4-.14-.2-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.01-2.4.26-.29.56-.36.75-.36.19 0 .38 0 .55.01.17.01.41-.07.64.49.24.58.8 1.99.87 2.13.07.15.12.32.02.51-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.19.72-.85.91-1.14.19-.29.39-.24.64-.15.26.1 1.64.78 1.92.92.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
        </svg>
        Démarrer sur WhatsApp
      </div>

      <p
        style={{
          margin: 0,
          opacity: interpolate(frame, [70, 95], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
          fontFamily: display,
          fontSize: 30,
          letterSpacing: 8,
          textTransform: "uppercase",
          color: C.gold,
        }}
      >
        falahinstitut.com
      </p>
    </AbsoluteFill>
  );
};
