import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { body } from "../theme";

export const CUES = [
  {
    from: 0,
    to: 5.0,
    text: "Vous voulez apprendre l’arabe ou le Coran, sans quitter votre maison ?",
  },
  {
    from: 5.0,
    to: 11.5,
    text: "Falah Institut vous accompagne en ligne, avec des enseignants qualifiés et bienveillants.",
  },
  {
    from: 11.5,
    to: 15.0,
    text: "Profitez de moins 50 % sur votre premier mois.",
  },
  {
    from: 15.0,
    to: 18.5,
    text: "Votre évaluation de niveau est entièrement offerte.",
  },
  {
    from: 18.5,
    to: 23.0,
    text: "Rejoignez dès maintenant des centaines d’élèves qui progressent chaque jour.",
  },
  {
    from: 23.0,
    to: 26.7,
    text: "Écrivez-nous sur WhatsApp. Réponse rapide, 7 jours sur 7.",
  },
];

export const Subtitles: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = frame / fps;

  const cue = CUES.find((c) => t >= c.from && t < c.to);
  if (!cue) return null;

  const localT = t - cue.from;
  const duration = cue.to - cue.from;
  const opacity = interpolate(
    localT,
    [0, 0.25, duration - 0.25, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 72,
        left: 48,
        right: 48,
        opacity,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
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
          {cue.text}
        </p>
      </div>
    </div>
  );
};
