type IconName =
  | "cap"
  | "target"
  | "clock"
  | "chat"
  | "whatsapp"
  | "phone"
  | "check"
  | "star"
  | "arrow"
  | "users"
  | "person"
  | "play"
  | "plus"
  | "menu"
  | "close";


const paths: Record<IconName, React.ReactNode> = {
  cap: (
    <>
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 11.7V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.3" />
      <path d="M21 9.8V14" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M20 12.5c0 3.9-3.6 7-8 7-1 0-2-.2-2.9-.5L4.5 20.5l1.2-3.4A6.6 6.6 0 0 1 4 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7Z" />
      <path d="M9 12h.01M12 12h.01M15 12h.01" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.2 12.1c0 4.5-3.7 8.1-8.2 8.1-1.4 0-2.8-.4-4-1L3.5 20.6l1.4-4.3a8 8 0 0 1-1.1-4.2C3.8 7.6 7.5 4 12 4s8.2 3.6 8.2 8.1Z" />
      <path d="M9.3 8.9c.3 0 .5.2.6.4l.6 1.3c.1.3 0 .5-.2.7l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.2-.2.4-.3.7-.2l1.3.6c.2.1.4.3.4.6 0 1-.9 1.6-1.8 1.5-2.6-.3-5-2.7-5.3-5.3 0-.9.5-1.7 1.4-1.9Z" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a1 1 0 0 1-1.1 1c-4.7-.5-9-2.4-12.4-5.8S2.6 9.2 2.1 4.5A1 1 0 0 1 3.1 3.4h3a1 1 0 0 1 1 .8c.2 1.5.7 2.9 1.4 4.2a1 1 0 0 1-.2 1.2l-1.9 1.9a16 16 0 0 0 6 6l1.9-1.9a1 1 0 0 1 1.2-.2c1.3.7 2.7 1.2 4.2 1.4a1 1 0 0 1 .8 1Z" />
  ),

  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  star: (
    <path d="M12 3.8l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8L12 3.8Z" />
  ),
  arrow: <path d="M5 12h13m-5.5-5.5L18 12l-5.5 5.5" />,
  users: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5" />
      <path d="M16 7.2a3 3 0 0 1 0 5.6M17.5 19c0-2 .8-3.6 2.5-4.4" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5.5 19.5c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.5 9.2l4.5 2.8-4.5 2.8V9.2Z" />
    </>
  ),
  plus: <path d="M12 6v12M6 12h12" />,
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M18 6 6 18M6 6l12 12" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.5,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
