import React from 'react';
import type { Content } from '../i18n/content';
import Icon from './Icon';
import { scrollToTop } from '../lib/scroll';

const Footer: React.FC<{ t: Content }> = ({ t }) => (
  <footer className="footer">
    <div className="footer__left">{t.footer.left}</div>
    <button className="back-to-top" onClick={scrollToTop}>
      {t.footer.backToTop}
      <Icon id="down" size={14} />
    </button>
  </footer>
);

export default Footer;
