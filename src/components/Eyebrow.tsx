import React from 'react';

interface EyebrowProps {
  index: string;
  label: string;
  /** Contact section omits the trailing hairline. */
  line?: boolean;
}

/** Section header: mono index + uppercase label + hairline. */
const Eyebrow: React.FC<EyebrowProps> = ({ index, label, line = true }) => (
  <div className="eyebrow">
    <span className="eyebrow__index">{index}</span>
    <span className="eyebrow__label">{label}</span>
    {line && <span className="eyebrow__line" />}
  </div>
);

export default Eyebrow;
