import { useEffect, useState } from 'react';
import { useApp } from '../../state/useApp';
import { Icon } from './Icon';

export function BackToTop() {
  const { t } = useApp();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`toTop${visible ? ' is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('a11y.top')}
      title={t('a11y.top')}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrowUp" size={18} />
    </button>
  );
}
