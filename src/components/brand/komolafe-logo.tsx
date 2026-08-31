import Link from "next/link";
import "./komolafe-logo.css";

type KomolafeLogoProps = {
  href?: string;
  className?: string;
  animated?: boolean;
  compact?: boolean;
};

export function KomolafeLogo({
  href = "/",
  className = "",
  animated = true,
  compact = false,
}: KomolafeLogoProps) {
  const logo = (
    <svg
      className={[
        "komolafe-logo",
        animated ? "is-animated" : "",
        compact ? "is-compact" : "",
        className,
      ].filter(Boolean).join(" ")}
      viewBox="0 0 920 220"
      role="img"
      aria-labelledby="komolafe-logo-title komolafe-logo-desc"
    >
      <title id="komolafe-logo-title">KOMOLAFE</title>
      <desc id="komolafe-logo-desc">
        KOMOLAFE geometric wordmark with an emerald orbital signature.
      </desc>

      <g className="komolafe-logo__letters">
        <path d="M42 68h18v84H42z"/>
        <path d="M57 108 91 68h23L77 111l39 41H91L57 116z"/>
        <path className="komolafe-logo__accent" d="M77 68h28l-13 14H64z"/>

        <path fillRule="evenodd" d="M158 66c-28 0-48 18-48 44s20 44 48 44 48-18 48-44-20-44-48-44Zm0 16c18 0 30 11 30 28s-12 28-30 28-30-11-30-28 12-28 30-28Z"/>
        <rect className="komolafe-logo__cut" x="153" y="64" width="10" height="19"/>
        <rect className="komolafe-logo__cut" x="153" y="137" width="10" height="19"/>
        <path className="komolafe-logo__accent" d="M163 66c8 1 14 3 20 7l-7 13c-4-2-8-3-13-4z"/>

        <path d="M234 68h18l30 38 30-38h18v84h-18V94l-30 37-30-37v58h-18z"/>
        <path className="komolafe-logo__accent" d="M271 91h22l-11 14z"/>

        <path fillRule="evenodd" d="M400 66c-28 0-48 18-48 44s20 44 48 44 48-18 48-44-20-44-48-44Zm0 16c18 0 30 11 30 28s-12 28-30 28-30-11-30-28 12-28 30-28Z"/>
        <rect className="komolafe-logo__cut" x="395" y="64" width="10" height="19"/>
        <rect className="komolafe-logo__cut" x="395" y="137" width="10" height="19"/>
        <path className="komolafe-logo__accent" d="M405 66c8 1 14 3 20 7l-7 13c-4-2-8-3-13-4z"/>

        <path d="M476 68h18v68h49v16h-67z"/>
        <path className="komolafe-logo__accent" d="M509 136h34v16h-49z"/>

        <path d="M597 66h17l42 86h-21l-29-61-29 61h-21z"/>
        <path className="komolafe-logo__accent" d="m597 133 9-19 9 19z"/>

        <path d="M690 68h67v16h-49v18h40v16h-40v34h-18z"/>
        <rect className="komolafe-logo__accent" x="708" y="102" width="40" height="16"/>

        <path d="M787 68h70v16h-52v18h45v16h-45v18h52v16h-70z"/>
        <rect className="komolafe-logo__accent" x="805" y="102" width="45" height="16"/>
      </g>

      <g className="komolafe-logo__orbit" aria-hidden="true">
        <path
          className="komolafe-logo__orbit-path"
          d="M91 151C118 183 195 177 246 131C280 101 293 65 274 52C257 41 230 49 207 63"
        />
        <circle className="komolafe-logo__orbit-dot" cx="248" cy="48" r="7"/>
      </g>
    </svg>
  );

  return (
    <Link
      className="komolafe-logo-link"
      href={href}
      aria-label="KOMOLAFE — Home"
    >
      {logo}
    </Link>
  );
}
