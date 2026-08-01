import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";

const sora = loadSora("normal", { weights: ["400", "600", "700"], subsets: ["latin"] });
const manrope = loadManrope("normal", { weights: ["400", "600"], subsets: ["latin"] });

export const display = sora.fontFamily;
export const body = manrope.fontFamily;

export const C = {
  navy: "#1b2246",
  navyDeep: "#121935",
  navySoft: "#2b3564",
  cream: "#f8f7f3",
  creamDim: "#dcdbe6",
  gold: "#c8a44d",
  goldLight: "#e6cd8b",
  emerald: "#2f9c74",
};
