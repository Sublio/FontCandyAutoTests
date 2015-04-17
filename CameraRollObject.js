#import "Screen.js";
#import "env.js";



var CameraRollScreen = {

   inspiration : function(name){
   	     log("Нажмем inspiration кнопку")
   	     window.buttons()["Inspiration"].tap()
   },



   camera : function(name){

         log("Нажмем Camera кнопку")
         window.buttons()["Camera"].tap()


   },

    settings: function(name){
          
          log("Нажмем settings кнопку")
          window.buttons()["Settings"].tap()



    },

    chooseOnePic : function(position){


    	window.scrollViews()[0].collectionViews()[0].cells()[position].tap();
    },

    





};

//CameraRollScreen._proto_ = Screen;


