import { AbsoluteFill } from "remotion";
import { C, body, display } from "../theme";
import { Card, Eyebrow, Frame, Title } from "../components/Kit";

const ITEMS = [
  { t: "Langue arabe", d: "Lecture, grammaire, expression", a: C.gold },
  { t: "Coran & Tajwîd", d: "Mémorisation et récitation", a: C.emerald },
  { t: "Sciences islamiques", d: "Croyance, fiqh, sîra", a: C.gold },
];

export const Scene3: React.FC = () => (
  <AbsoluteFill>
    <Frame>
      <Eyebrow>Nos cursus</Eyebrow>
      <Title size={80}>Trois parcours structurés</Title>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 10 }}>
        {ITEMS.map((it, i) => (
          <Card key={it.t} delay={16 + i * 11} accent={it.a}>
            <span style={{ fontFamily: display, fontSize: 46, fontWeight: 600, color: C.cream }}>
              {it.t}
            </span>
            <span style={{ fontFamily: body, fontSize: 30, color: C.creamDim }}>{it.d}</span>
          </Card>
        ))}
      </div>
    </Frame>
  </AbsoluteFill>
);
