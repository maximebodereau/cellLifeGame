// Create our only scene called mainScene, in the game.js file
class mainScene {
    // The 3 methods currenlty empty

    preload() {
        // This method is called once at the beginning
        // It will load all the assets, like sprites and sounds  
        // Parameters: name of the sprite, path of the image
        this.load.image('player', 'assets/bird.png');
        this.load.image('coin', 'assets/pipe.png');
    }
    create() {
        // This method is called once, just after preload()
        // It will initialize our scene, like the positions of the sprites
        // Parameters: x position, y position, name of the sprite
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.coin = this.physics.add.sprite(300, 300, 'coin');

        // Store the score in a variable, initialized at 0
        this.score = 0;
        let style = { font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    }
    update() {
        // This method is called 60 times per second after create() 
        // It will handle all the game's logic, like movements
    }
}
new Phaser.Game({
    width: window.screen.width, // Width of the game in pixels
    height: window.screen.height, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
});