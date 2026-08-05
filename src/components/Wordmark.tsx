type Props = {
  /** The country name that fills the blank. Omit for the bare wordmark. */
  destination?: string;
  accent?: string;
  accentInk?: string;
  className?: string;
  animate?: boolean;
};

/**
 * The brand device: TREATS FROM ____, where the blank is a stamped
 * destination. This is the single element the site is built around.
 */
export default function Wordmark({
  destination,
  accent,
  accentInk,
  className = "",
  animate = false,
}: Props) {
  return (
    <span className={`display ${className}`}>
      Treats From{" "}
      {destination ? (
        <span
          className={`stamp ${animate ? "stamp-in" : ""}`}
          style={
            accent
              ? ({
                  "--accent": accent,
                  "--accent-ink": accentInk ?? "#17150F",
                } as React.CSSProperties)
              : undefined
          }
        >
          {destination}
        </span>
      ) : null}
    </span>
  );
}
