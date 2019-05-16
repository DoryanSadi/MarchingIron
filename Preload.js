var createState = {

    preload: function () {
        // Assets preloaded for the game. 



        /*sound*/
        game.load.audio('Intro Music', 'Assets/Music/mm_intro.wav');
        game.load.audio('Battle Sound 1', 'Assets/Music/battleSound1.wav');
        game.load.audio('Battle Sound 2', 'Assets/Music/battleSound2.wav');
        game.load.audio('Battle Sound 3', 'Assets/Music/battleSound3.wav');
        game.load.audio('Battle Sound 4', 'Assets/Music/battleSound4.wav');
        game.load.audio('Battle Sound 5', 'Assets/Music/battleSound5.wav');
        game.load.audio('Marching Sound', 'Assets/Music/marchingSound1.wav');
        game.load.audio('Spawn Sound', 'Assets/Music/spawnSound1.wav');

        /*sprites files*/
        game.load.image('Boots', 'Assets/Pictures/basicBoots.png');
        game.load.image('Enemy', 'Assets/Pictures/basicRed.png');
        game.load.image('Units', 'Assets/Pictures/basicBlue.png');
        game.load.image('Rifle', 'Assets/Pictures/basicRifle.png');


        /*Loading in Tilemap*/
        new Tilemap(Phaser.Game, 'Assets/Tilemaps/Map.json');

        /*Loading in needed physics*/
        game.physics.startSystem(Phaser.Physics.P2JS);



    },
    create: function () {

        var loadingGame = game.add.text(200, 200, 'Loading... ', {
            font: '25px Allerta Stencil',
            fill: '#FFFFFF'
        });

        game.state.start('MainMenu');

    },

    update: function () {
        //Objects and variables are updated 
    }

};
