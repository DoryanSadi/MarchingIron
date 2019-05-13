class Scenes extends Phaser.Scene {
    constructor() {
        super({key:"Scenes"});
    }
    
    preload(){
        this.load.image('Map2', 'Assets/Pictures/Map_2.png');
    }
    
    create(){
        this.image = this.add.image(400,225,'Map2'); 
        this.imput.on('pointerdown', () =>this.scene.start('game'))
    }
}