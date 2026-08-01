import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, body, display } from "../theme";
import { Card, Eyebrow, Frame, Title } from "../components/Kit";

const Stars: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {new Array(5).fill(0).map((_, i) => {
        const p = spring({ frame: frame - delay - i * 5, fps, config: { damping: 12 } });
        return (
          <svg key={i} width={44} height={44} viewBox="0 0 24 24" style={{ transform: `scale(${p})` }}>
            <path
              d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"
              fill={C.gold}
            />
          </svg>
        );
      })}
    </div>
  );
};

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - 6, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow>Avis vérifiés</Eyebrow>
        <Title size={80}>Ils progressent avec nous</Title>
        <div
          style={{
            opacity: interpolate(p, [0, 0.5], [0, 1], { extrapolateRight: "clamp" }),
            marginTop: 4,
          }}
        >
          <Stars delay={14} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <Card delay={26} accent={C.gold}>
            <span style={{ fontFamily: display, fontSize: 36, lineHeight: 1.35, color: C.cream }}>
              « Des enseignants patients et un vrai suivi. Mon niveau de lecture
              a changé en quelques mois. »
            </span>
            <span style={{ fontFamily: body, fontSize: 26, color: C.gold }}>Élève — cursus arabe</span>
          </Card>
          <Card delay={42} accent={C.emerald}>
            <span style={{ fontFamily: display, fontSize: 36, lineHeight: 1.35, color: C.cream }}>
              « Mes enfants attendent le cours avec impatience, l'ambiance est
              bienveillante. »
            </span>
            <span style={{ fontFamily: body, fontSize: 26, color: C.emerald }}>Parent — cursus enfants</span>
          </Card>
        </div>
      </Frame>
    </AbsoluteFill>
  );
};
