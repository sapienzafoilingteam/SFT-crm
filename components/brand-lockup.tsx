/** Same symbol, proportions and equal-width wordmark as the public website footer. */
export function BrandLockup() {
  return <span className="sft-brand-lockup" aria-hidden="true">
    <img className="sft-brand-symbol" src="/brand/sft-burgundy.svg" alt="" width={36} height={48} />
    <svg className="sft-brand-wordmark" viewBox="0 0 156 48">
      <text x="0" y="21" textLength="156" lengthAdjust="spacingAndGlyphs">SAPIENZA</text>
      <text x="0" y="46" textLength="156" lengthAdjust="spacingAndGlyphs">FOILING TEAM</text>
    </svg>
  </span>;
}
