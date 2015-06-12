#import "Screen.js";
#import "env.js";

//Iphone




test ("Cheking that Inspiration Button is available", function(){
      target.delay(2);
      window.buttons()["Inspiration"].tap();
      target.delay(2);
      log("Ждем пока картинки загрузятся");
      target.delay(4);
      
      for (var index = 0; index < window.collectionViews()[0].cells().length; index++)
      {
      
      var currentCell = window.collectionViews()[0].cells()[index];
      window.collectionViews()[0].scrollToElementWithName(currentCell.name());
      
      currentCell.scrollToVisible();
      target.delay(1);
      
      
      }
    
      log("Делаем назад")
      window.buttons()["icon arrow down"].tap();
      });


test("Проверим что камера доступна и работает", function(){
     target.delay(2);
     window.buttons()["Camera"].tap();
     target.delay(2);
     window.buttons()["btn take shot"].tap();
     log("Делаем назад");
     window.buttons()["icon back"].tap();
     
     });

#import "Screen.js";
#import "env.js";



test("Проверяем что кнопка таймера имеет 4 положения: 03 05 10 20",function(){

  target.delay(1);
  window.buttons()["Camera"].tap();
  var cameratimerbutton = window.buttons()["icon camera timer"];
  cameratimerbutton.tap();
  
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  
//Check that on timer now is 03 seconds
  assertEqual(firstTimerNumber.value(),'0', "WrongTimer");
  assertEqual(secondTimerNumber.value(),'3',"WrongTimer");
  
  firstTimerNumber.tap();
  target.delay(1);

  assertEqual(firstTimerNumber.value(),'0', "WrongTimer");
  assertEqual(secondTimerNumber.value(),'5',"WrongTimer");

  firstTimerNumber.tap();
  target.delay(1);

  assertEqual(firstTimerNumber.value(),'1',"WrongTimer");
  assertEqual(secondTimerNumber.value(),'0',"WrongTimer");

  firstTimerNumber.tap()
  target.delay(1)

  assertEqual(firstTimerNumber.value(),'2',"WrongTImer");
  assertEqual(secondTimerNumber.value(),'0',"WrongTimer");

  window.buttons()['icon cancel'].tap();

  log("All done");

})


test("Проверяем что при таймере в 3 сек он действительно отчитывает 3 секунды перед снимкомs",function(){
   target.delay(1);
   window.buttons()["Camera"].tap();
   var cameratimerbutton = window.buttons()["icon camera timer"];
   cameratimerbutton.tap();

   target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  assertEqual(firstTimerNumber.value(),'0',"WrongTimer");
  assertEqual(secondTimerNumber.value(),'3',"WrongTimer");
  window.buttons()['btn take shot'].tap();
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'2',"WrongTimer");
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'1',"WrongTimer");
  log(secondTimerNumber.value());
  window.buttons()['icon cancel'].tap();
  target.delay(3);
  log("All done");


})

test("Проверяем что при таймере в 5 секунд он действительно отчитывает 5 секунд перед снимком",function(){

  target.delay(1);
  window.buttons()['Camera'].tap();
  var cameratimerbutton = window.buttons()["icon camera timer"];
  cameratimerbutton.tap();
  target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  firstTimerNumber.tap();
  target.delay(1);
  assertEqual(firstTimerNumber.value(),'0',"WrongTimer");
  assertEqual(secondTimerNumber.value(),'5',"WrongTimer");
  window.buttons()["btn take shot"].tap();
  
  target.delay();
  assertEqual(secondTimerNumber.value(),'5',"WrongTimer");
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'4',"WrongTimer");
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'3',"WrongTimer");
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'2',"WrongTimer");
  log(secondTimerNumber.value());
  target.delay(1);
  assertEqual(secondTimerNumber.value(),'1',"WrongTimer");
  log(secondTimerNumber.value());
  window.buttons()['icon cancel'].tap();
  target.delay(2)
  log("All done");


}
  )

test(" Проверяем что при таймере в 10 секунд он действительно отчитывает 10 секунд перд снимком",function(){
  target.delay(1);
  window.buttons()['Camera'].tap();
  var cameratimerbutton = window.buttons()['icon camera timer'];
  cameratimerbutton.tap();
  target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  target.delay(1);
  window.buttons()['btn take shot'].tap();
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'09',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'08',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'07',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1)
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'06',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'05',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'04',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'03',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'02',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'01',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  window.buttons()['icon cancel'].tap()
  target.delay(2);
  log("All done");




})

