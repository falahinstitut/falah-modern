import { AbsoluteFill } from "remotion";
import { C, body } from "../theme";
import { Eyebrow, Frame, Title, useEnter } from "../components/Kit";

export const Scene2: React.FC = () => {
  const sub = useEnter(34);
  return (
    <AbsoluteFill>
      <Frame>
        <Eyebrow>Votre nouveau départ</Eyebrow>
        <Title size={104}>
          Apprenez l'<span style={{ color: C.gold, fontStyle: "italic" }}>Arabe</span>
          <br />et le <span style={{ color: C.gold, fontStyle: "italic" }}>Coran</span>
          <br />
          en ligne
        </Title>
        <p
          style={{
            opacity: sub.opacity,
            transform: `translateY(${sub.y * 0.6}px)`,
            margin: 0,
            maxWidth: 780,
            fontFamily: body,
            fontSize: 38,
            lineHeight: 1.5,
            color: C.creamDim,
          }}
        >
          Hommes, femmes et enfants — en petit groupe ou en individuel, avec des
          enseignants qualifiés et bienveillants.
        </p>
      </Frame>
    </AbsoluteFill>
  );
};
