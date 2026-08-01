import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { PersistentBackground } from "./components/PersistentBackground";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import { Scene5 } from "./scenes/Scene5";
import { Scene6 } from "./scenes/Scene6";
import { Scene7 } from "./scenes/Scene7";

const DURATIONS = [110, 150, 175, 180, 165, 180, 190];
const TRANSITION = 22;
export const TOTAL_FRAMES =
  DURATIONS.reduce((a, b) => a + b, 0) - TRANSITION * (DURATIONS.length - 1);

const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7];

export const MainVideo: React.FC = () => (
  <AbsoluteFill>
    <PersistentBackground />
    <TransitionSeries>
      {SCENES.flatMap((Scene, i) => {
        const nodes = [
          <TransitionSeries.Sequence key={`s${i}`} durationInFrames={DURATIONS[i]}>
            <Scene />
          </TransitionSeries.Sequence>,
        ];
        if (i < SCENES.length - 1) {
          nodes.push(
            <TransitionSeries.Transition
              key={`t${i}`}
              presentation={
                i % 2 === 0 ? wipe({ direction: "from-bottom" }) : fade()
              }
              timing={
                i % 2 === 0
                  ? springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION })
                  : linearTiming({ durationInFrames: TRANSITION })
              }
            />,
          );
        }
        return nodes;
      })}
    </TransitionSeries>
  </AbsoluteFill>
);
