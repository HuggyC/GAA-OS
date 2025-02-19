import type { DesktopConfig } from '@prozilla-os/core';

export const desktopConfig: DesktopConfig = {
  background: {
    type: 'gradient',
    colors: ['#a8c0ff', '#d6a4e7', '#fbc2eb'],
    angle: 140
  },
  icons: {
    size: {
      width: 48,
      height: 48
    },
    spacing: 16,
    layout: 'vertical',
    alignment: 'left',
    style: {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '8px'
    },
    label: {
      position: 'bottom',
      style: {
        color: 'white',
        fontSize: '14px',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
      }
    }
  },
  taskbar: {
    height: 48,
    background: 'rgba(33, 33, 33, 0.85)',
    blur: true,
    items: [
      {
        type: 'menu',
        icon: 'os-logo'
      },
      {
        type: 'search'
      },
      {
        type: 'apps'
      },
      {
        type: 'tray',
        items: ['wifi', 'volume', 'battery', 'clock']
      }
    ]
  }
};