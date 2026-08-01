const LETTERS = [
  { char: "ا", left: "4%", top: "16%", size: "4.5rem", delay: "-1s", duration: "8s", tone: "gold" },
  { char: "ب", left: "84%", top: "24%", size: "3.5rem", delay: "-4s", duration: "10s", tone: "navy" },
  { char: "ج", left: "12%", top: "40%", size: "5rem", delay: "-6s", duration: "11s", tone: "emerald" },
  { char: "د", left: "72%", top: "52%", size: "4rem", delay: "-2s", duration: "9s", tone: "gold" },
  { char: "ر", left: "42%", top: "68%", size: "5rem", delay: "-7s", duration: "12s", tone: "navy" },
  { char: "س", left: "88%", top: "76%", size: "4.5rem", delay: "-3s", duration: "10s", tone: "emerald" },
  { char: "ع", left: "24%", top: "84%", size: "5.5rem", delay: "-8s", duration: "13s", tone: "gold" },
  { char: "م", left: "60%", top: "32%", size: "3.75rem", delay: "-5s", duration: "9s", tone: "navy" },
];

const TONE_CLASS: Record<string, string> = {
  gold: "text-gold/55",
  navy: "text-primary/35",
  emerald: "text-emerald/45",
};

export function FloatingLetters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
    >
      {LETTERS.map((l, i) => (
        <span
          key={`${l.char}-${i}`}
          className={`float-letter font-display select-none ${TONE_CLASS[l.tone]}`}
          style={{
            left: l.left,
            top: l.top,
            fontSize: l.size,
            animationDelay: l.delay,
            animationDuration: l.duration,
          }}
        >
          {l.char}
        </span>
      ))}
    </div>
  );
}
