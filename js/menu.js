var Menu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Menu" });
    },
    init: function() {},
    preload: function() {},
    create: function() {
    var button = this.add.text(0, 0, 'Repository', {fill: '#0f0'}).setInteractive();

    button.on('pointerup', openExternalLink, this);

    this.add.text(300, 60, 'That New Platformer Game', {fill: '#0f0'})
    this.add.text(300, 90, 'A Game Made By Grant M', {fill: '#0f0'})

    this.clickButton = this.add.text(260, 150, 'Original Map', { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.stop(),this.scene.start("DefaultMap") )
    this.clickMap2 = this.add.text(310, 200, "GrantM's Map", { fill: '#0f0'})
     .setInteractive()
     .on('pointerdown', () => this.scene.start("SecMap") )
    },
    update: function() {
    
    }
});
var reset = 0; 
function resetScore(){
localStorage.setItem('score',reset);
localStorage.setItem('level',reset);
localStorage.setItem('progress',reset);
localStorage.setItem('progressl',reset);
localStorage.setItem('increase',reset);
console.log('Player/User Score Succsessfully Reset');
alert("Successfully reset score!");
};
function openExternalLink ()
{
    var url = 'https://github.com/Grantrocks/That-New-Platformer-Game';

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}
