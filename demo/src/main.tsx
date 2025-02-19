import React from 'react';
import ReactDOM from 'react-dom/client';
import { Desktop } from '@prozilla-os/core';

import '@prozilla-os/core/dist/style.css';
import '@prozilla-os/skins/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>
);