test("Проверяем что при таймере в 20 секунд он действительно отчитывает 20 секунд перед снимком",function(){
  target.delay(1);
  window.buttons()['Camera'].tap();
  var cameratimerbutton = window.buttons()['icon camera timer'];
  cameratimerbutton.tap();
  target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  target.delay(1);
  window.buttons()['btn take shot'].tap();
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'19',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'18',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'17',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1)
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'16',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'15',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'14',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'13',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'12',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'11',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'10',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'09',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'08',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1)
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'07',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'06',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'05',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'04',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'03',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value())
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'02',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'01',"WrongTimer");
  log(firstTimerNumber.value()+secondTimerNumber.value());
  window.buttons()['icon cancel'].tap()
  target.delay(2);
  log("All done");
})

test(" Проверяем что при клике на 20 таймер снова станвоится на 03 секунды",function(){
  target.delay();
  window.buttons()['Camera'].tap();
  var cameratimerbutton = window.buttons()['icon camera timer'];
  cameratimerbutton.tap();
  target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'03',"WrongTimer");
  target.delay(1);
  window.buttons()['icon cancel'].tap();
  log('All done');

})


test(" Проверяем что при клике на 20 таймер снова станвоится на 03 секунды",function(){
  target.delay();
  window.buttons()['Camera'].tap();
  var cameratimerbutton = window.buttons()['icon camera timer'];
  cameratimerbutton.tap();
  target.delay(2);
  var firstTimerNumber = window.staticTexts()[0];
  var secondTimerNumber = window.staticTexts()[1];
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  firstTimerNumber.tap();
  target.delay(1);
  assertEqual(firstTimerNumber.value()+secondTimerNumber.value(),'03',"WrongTimer");
  target.delay(1);
  window.buttons()['icon cancel'].tap();
  log('All done');

})


test("Проверим что Settings кнопка доступна и посмотрим что внутри",function(){
     target.delay(2);
     window.buttons()["Settings"].tap();
     target.delay(2);
     window.buttons()["icon arrow down"].tap();
      
    
     
     
     
     
     });



test("Выберем одну картинку  и что - нибудь с ней сделаем", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].images()[0].tap();
     window.buttons()["Skip"].tap();
     target.delay(3);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("Some very Long text integer dfgkjdhghshd;fghsdljflijsdfjlsdjfl")
     window.buttons()[14].tap();
     
     window.buttons()[14].tap();
     
     target.delay(2);
     window.buttons()["icon setting"].tap();
     target.delay(1);
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.52, y:0.04}});
     window.buttons()["icon back"].tap();
     target.delay(2);
     });






test("Берем картинку, кропаем ее и проверяем что кнопка Start over возвращает нас",function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     
     
     
     window.buttons()["Crop"].tap();
     target.delay(2);
     
     
     window.buttons()["icon cross"].tap();	
     target.delay(1);
     window.buttons()["Add Text"].tap();
     
     
     
     
     
     
     target.delay(2);
     app.keyboard().typeString("This is test session do not forbid");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()[14].tap();
     
     
     target.delay(1);
     window.buttons()["icon setting"].tap();
     target.delay(1);
     target.frontMostApp().mainWindow().tableViews()[0].tapWithOptions({tapOffset:{x:0.53, y:0.04}});
     window.buttons()["icon back"].tap();
     target.delay(2);
     
     
     
     });




      


test("Проверим все шрифты по одному добавляя каждый по отдельности", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     window.buttons()["Crop"].tap();
     target.delay(2);
     window.buttons()["icon cross"].tap();	
     target.delay(1);
     window.buttons()["Add Text"].tap();
     target.delay(2);
     app.keyboard().typeString("This is test session do not forbid");
     target.delay(2);
     
     //Если удалить следующиую строчку - то возникнет баг
     
     window.buttons()[14].tap();
     
     //Если удалить предыдую строчку - то возникте баг
     
     log("Выставим первый шрифт из списка ");
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     
     
     UIATarget.localTarget().pushTimeout(0.1);     
     
     for (var index = 0; index < window.scrollViews()[0].collectionViews()[0].cells().length; index++)
     {
     
     var currentCell = window.scrollViews()[0].collectionViews()[0].cells()[index];
     window.scrollViews()[0].scrollToElementWithName(currentCell.name());
     
     currentCell.tap();
     
     
     
     }
     window.buttons()[14].tap();
     
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.56, y:0.03}});
     window.buttons()["icon back"].tap();
     target.delay(1);
     
     });
     



