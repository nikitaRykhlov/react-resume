import React from 'react';
import ReactDOM from 'react-dom/client';

// Design tokens. colors.css is imported LAST so its color value of --text-body
// wins over the same-named size token in typography.css.
import './styles/tokens/fonts.css';
import './styles/tokens/typography.css';
import './styles/tokens/spacing.css';
import './styles/tokens/shadows.css';
import './styles/tokens/colors.css';
import './index.scss';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
