import { useEffect, useRef } from "react";

const LETTERS = [
  { char: "ا", left: "4%", top: "16%", size: "4.5rem", delay: "-1s", duration: "8s", tone: "gold", speed: 0.35 },
  { char: "ب", left: "84%", top: "24%", size: "3.5rem", delay: "-4s", duration: "10s", tone: "navy", speed: 0.6 },
  { char: "ج", left: "12%", top: "40%", size: "5rem", delay: "-6s", duration: "11s", tone: "emerald", speed: 0.45 },
  { char: "د", left: "72%", top: "52%", size: "4rem", delay: "-2s", duration: "9s", tone: "gold", speed: 0.7 },
  { char: "ر", left: "42%", top: "68%", size: "5rem", delay: "-7s", duration: "12s", tone: "navy", speed: 0.3 },
  { char: "س", left: "88%", top: "76%", size: "4.5rem", delay: "-3s", duration: "10s", tone: "emerald", speed: 0.55 },
  { char: "ع", left: "24%", top: "84%", size: "5.5rem", delay: "-8s", duration: "13s", tone: "gold", speed: 0.4 },
  { char: "م", left: "60%", top: "32%", size: "3.75rem", delay: "-5s", duration: "9s", tone: "navy", speed: 0.65 },
];

const TONE_CLASS: Record<string, string> = {
  gold: "text-gold/55",
  navy: "text-primary/35",
  emerald: "text-emerald/45",
};

export function FloatingLetters() {
  const wrappersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      wrappersRef.current.forEach((el, i) => {
        const speed = LETTERS[i]?.speed;
        if (!el || speed === undefined) return;
        el.style.transform = `translate3d(0, ${-y * speed}px, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {LETTERS.map((l, i) => (
        <span
          key={`${l.char}-${i}`}
          ref={(el) => {
            wrappersRef.current[i] = el;
          }}
          className="absolute will-change-transform"
          style={{ left: l.left, top: l.top }}
        >
          <span
            className={`float-letter font-display select-none ${TONE_CLASS[l.tone]}`}
            style={{
              left: 0,
              top: 0,
              fontSize: l.size,
              animationDelay: l.delay,
              animationDuration: l.duration,
            }}
          >
            {l.char}
          </span>
        </span>
      ))}
    </div>
  );
}
