import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { C, body, display } from "../theme";
import { Eyebrow, Frame, Title } from "../components/Kit";

const STATS = [
  { k: 7, suffix: "j/7", label: "de 9h à 21h" },
  { k: 6, suffix: "", label: "élèves max / groupe" },
  { k: 0, suffix: "€", label: "évaluation de niveau" },
];

const Counter: React.FC<{ to: number; suffix: string; label: string; delay: number }> = ({
  to,
  suffix,
  label,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const value = Math.round(interpolate(p, [0, 1], [0, to]));
  return (
    <div
      style={{
        flex: 1,
        opacity: interpolate(p, [0, 0.4], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(p, [0, 1], [50, 0])}px)`,
        textAlign: "center",
        borderTop: `2px solid ${C.gold}66`,
        paddingTop: 26,
      }}
    >
      <p style={{ margin: 0, fontFamily: display, fontWeight: 700, fontSize: 84, color: C.cream }}>
        {value}
        <span style={{ color: C.gold }}>{suffix}</span>
      </p>
      <p style={{ margin: "10px 0 0", fontFamily: body, fontSize: 26, color: C.creamDim, lineHeight: 1.3 }}>
        {label}
      </p>
    </div>
  );
};

export const Scene5: React.FC = () => (
  <AbsoluteFill>
    <Frame>
      <Eyebrow>Un cadre sérieux</Eyebrow>
      <Title size={80}>Des petits groupes, une vraie progression</Title>
      <div style={{ display: "flex", gap: 30, marginTop: 26 }}>
        {STATS.map((s, i) => (
          <Counter key={s.label} to={s.k} suffix={s.suffix} label={s.label} delay={18 + i * 12} />
        ))}
      </div>
    </Frame>
  </AbsoluteFill>
);
