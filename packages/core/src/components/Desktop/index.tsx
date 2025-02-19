import React from 'react';
import { Desktop as ProzillaDesktop } from '@prozilla-os/core';

export const Desktop: React.FC = () => {
  return (
    <ProzillaDesktop
      className="gaa-desktop"
      wallpaper="/assets/wallpaper.jpg"
    />
  );
};