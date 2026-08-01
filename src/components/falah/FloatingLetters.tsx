const LETTERS = [
  { char: "ا", left: "6%", size: "5rem", delay: "0s", duration: "26s", tone: "gold" },
  { char: "ب", left: "18%", size: "3.5rem", delay: "5s", duration: "34s", tone: "navy" },
  { char: "ج", left: "31%", size: "6rem", delay: "11s", duration: "30s", tone: "emerald" },
  { char: "د", left: "44%", size: "4rem", delay: "2s", duration: "38s", tone: "gold" },
  { char: "ر", left: "57%", size: "5.5rem", delay: "16s", duration: "28s", tone: "navy" },
  { char: "س", left: "69%", size: "4.5rem", delay: "8s", duration: "36s", tone: "emerald" },
  { char: "ع", left: "81%", size: "6.5rem", delay: "20s", duration: "32s", tone: "gold" },
  { char: "م", left: "92%", size: "3.75rem", delay: "13s", duration: "40s", tone: "navy" },
  { char: "ن", left: "12%", size: "4.25rem", delay: "24s", duration: "42s", tone: "emerald" },
  { char: "ه", left: "63%", size: "3.25rem", delay: "29s", duration: "44s", tone: "gold" },
];

const TONE_CLASS: Record<string, string> = {
  gold: "text-gold/25",
  navy: "text-primary/15",
  emerald: "text-emerald/20",
};

export function FloatingLetters() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {LETTERS.map((l, i) => (
        <span
          key={`${l.char}-${i}`}
          className={`float-letter font-display select-none ${TONE_CLASS[l.tone]}`}
          style={{
            left: l.left,
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
