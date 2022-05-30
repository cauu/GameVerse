import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

import logoImg from '../assets/logo.png';

export const Game = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: function () {
          this.load.image('logo', logoImg);
        },
        create: function () {
          const logo = this.add.image(400, 150, 'logo');
        },
        update: () => {}
      }
    };
    const game = new Phaser.Game(config);
  }, []);
  return (
    <div>
    </div>
  );
};