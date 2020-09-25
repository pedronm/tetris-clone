import Phaser from 'phaser';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
// Temporizador que vai se incrementando conforme os blocos que se encaixam
var timer;
var score; 

var game = new Phaser.Game(config);


function preload ()
{
    this.load.image('bg', 'assets/bg-default.png');
    this.load.spritesheet('tile', 'assets/tetris-tile.png', { frameWidth: 32, frameHeight: 48 });

}

function update () {
    // Plano de fundo
    this.add.image(400, 300, 'bg');

}

function create ()
{
    player = this.physics.add.sprite(100, 0, 'tile');

    // Adiciona limites as peças do jogo
    // Falta delimitar, mas acho que se eu usar o 
    // player.setCollideWorldBounds(true); já basta
    // A não ser que eu queira aplicar algum outro ocmportaemnto.
    var outerBounds = this.physics.add.staticGroup();

}
