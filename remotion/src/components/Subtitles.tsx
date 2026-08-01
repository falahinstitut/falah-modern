import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { body } from "../theme";

export const CUES = [
  { from: 0.4, to: 4.35, text: "Vous voulez apprendre l’arabe ou le Coran, sans quitter votre maison ?" },
  {
    from: 4.67,
    to: 9.44,
    text: "Falah Institut vous accompagne en ligne, avec des enseignants qualifiés et bienveillants.",
  },
  { from: 9.76, to: 13.14, text: "Profitez de −50 % sur votre premier mois." },
  { from: 13.46, to: 16.88, text: "Votre évaluation de niveau est entièrement offerte." },
  { from: 17.2, to: 21.08, text: "Rejoignez des centaines d’élèves qui progressent chaque jour." },
  { from: 21.4, to: 26.3, text: "Écrivez-nous sur WhatsApp. Réponse rapide, 7 jours sur 7." },
];

const FADE_IN = 0.32;
const FADE_OUT = 0.3;

export const Subtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  const cue = CUES.find((c) => t >= c.from - FADE_IN && t < c.to + FADE_OUT);
  if (!cue) return null;

  const localT = t - cue.from;
  const duration = cue.to - cue.from;

  const enter = interpolate(localT, [-FADE_IN, 0.18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exit = interpolate(localT, [duration - 0.12, duration + FADE_OUT], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const shell = enter * exit;

  const words = cue.text.split(" ");
  // Reveal every word within the first ~45% of the cue, so text lands with the voice.
  const revealWindow = Math.min(1.05, duration * 0.45);
  const step = words.length > 1 ? revealWindow / words.length : 0;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 72,
        left: 48,
        right: 48,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          opacity: shell,
          transform: `translateY(${interpolate(shell, [0, 1], [26, 0])}px) scale(${interpolate(
            shell,
            [0, 1],
            [0.97, 1],
          )})`,
          background: "rgba(18, 25, 53, 0.86)",
          padding: "18px 28px",
          borderRadius: 18,
          border: "1px solid rgba(200, 164, 77, 0.38)",
          boxShadow: "0 20px 50px -20px rgba(0,0,0,0.45)",
          maxWidth: 920,
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: body,
            fontSize: 34,
            fontWeight: 600,
            color: "#f8f7f3",
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          {words.map((word, i) => {
            const start = i * step;
            const wordIn = interpolate(localT, [start, start + 0.26], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <span
                key={`${word}-${i}`}
                style={{
                  display: "inline-block",
                  opacity: 0.18 + wordIn * 0.82,
                  transform: `translateY(${interpolate(wordIn, [0, 1], [8, 0])}px)`,
                  marginRight: "0.28em",
                }}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
