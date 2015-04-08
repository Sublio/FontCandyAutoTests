#import "Screen.js";
#import "env.js";




test("Проверяю что ватермарка есть на экране и нажму на нее", function(){

     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     window.buttons()["Skip"].tap();
     target.delay(2);
     window.buttons()["icon done"].tap();
     target.delay(2);
     window.images()["watermark1-small.png"].checkIsValid();
     target.delay(2);
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     window.buttons()["icon back"].tap();
     target.delay(1);




})