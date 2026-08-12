import type { DictKey } from '../../i18n/types';
import type { Focus } from '../../state/context';
import { useApp } from '../../state/useApp';
import './FocusSwitch.css';

const OPTIONS: { value: Focus; labelKey: DictKey }[] = [
  { value: 'full', labelKey: 'focus.full' },
  { value: 'backend', labelKey: 'focus.backend' },
  { value: 'frontend', labelKey: 'focus.frontend' },
];

interface FocusSwitchProps {
  /** `hero` es la versión grande con etiqueta; `inline` la compacta. */
  variant?: 'hero' | 'inline';
}

export function FocusSwitch({ variant = 'hero' }: FocusSwitchProps) {
  const { focus, setFocus, t } = useApp();

  return (
    <div className={`focus focus--${variant}`}>
      {variant === 'hero' && <span className="focus__label">{t('focus.label')}</span>}
      <div className="focus__track" role="tablist" aria-label={t('focus.label')}>
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={focus === option.value}
            className={`focus__option${focus === option.value ? ' is-active' : ''}`}
            onClick={() => setFocus(option.value)}
          >
            {t(option.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
}
