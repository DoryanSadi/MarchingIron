WebFontConfig = {
    google: {
        families: ['Allerta Stencil']
    }
};

var Button;

/**
    Menu is loaded up before the games start 
*/
var InitialMenu = new Phaser.Class({
    // Defining scene
    Extends: Phaser.Scene,
    initialize: function MainMenu() {
        Phaser.Scene.call(this, {
            key: 'MainMenu'
        });
    },



    preload: function () {
        // Preloading Google WebFont Loader
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js')
    },

    create: function () {

        var selectOption = game.add.text(80, 200, 'Marching Iron \n' +
            ' Play \n' +
            ' Options \n' +
            ' Quit ', {
                font: '25px Allerta Stencil',
                fill: '#FFFFFF'
            })

        Button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

        var leftClick = this.game.input.mousePointer.leftButton;


      
        game.scene.start('Game');

    },

    update: function () {
        //Objects and variables are updated 

    }

});
