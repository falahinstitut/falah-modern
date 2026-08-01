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

// Vrais avis publiés sur falahinstitut.com
const QUOTES = [
  {
    text: "Je suis les cours depuis quelques mois, et je prends Allah pour témoin que les cours sont profitables. Les deux professeurs que j'ai sont compétents et ont de la patience dans l'enseignement.",
    name: "Mohamed",
    via: "WhatsApp",
    accent: C.gold,
    delay: 26,
  },
  {
    text: "Ma professeure d'arabe est vraiment au top : sérieuse, patiente, bienveillante et très pédagogue. Elle s'adapte à mon rythme, ce qui rend les cours agréables et motivants.",
    name: "Myriam",
    via: "WhatsApp",
    accent: C.emerald,
    delay: 240,
  },
];

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
          {QUOTES.map((q) => (
            <Card key={q.name} delay={q.delay} accent={q.accent}>
              <span style={{ fontFamily: display, fontSize: 34, lineHeight: 1.35, color: C.cream }}>
                « {q.text} »
              </span>
              <span style={{ fontFamily: body, fontSize: 26, color: q.accent }}>
                {q.name} — avis {q.via}
              </span>
            </Card>
          ))}
        </div>
      </Frame>
    </AbsoluteFill>
  );
};
