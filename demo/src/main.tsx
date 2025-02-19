import React from 'react';
import ReactDOM from 'react-dom/client';
import { OperatingSystem, useOS } from '@prozilla-os/core';
import { defaultSkin } from '@prozilla-os/skins';
import { academyApps } from './config/apps';

// Styles
import '@prozilla-os/core/styles.css';
import './styles/index.css';

// Import des applications GAA
import { academyConfig } from './config';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <OperatingSystem
        config={academyConfig}
        apps={academyApps}
        defaultSkin={defaultSkin}
      />
    </React.StrictMode>
  );
}