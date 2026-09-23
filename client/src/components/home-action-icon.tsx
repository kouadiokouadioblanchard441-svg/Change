export type HomeActionKind = "deposit" | "withdrawal" | "support" | "checkin";

export default function HomeActionIcon({ kind }: { kind: HomeActionKind }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="#25272a"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "deposit" && (
        <>
          <rect x="8" y="26" width="32" height="15" rx="3" />
          <path d="M8 32h32" />
          <path d="M24 7v15m-6-6 6 6 6-6" stroke="#FF7A14" />
        </>
      )}
      {kind === "withdrawal" && (
        <>
          <rect x="7" y="15" width="34" height="27" rx="4" />
          <path d="M7 22h34M13 15v-4a4 4 0 0 1 4-4h18" />
          <path d="M31 31h11m-4-4 4 4-4 4" stroke="#FF7A14" />
        </>
      )}
      {kind === "support" && (
        <>
          <path d="M8 26v-3a16 16 0 0 1 32 0v3" />
          <rect x="6" y="25" width="8" height="12" rx="3" />
          <rect x="34" y="25" width="8" height="12" rx="3" />
          <path d="M40 36c0 5-4 8-11 8h-2" stroke="#FF7A14" />
          <rect x="21" y="41" width="7" height="5" rx="2" fill="#FF7A14" stroke="none" />
        </>
      )}
      {kind === "checkin" && (
        <>
          <rect x="8" y="11" width="32" height="31" rx="4" />
          <path d="M8 20h32M16 7v8M32 7v8" />
          <path d="m16 31 6 6 11-12" stroke="#FF7A14" />
        </>
      )}
    </svg>
  );
}