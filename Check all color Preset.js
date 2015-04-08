#import "Screen.js";
#import "env.js";





test ("Добавляем дефолтную надпись Hello World и проверяем ее во всех цветах", function(){
      
      target.delay(2);
      
      window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
      
      window.buttons()["Skip"].tap();
      
      target.delay(2);
      window.buttons()["icon cross"].tap();
      target.delay(1);
      window.buttons()["Add Text"].tap();
      target.delay(2);
      app.keyboard().typeString("Hello world");
      target.delay(4);
      window.buttons()[14].tap();
      
      target.delay(2);
      window.buttons()[14].tap();
      target.delay(1);
      window.buttons()["Color"].tap();
      
      target.delay(2);
      log("Начинаем проверять цвета");
      UIATarget.localTarget().pushTimeout(0.1); 
      log("Обходим каждый элемент из Colors ")
      
      for (var index = 1; index < window.collectionViews()[0].cells().length; index++)
      {
      
      var currentCell = window.collectionViews()[0].cells()[index];
      window.scrollToElementWithName(currentCell.name());
      
      currentCell.tap();
      
      
      };
      
      target.delay(3);
      window.buttons()["icon done"].tap();
      
      target.delay(1);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].tapWithOptions({tapOffset:{x:0.53, y:0.04}});
                                           
      
      target.delay(2);
      
                            
      window.buttons()["icon back"].tap();
      target.delay(2);

      
     });



test ("Добавляем надпись Hello World и проверяем на всех фильтрах", function(){
      
      target.delay(2);
      window.scrollViews()[0].collectionViews()[0].cells()[6].images()[0].tap();
      
      UIATarget.localTarget().pushTimeout(10);
      window.buttons()["Skip"].tap();
      
      target.delay(8);
      window.buttons()["icon cross"].tap();
      target.delay(2);
      window.buttons()["Add Text"].tap();
      target.delay(2);
      app.keyboard().typeString("Hello world");
      target.delay(2);
      window.buttons()[14].tap();
      
      target.delay(2);
      
      window.buttons()[14].tap();
      window.buttons()["Image"].tap();
      
      target.delay(2);
      log("Начинаем проверять каждый фильтр");
      
      
      
      for (var index = 0; index < window.collectionViews()[0].cells().length; index++)
      {
      
      var currentCell = window.collectionViews()[0].cells()[index];
      window.scrollToElementWithName(currentCell.name());
      
      currentCell.tap();
      
      
      };
      
      
      target.delay(2);
      window.buttons()["icon done"].tap();
      
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
                     
      window.tableViews()[0].tapWithOptions({tapOffset:{x:0.53, y:0.04}});
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(2);


      });



