/*global Phaser*/

//When page has loaded, create this game config. 
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    
    scene: MIGame.scenes 
    
}; 

//Instantiate the game with the config. 
var game = new Phaser.Game(config); 