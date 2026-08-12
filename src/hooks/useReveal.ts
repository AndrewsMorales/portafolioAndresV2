import { useEffect } from 'react';

/**
 * Muestra los elementos con clase `.reveal` cuando entran en pantalla.
 * Se vuelve a ejecutar cuando cambian las dependencias, para cubrir el
 * contenido que aparece al filtrar o cambiar de pestaña.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
    if (targets.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
