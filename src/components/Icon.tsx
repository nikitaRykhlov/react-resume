import React from 'react';
import type { IconId } from '../i18n/content';

interface IconProps {
  id: IconId;
  size?: number;
  className?: string;
}

/** References a symbol from the inline sprite (see IconSprite). */
const Icon: React.FC<IconProps> = ({ id, size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={{ display: 'block' }} aria-hidden="true">
    <use href={`#icon-${id}`} />
  </svg>
);

export default Icon;
