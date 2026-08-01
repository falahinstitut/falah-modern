import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { C, body, display } from "../theme";
import { useEnter } from "../components/Kit";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const logo = useEnter(4, 16);
  const name = useEnter(18);
  const tag = useEnter(30);
  const ringScale = interpolate(frame, [0, 60], [0.7, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 46,
      }}
    >
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            borderRadius: "50%",
            border: `1.5px solid ${C.gold}66`,
            transform: `scale(${ringScale}) rotate(${frame * 0.35}deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            border: `1.5px solid ${C.emerald}55`,
            transform: `scale(${ringScale}) rotate(${45 - frame * 0.25}deg)`,
          }}
        />
        <div
          style={{
            opacity: logo.opacity,
            transform: `scale(${interpolate(logo.p, [0, 1], [0.72, 1])})`,
            width: 232,
            height: 232,
            borderRadius: 46,
            background: C.cream,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: `0 40px 90px -30px ${C.navyDeep}`,
          }}
        >
          <Img src={staticFile("images/logo.jpg")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <p
          style={{
            margin: 0,
            opacity: name.opacity,
            transform: `translateY(${name.y}px)`,
            fontFamily: display,
            fontWeight: 600,
            fontSize: 84,
            letterSpacing: 2,
            color: C.cream,
          }}
        >
          FALAH <span style={{ color: C.gold }}>INSTITUT</span>
        </p>
        <p
          style={{
            margin: "22px 0 0",
            opacity: tag.opacity,
            transform: `translateY(${tag.y * 0.5}px)`,
            fontFamily: body,
            fontSize: 34,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: C.creamDim,
          }}
        >
          Arabe · Coran · En ligne
        </p>
      </div>
    </AbsoluteFill>
  );
};
