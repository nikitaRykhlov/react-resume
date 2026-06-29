import React from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'h2';
};

/** Wrapper that fades + lifts its children in on scroll (see useReveal). */
const Reveal: React.FC<RevealProps> = ({ children, ...rest }) => {
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref} {...rest}>{children}</div>;
};

export default Reveal;
