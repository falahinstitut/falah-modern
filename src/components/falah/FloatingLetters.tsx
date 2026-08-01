import { useEffect, useRef } from "react";

const LETTERS = [
  { char: "ا", left: "6%", top: "18%", size: "1.75rem", delay: "-1s", duration: "10s", tone: "gold", speed: 0.35 },
  { char: "ب", left: "88%", top: "26%", size: "1.5rem", delay: "-4s", duration: "12s", tone: "navy", speed: 0.6 },
  { char: "ج", left: "14%", top: "42%", size: "2rem", delay: "-6s", duration: "13s", tone: "emerald", speed: 0.45 },
  { char: "د", left: "74%", top: "54%", size: "1.6rem", delay: "-2s", duration: "11s", tone: "gold", speed: 0.7 },
  { char: "ر", left: "44%", top: "70%", size: "2rem", delay: "-7s", duration: "14s", tone: "navy", speed: 0.3 },
  { char: "س", left: "90%", top: "78%", size: "1.75rem", delay: "-3s", duration: "12s", tone: "emerald", speed: 0.55 },
  { char: "ع", left: "26%", top: "86%", size: "2.25rem", delay: "-8s", duration: "15s", tone: "gold", speed: 0.4 },
  { char: "م", left: "62%", top: "34%", size: "1.6rem", delay: "-5s", duration: "11s", tone: "navy", speed: 0.65 },
];

const TONE_CLASS: Record<string, string> = {
  gold: "text-gold/60",
  navy: "text-primary/45",
  emerald: "text-emerald/50",
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
            className={`float-letter font-display font-thin select-none ${TONE_CLASS[l.tone]}`}
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
