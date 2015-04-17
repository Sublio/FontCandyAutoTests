#import "CameraRollObject.js";
#import "Screen.js";
#import "env.js";



var cropScreenObject = {

   backButton: function(name){


   	 window.buttons()["icon back"].tap();
   
   },

   
   doneButton: function(name){


   	window.buttons()["icon done"].tap();
   
   },


   oneByOneButton: function(name){


   	window.buttons()["1:1"].tap();
   }


   threeToFourButton: function(name){


   	window.buttons()["3:4"].tap();
   }

   dontCropButton: function(name){

   	window.buttons()["DON'T CROP"].tap();
   }



}