var StatePreload = new Phaser.Class({
// Defining scene
    Extends: Phaser.Scene,
    initialize: 
    function Preload(){
        Phaser.Scene.call(this, {key: 'Preload'}); 
    }, 
    
    preload: function(){
    // Images preloaded for this state
    },
    
    create: function() { 
    console.log("Preload");
    game.scene.start('MainMenu');
    }, 
    
    update: function(){
        //Objects and variables are updated 
    }
    
});

//Adding my scene to list of scenes.
MIGame.scenes.push(StatePreload); 