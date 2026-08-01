import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TransitionSeries, springTiming, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { PersistentBackground } from "./components/PersistentBackground";
import { Subtitles } from "./components/Subtitles";
import { C, body, display } from "./theme";

const TRANSITION = 20;
const DURATIONS = [155, 175, 133, 133, 148, 266];
export const SOCIAL_TOTAL_FRAMES =
  DURATIONS.reduce((a, b) => a + b, 0) - TRANSITION * (DURATIONS.length - 1);

const useEnter = (delay = 0, damping = 200) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - delay,
    fps,
    config: { damping, stiffness: 120, mass: 0.9 },
  });
  return {
    opacity: interpolate(p, [0, 0.6], [0, 1], { extrapolateRight: "clamp" }),
    y: interpolate(p, [0, 1], [56, 0]),
    p,
  };
};

const Eyebrow: React.FC<{ children: React.ReactNode; delay?: number; color?: string }> = ({
  children,
  delay = 0,
  color = C.gold,
}) => {
  const { opacity, y } = useEnter(delay);
  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y * 0.4}px)`,
        fontFamily: body,
        fontSize: 24,
        letterSpacing: 5,
        textTransform: "uppercase",
        color,
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <span style={{ width: 42, height: 2, background: color, display: "inline-block" }} />
      {children}
    </div>
  );
};

const Title: React.FC<{ children: React.ReactNode; delay?: number; size?: number; color?: string }> = ({
  children,
  delay = 6,
  size = 84,
  color = C.cream,
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
        lineHeight: 1.05,
        color,
        letterSpacing: -1.2,
        textAlign: "center",
      }}
    >
      {children}
    </h1>
  );
};

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      padding: "92px 56px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 28,
    }}
  >
    {children}
  </div>
);

const SocialScene1: React.FC = () => {
  const frame = useCurrentFrame();
  const logo = useEnter(4, 16);
  const name = useEnter(20);
  const tag = useEnter(34);
  const ringScale = interpolate(frame, [0, 60], [0.7, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 40 }}>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: `1.5px solid ${C.gold}66`,
            transform: `scale(${ringScale}) rotate(${frame * 0.35}deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            border: `1.5px solid ${C.emerald}55`,
            transform: `scale(${ringScale}) rotate(${45 - frame * 0.25}deg)`,
          }}
        />
        <div
          style={{
            opacity: logo.opacity,
            transform: `scale(${interpolate(logo.p, [0, 1], [0.72, 1])})`,
            width: 200,
            height: 200,
            borderRadius: 40,
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
            fontSize: 72,
            letterSpacing: 2,
            color: C.cream,
          }}
        >
          FALAH <span style={{ color: C.gold }}>INSTITUT</span>
        </p>
        <p
          style={{
            margin: "18px 0 0",
            opacity: tag.opacity,
            transform: `translateY(${tag.y * 0.5}px)`,
            fontFamily: body,
            fontSize: 30,
            letterSpacing: 6,
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

const SocialScene2: React.FC = () => {
  const sub = useEnter(34);
  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow delay={0}>Enseignement en ligne</Eyebrow>
        <Title size={78}>
          Des professeurs
          <br />
          <span style={{ color: C.gold }}>qualifiés</span>
        </Title>
        <p
          style={{
            opacity: sub.opacity,
            transform: `translateY(${sub.y * 0.6}px)`,
            margin: 0,
            maxWidth: 780,
            fontFamily: body,
            fontSize: 34,
            lineHeight: 1.45,
            color: C.creamDim,
            textAlign: "center",
          }}
        >
          Cours en direct via Zoom, pour apprendre sereinement depuis chez vous.
        </p>
      </Frame>
    </AbsoluteFill>
  );
};

const SocialScene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - 6, fps, config: { damping: 14 } });
  const scale = interpolate(p, [0, 1], [0.85, 1]);
  const opacity = interpolate(p, [0, 0.5], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow delay={0}>Offre de lancement</Eyebrow>
        <div
          style={{
            opacity,
            transform: `scale(${scale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: display,
              fontWeight: 700,
              fontSize: 140,
              color: C.gold,
              lineHeight: 1,
            }}
          >
            −50%
          </h1>
          <p
            style={{
              margin: 0,
              fontFamily: display,
              fontSize: 44,
              color: C.cream,
              textAlign: "center",
            }}
          >
            sur votre 1er mois
          </p>
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const SocialScene4: React.FC = () => {
  const sub = useEnter(30);
  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow delay={0}>Sans engagement</Eyebrow>
        <Title size={72}>
          Évaluation de
          <br />
          <span style={{ color: C.emerald }}>niveau offerte</span>
        </Title>
        <p
          style={{
            opacity: sub.opacity,
            transform: `translateY(${sub.y * 0.6}px)`,
            margin: 0,
            fontFamily: body,
            fontSize: 34,
            lineHeight: 1.45,
            color: C.creamDim,
            textAlign: "center",
          }}
        >
          15 minutes pour définir le cursus qui vous convient.
        </p>
      </Frame>
    </AbsoluteFill>
  );
};

const SocialScene5: React.FC = () => {
  const quotes = [
    {
      text: "Ma professeure d’arabe est vraiment au top : sérieuse, patiente, bienveillante et très pédagogue.",
      name: "Myriam",
      accent: C.emerald,
    },
    {
      text: "Je prends Allah pour témoin que les cours sont profitables. Les professeurs sont compétents et patients.",
      name: "Mohamed",
      accent: C.gold,
    },
  ];

  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow delay={0}>Ils nous font confiance</Eyebrow>
        <Title size={64}>Des élèves qui progressent</Title>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", marginTop: 8 }}>
          {quotes.map((q, i) => {
            const { opacity, y, p } = useEnter(18 + i * 12, 14);
            return (
              <div
                key={q.name}
                style={{
                  opacity,
                  transform: `translateY(${y}px) scale(${interpolate(p, [0, 1], [0.96, 1])})`,
                  border: `1.5px solid ${q.accent}59`,
                  background: "rgba(255,255,255,0.055)",
                  borderRadius: 30,
                  padding: "28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span style={{ fontFamily: display, fontSize: 30, lineHeight: 1.35, color: C.cream }}>
                  « {q.text} »
                </span>
                <span style={{ fontFamily: body, fontSize: 24, color: q.accent }}>{q.name} — avis WhatsApp</span>
              </div>
            );
          })}
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const SocialScene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sub = useEnter(18);
  const btn = spring({ frame: frame - 36, fps, config: { damping: 13 } });
  const pulse = 1 + Math.sin(Math.max(0, frame - 60) * 0.12) * 0.022;

  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 32, padding: 92 }}>
      <div style={{ textAlign: "center" }}>
        <Title size={82}>
          Démarrer
          <br />
          <span style={{ color: C.gold, fontStyle: "italic" }}>maintenant</span>
        </Title>
      </div>
      <p
        style={{
          margin: 0,
          opacity: sub.opacity,
          transform: `translateY(${sub.y * 0.5}px)`,
          fontFamily: body,
          fontSize: 32,
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
          gap: 18,
          background: "#25D366",
          color: "#08321c",
          padding: "28px 50px",
          borderRadius: 999,
          fontFamily: display,
          fontWeight: 600,
          fontSize: 38,
          boxShadow: "0 40px 80px -30px #25D36688",
        }}
      >
        <svg width={42} height={42} viewBox="0 0 24 24" fill="#08321c">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.09c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.03.24-3.48-.72-2.95-1.16-4.79-4.2-4.94-4.4-.14-.2-1.17-1.56-1.17-2.98 0-1.42.75-2.11 1.01-2.4.26-.29.56-.36.75-.36.19 0 .38 0 .55.01.17.01.41-.07.64.49.24.58.8 1.99.87 2.13.07.15.12.32.02.51-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.58.17.29.75 1.25 1.62 2.02 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.19.72-.85.91-1.14.19-.29.39-.24.64-.15.26.1 1.64.78 1.92.92.29.15.48.22.55.34.07.12.07.7-.17 1.38z" />
        </svg>
        Démarrer sur WhatsApp
      </div>

      <p
        style={{
          margin: 0,
          opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
          fontFamily: display,
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: C.gold,
        }}
      >
        falahinstitut.com
      </p>
    </AbsoluteFill>
  );
};

const SCENES = [SocialScene1, SocialScene2, SocialScene3, SocialScene4, SocialScene5, SocialScene6];

export const SocialAd: React.FC = () => (
  <AbsoluteFill>
    <PersistentBackground />
    <TransitionSeries>
      {SCENES.flatMap((Scene, i) => {
        const nodes = [
          <TransitionSeries.Sequence key={`sa${i}`} durationInFrames={DURATIONS[i]}>
            <Scene />
          </TransitionSeries.Sequence>,
        ];
        if (i < SCENES.length - 1) {
          nodes.push(
            <TransitionSeries.Transition
              key={`tat${i}`}
              presentation={fade()}
              timing={linearTiming({
                durationInFrames: TRANSITION,
                easing: Easing.inOut(Easing.ease),
              })}
            />,
          );
        }
        return nodes;
      })}
    </TransitionSeries>
    <Subtitles />
    <Sequence from={0}>
      <Audio src={staticFile("audio/social-ad-voiceover.mp3")} />
    </Sequence>
  </AbsoluteFill>
);
