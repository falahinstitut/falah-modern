import { useState } from "react";
import { Icon } from "./Icon";

export function LazyVideo({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Lire la vidéo : ${title}`}
      className="group relative h-full w-full overflow-hidden bg-secondary"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/oardefault.jpg`}
        onError={(e) => {
          const img = e.currentTarget;
          const step = img.dataset['fallback'];
          if (!step) {
            img.dataset['fallback'] = "1";
            img.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
          } else if (step === "1") {
            img.dataset['fallback'] = "2";
            img.src = `https://i.ytimg.com/vi/${id}/sddefault.jpg`;
          }
        }}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <span className="absolute inset-0 bg-primary/25 transition-colors duration-300 group-hover:bg-primary/10" />
      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card/95 text-primary shadow-lift transition-transform duration-300 group-hover:scale-110">
        <Icon name="play" className="h-6 w-6" />
      </span>
    </button>
  );
}
