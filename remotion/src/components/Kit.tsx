import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, body, display } from "../theme";

export const useEnter = (delay = 0, damping = 200) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping, stiffness: 120, mass: 0.9 } });
  return {
    opacity: interpolate(p, [0, 0.6], [0, 1], { extrapolateRight: "clamp" }),
    y: interpolate(p, [0, 1], [64, 0]),
    p,
  };
};

export const Eyebrow: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const { opacity, y } = useEnter(delay);
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y * 0.4}px)`,
        fontFamily: body,
        fontSize: 26,
        letterSpacing: 6,
        textTransform: "uppercase",
        color: C.gold,
        display: "flex",
        alignItems: "center",
        gap: 18,
      }}
    >
      <span style={{ width: 54, height: 2, background: C.gold, display: "inline-block" }} />
      {children}
    </div>
  );
};

export const Title: React.FC<{ children: React.ReactNode; delay?: number; size?: number }> = ({
  children,
  delay = 6,
  size = 96,
}) => {
  const { opacity, y } = useEnter(delay);
  return (
    <h1
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        margin: 0,
        fontFamily: display,
        fontWeight: 600,
        fontSize: size,
        lineHeight: 1.04,
        color: C.cream,
        letterSpacing: -1.5,
      }}
    >
      {children}
    </h1>
  );
};

export const Card: React.FC<{
  delay?: number;
  children: React.ReactNode;
  accent?: string;
}> = ({ delay = 0, children, accent = C.gold }) => {
  const { opacity, y, p } = useEnter(delay, 14);
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px) scale(${interpolate(p, [0, 1], [0.94, 1])})`,
        border: `1.5px solid ${accent}59`,
        background: "rgba(255,255,255,0.055)",
        borderRadius: 34,
        padding: "34px 38px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {children}
    </div>
  );
};

export const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      padding: "108px 92px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 34,
    }}
  >
    {children}
  </div>
);
