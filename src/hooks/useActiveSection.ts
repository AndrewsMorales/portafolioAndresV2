import { useEffect, useState } from 'react';

/**
 * Devuelve el id de la sección visible, para resaltar el enlace del menú.
 * Elige la sección cuyo borde superior esté más cerca de la línea de lectura.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const readLine = () => window.innerHeight * 0.32;

    const update = () => {
      let current = ids[0] ?? '';
      let best = Number.NEGATIVE_INFINITY;

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const top = element.getBoundingClientRect().top - readLine();
        if (top <= 0 && top > best) {
          best = top;
          current = id;
        }
      });

      // Al final del documento marca siempre la última sección.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 24;
      if (atBottom) current = ids[ids.length - 1] ?? current;

      setActive(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return active;
}
