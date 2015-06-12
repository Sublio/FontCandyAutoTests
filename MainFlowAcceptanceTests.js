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

test("Проверяем что кнопка вспышки, переключение камеры, снятия снимка, кнопка отмены и кнопка таймера есть на экране камеры", function(){
  target.delay(1);
  window.buttons()["Camera"].tap();

  var facetimebutton = window.buttons()["icon camera facetime"];
  var takeshotbutton = window.buttons()["btn take shot"];
  var cancelbutton = window.buttons()["icon cancel"];
  var cameratimerbutton = window.buttons()["icon camera timer"];
  var flashbutton = window.buttons()[0];
  assert(facetimebutton.isValid(), "facetimebutton not found");
  assert(takeshotbutton.isValid(), "takeshotbutton not found");
  assert(cancelbutton.isValid(),"cancelbutton not found");
  assert(cameratimerbutton.isValid(),"cameratimerbutton not found");
  assert(flashbutton.isValid(), "flashbutton not found")
  log("All done. Getting back");
  cancelbutton.tap();
})



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
     



