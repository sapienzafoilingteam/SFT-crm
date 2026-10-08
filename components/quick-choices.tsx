'use client';
export function QuickChoices({ label, value, options, onChange, disabled = false }: {
  label: string; value: string; options: { value: string; label: string }[]; onChange: (value: string) => void; disabled?: boolean;
}) {
  return <fieldset className="quick-choices"><legend className="field-label">{label}</legend><div role="group" aria-label={label}>{options.map(option => <button type="button" key={option.value} disabled={disabled} aria-pressed={value === option.value} data-tone={['Firmato','Attivo','Concluso','Consegnato / Pubblicato'].includes(option.value) ? 'done' : ['Annullato','Sospeso','Non concluso'].includes(option.value) ? 'stopped' : 'active'} onClick={() => { if (value !== option.value) onChange(option.value); }}>{option.label}</button>)}</div></fieldset>;
}
