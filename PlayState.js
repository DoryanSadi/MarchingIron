WebFontConfig = {
    google: {
        families: ['Allerta Stencil']
    }
}; 

//Animation loop is executed in main state. 
var text = null; 

var operatingState = { 
    preload: function() {
        //Loading Google Webfont Loader script 
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }, 
    
    // All necessary game objects must be created. 
    
    create: function(){ 
    this.initialiseAudio();
    this.initialiseGameObjects();
    this.initialiseMap();
    this.createUI();
    this.createInput(); 
    this.createPauseMenu();
    this.setupGameTimer(); 
    
    
    },
    
    /*
    
    

}