#import "Screen.js";
#import "env.js";




test("Проверяю что ватермарка есть на экране и нажму на нее", function(){

     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     window.buttons()["DON'T CROP"].tap();
     
     target.delay(2);
     if(window.images()["watermark1-small.png"].checkIsValid()){

     	 target.delay(2);
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     window.buttons()["icon back"].tap();
     target.delay(1);
     }
     else{
        log("There is no Watermark");
     	throw new Error;
     }
    




})