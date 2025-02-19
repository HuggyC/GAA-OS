import React from 'react';
import { OperatingSystem, useOS } from '@prozilla-os/core';
import { DesktopIcon } from './components/DesktopIcon';
import { academyApps } from './config/apps';
import { desktopConfig } from './config/desktop';

const App = () => {
  const { theme, openWindow } = useOS();

  return (
    <div className="app" style={{ background: theme.background }}>
      <div className="desktop-icons">
        {academyApps.map(app => (
          <DesktopIcon
            key={app.id}
            icon={app.icon}
            label={app.name}
            onClick={() => openWindow(app.id)}
          />
        ))}
      </div>

      <OperatingSystem
        desktop={desktopConfig}
        apps={academyApps}
        defaultLayout="desktop"
      />
    </div>
  );
};

export default App;