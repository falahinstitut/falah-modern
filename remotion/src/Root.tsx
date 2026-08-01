import { Composition } from "remotion";
import { MainVideo, TOTAL_FRAMES } from "./MainVideo";
import { SocialAd, SOCIAL_TOTAL_FRAMES } from "./SocialAd";

export const RemotionRoot = () => (
  <>
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={30}
      width={1080}
      height={1350}
    />
    <Composition
      id="social-ad"
      component={SocialAd}
      durationInFrames={SOCIAL_TOTAL_FRAMES}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);

