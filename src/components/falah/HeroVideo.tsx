import { useRef, useState } from "react";
import videoAsset from "@/assets/falah-presentation.mp4.asset.json";
import poster from "@/assets/video-poster.jpg";
import { Icon } from "./Icon";

/**
 * Vidéo de présentation (motion design, sans personnes).
 * Chargement différé : le fichier n'est téléchargé qu'au clic sur « Lire ».
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    requestAnimationFrame(() => void ref.current?.play());
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary shadow-card">
      <video
        ref={ref}
        className="h-[22rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        muted
        loop
        aria-label="Vidéo de présentation de Falah Institut"
      >
        <source src={videoAsset.url} type="video/mp4" />
      </video>

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label="Lire la vidéo de présentation"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-primary/25 transition-colors duration-300 hover:bg-primary/15"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/60 bg-card/90 shadow-lift transition-transform duration-300 group-hover:scale-105">
            <Icon name="play" className="ml-1 h-8 w-8 text-gold" filled strokeWidth={1} />
          </span>
          <span className="rounded-full border border-gold/40 bg-card/85 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary backdrop-blur-sm sm:text-sm">
            Découvrir Falah Institut — 35 s
          </span>
        </button>
      )}

      {!started && (
        <div className="pointer-events-none absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card/85 p-4 backdrop-blur-md">
          {[
            { k: "6", v: "élèves max / groupe" },
            { k: "7j/7", v: "de 9h à 21h" },
            { k: "0€", v: "évaluation de niveau" },
          ].map((s) => (
            <div key={s.k} className="min-w-0 text-center">
              <p className="font-display text-lg font-semibold text-primary sm:text-2xl">
                {s.k}
              </p>
              <p className="mt-1 text-[0.68rem] leading-snug text-muted-foreground sm:text-xs">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
