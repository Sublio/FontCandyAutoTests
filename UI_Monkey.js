#import "Screen.js";
#import "env.js";

//Iphone


test ("Проверяю каждую фотку из библиотеки девайса ", function(){
      target.delay(2);
      window.buttons()[12].tap();
      
      window.collectionViews()[0].cells()["CAMERA ROLL"].tap();
      target.delay(1);
      //target.logElementTree();
      
      
      
      for (var index = 0; index < window.collectionViews()[0].cells().length; index++)
      {
      
      var currentCell = window.collectionViews()[0].cells()[index];
      window.scrollToElementWithName(currentCell.name());
      
      currentCell.tap();
      window.buttons()["icon yes crop trim"].tap();
      target.delay(1);
      window.buttons()[12].tap();
      window.collectionViews()[0].cells()["CAMERA ROLL"].tap();
      target.delay(1);
      
      
      
      }
      })
      
     
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      


