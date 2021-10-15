// The game config that is used by Phaser
const phaserConfig = {
    type: Phaser.AUTO,
    parent: "game",
    width: 400,
    height: 200,
    backgroundColor: "#000000",
        physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [ DefaultMap ]
};
            const game = new Phaser.Game(phaserConfig);
