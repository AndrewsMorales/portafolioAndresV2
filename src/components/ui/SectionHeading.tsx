import type { ReactNode } from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}

export function SectionHeading({ kicker, title, lead, children }: SectionHeadingProps) {
  return (
    <header className="heading reveal">
      <p className="heading__kicker">
        <span className="heading__dot" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className="heading__title">{title}</h2>
      {lead && <p className="heading__lead">{lead}</p>}
      {children}
    </header>
  );
}
