import React from 'react';
import Phaser from 'phaser';

import logoImg from '../assets/logo.png';

export class Game extends React.Component {
  config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    scene: {
      preload: this.onPreload, 
      create: this.onCreate,
      update: this.onUpdate
    }
  };

  onPreload () {
    const _instance: Phaser.Scene = this as any;
    _instance.load.image('logo', logoImg);
  }

  onCreate () {
    const _instance: Phaser.Scene = this as any;
    _instance.add.image(400, 150, 'logo');
  }

  onUpdate () {
    // Update
  }

  componentDidMount () {
    new Phaser.Game(this.config);
  }

  render () {
    return (
      <div id="game" />
    );
  }
}