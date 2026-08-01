import { AbsoluteFill } from "remotion";
import { C, body, display } from "../theme";
import { Card, Eyebrow, Frame, Title } from "../components/Kit";

export const Scene4: React.FC = () => (
  <AbsoluteFill>
    <Frame>
      <Eyebrow>Deux formats</Eyebrow>
      <Title size={80}>Collectif ou individuel</Title>
      <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
        <div style={{ flex: 1 }}>
          <Card delay={14} accent={C.emerald}>
            <span style={{ fontFamily: body, fontSize: 26, letterSpacing: 4, color: C.emerald, textTransform: "uppercase" }}>
              Collectif
            </span>
            <span style={{ fontFamily: display, fontSize: 44, fontWeight: 600, color: C.cream }}>
              6 élèves max
            </span>
            <span style={{ fontFamily: body, fontSize: 28, color: C.creamDim }}>
              Émulation du groupe, tarif doux
            </span>
          </Card>
        </div>
        <div style={{ flex: 1 }}>
          <Card delay={26} accent={C.gold}>
            <span style={{ fontFamily: body, fontSize: 26, letterSpacing: 4, color: C.gold, textTransform: "uppercase" }}>
              Individuel
            </span>
            <span style={{ fontFamily: display, fontSize: 44, fontWeight: 600, color: C.cream }}>
              100 % sur mesure
            </span>
            <span style={{ fontFamily: body, fontSize: 28, color: C.creamDim }}>
              Horaires et rythme au choix
            </span>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <Card delay={40} accent={C.gold}>
          <span style={{ fontFamily: display, fontSize: 46, fontWeight: 600, color: C.gold }}>
            −50 % sur votre 1er mois
          </span>
          <span style={{ fontFamily: body, fontSize: 28, color: C.creamDim }}>
            Évaluation de niveau offerte — 15 minutes
          </span>
        </Card>
      </div>
    </Frame>
  </AbsoluteFill>
);
