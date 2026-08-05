import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Trustpilot?: { loadFromElement: (el: HTMLElement, async?: boolean) => void };
  }
}

export function TrustpilotReviewCollector() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let tries = 0;
    const init = () => {
      if (window.Trustpilot) {
        window.Trustpilot.loadFromElement(el, true);
        return;
      }
      if (tries++ < 40) window.setTimeout(init, 250);
    };
    init();
  }, []);

  return (
    <div
      ref={ref}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6a726279701e0ea478ac0673"
      data-style-height="52px"
      data-style-width="100%"
      data-token="9368da21-cc08-4999-8e80-40b850e7181c"
    >
      <a
        href="https://www.trustpilot.com/review/falahinstitut.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        Trustpilot
      </a>
    </div>
  );
}
