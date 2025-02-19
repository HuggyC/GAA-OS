import type { Config } from '@prozilla-os/core';

export const academyConfig: Config = {
  name: 'GENERATIVE AI ACADEMY',
  version: '1.0.0',
  author: {
    name: 'GENERATIVE AI ACADEMY',
    url: 'https://generative-ai.academy'
  },
  window: {
    titlebar: {
      buttons: ['minimize', 'maximize', 'close']
    }
  },
  desktop: {
    contextMenu: true,
    taskbar: {
      position: 'bottom',
      startMenu: true,
      quickLaunch: true,
      windowList: true,
      systemTray: true,
      clock: true
    }
  },
  filesystem: {
    desktop: {
      path: '/desktop',
      showIcons: true
    },
    documents: {
      path: '/documents'
    }
  }
};