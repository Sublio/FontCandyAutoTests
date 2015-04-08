#import "Screen.js";
#import "env.js";

//IPhone


test("Проверим все Dividers из первой категории по одному", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
     target.delay(6);
     window.buttons()["1:1"].tap();
     target.delay(2);
     window.buttons()["icon done"].tap();
     target.delay(4);
     window.buttons()["icon cross"].tap();
     
     target.delay(1)
     window.buttons()["Artwork"].tap();
     
     target.delay(1);
     
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     
     
     target.delay(1);
     
     UIATarget.localTarget().pushTimeout(0.1);
     
     log("Обходим каждый элемент из Dividers")
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
    }
     window.buttons()["icon back"].tap();
     target.delay(1);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     
     window.buttons()["icon back"].tap();
     target.delay(1);
     
     
     
     
     });



test("Проверим все Dividers из Shapes  категории по одному", function(){
     
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
     window.buttons()["Skip"].tap();
    
     target.delay(4);
     window.buttons()["icon cross"].tap();
     
     target.delay(2)
     window.buttons()["Artwork"].tap();
     
     target.delay(1);
     window.scrollViews()[0].collectionViews()[0].cells()[1].tap();
     UIATarget.localTarget().pushTimeout(0.1);
     
     
     target.delay(1);
     
     log("Обходим каждый элемент из Decorative")
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
     }
     
     window.buttons()["icon back"].tap();
     target.delay(1);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     
     window.buttons()["icon back"].tap();
     target.delay(1);     
     
     
     });



test("Проверим все Dividers из Banners категории по одному", function(){
 target.delay(2);
 window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
 window.buttons()["Skip"].tap();
 
 target.delay(4);
 window.buttons()["icon cross"].tap();
 
 target.delay(2)
 window.buttons()["Artwork"].tap();
 
 target.delay(1);
 window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
 UIATarget.localTarget().pushTimeout(0.1);
 
 
 target.delay(1);
 
 log("Обходим каждый элемент из Decorative")
 
 for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
 {
 
 var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
 window.scrollViews()[0].scrollToElementWithName(currentCell.name());
 
 currentCell.tap();
 
 }
 
 window.buttons()["icon back"].tap();
 target.delay(1);
 window.buttons()["icon done"].tap();
 
 
 window.buttons()["icon setting"].tap();
 window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
 
 window.buttons()["icon back"].tap();
 target.delay(1);       
     
     
     
     });





test("Проверим все Dividers из Shapes категории по одному", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
     window.buttons()["Skip"].tap();
    
     target.delay(6);
     window.buttons()["icon cross"].tap();
     
     target.delay(2)
     window.buttons()["Artwork"].tap();
     
     target.delay(1);
     window.scrollViews()[0].collectionViews()[0].cells()[3].tap();
     UIATarget.localTarget().pushTimeout(0.1);
     
     
     target.delay(1);
     
     log("Обходим каждый элемент из Decorative")
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
     }
     
     window.buttons()["icon back"].tap();
     target.delay(1);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     
     window.buttons()["icon back"].tap();
     target.delay(1);       
     
 
     
     
     });



test("Проверим все Dividers из Tribal категории по одному", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(3);
     window.buttons()["icon cross"].tap();
     
     target.delay(2)
     window.buttons()["Artwork"].tap();
     
     target.delay(1);
     window.scrollViews()[0].collectionViews()[0].cells()[4].tap();
     UIATarget.localTarget().pushTimeout(0.1);
     
     
     target.delay(1);
     
     log("Обходим каждый элемент из Decorative")
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
     }
     
     window.buttons()["icon back"].tap();
     target.delay(1);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     
     window.buttons()["icon back"].tap();
     target.delay(1);       
     
     
     });



test("Проверим все Dividers из Burst категории по одному", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[2].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(4);
     window.buttons()["icon cross"].tap();
     
     target.delay(2)
     window.buttons()["Artwork"].tap();
     
     target.delay(1);
     window.scrollViews()[0].collectionViews()[0].cells()[5].tap();
     UIATarget.localTarget().pushTimeout(0.1);
     
     
     target.delay(1);
     
     log("Обходим каждый элемент из Decorative")
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
     }
     
     window.buttons()["icon back"].tap();
     target.delay(1);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     
     window.buttons()["icon back"].tap();
     target.delay(1);       
     
     
     
     });



