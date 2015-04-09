#import "Screen.js";
#import "env.js";





     
     
     
     
     
     
     
     //Iphone
     
     
     test ("Проверяю что можно загрузить картинку в качестве цвета текста", function(){
           target.delay(2);
           window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
           target.delay(2);
           window.buttons()["DON'T CROP"].tap();
           //target.frontMostApp().mainWindow().logElementTree();
           
           target.delay(2);
           window.buttons()["Color"].tap();
           target.delay(2);
           window.collectionViews()[0].cells()["icon_gallery"].tap();
           target.delay(2);
           //target.frontMostApp().mainWindow().logElementTree();
           target.delay(2);
           window.collectionViews()[0].cells()[1].tap();
           target.delay(4);
           window.sliders()[1].dragToValue(0.00);
           
           
           });
     

















