import React, { useEffect, useRef } from 'react'
import Phaser from 'phaser'

import logoImg from '../assets/logo.png'

export const Game = () => {
  useEffect(() => {
    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: function () {
          this.load.image("logo", logoImg);
        },
        create: function () {
          const logo = this.add.image(400, 150, "logo");
        },
        update: () => {}
      }
    };
    var game = new Phaser.Game(config);
  }, [])
  return (
    <div>
    </div>
  )
}