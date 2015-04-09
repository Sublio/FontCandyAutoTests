#import "Screen.js";
#import "env.js";




test ("Проверим слайдеры при редактировании текста. Вкладка Sliders", function(){
      target.pushTimeout(5);
      target.delay(2);
      window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
      window.buttons()["Skip"].tap();
      
      target.delay(2);
      window.buttons()["Edit Text"].tap();
      app.keyboard().typeString("This is test session. Do not forbid!")
      target.delay(2);
      window.buttons()[14].tap();
      target.delay(1);
      window.buttons()["icon adjust"].tap();
      target.delay(2);
      window.scrollViews()[0].sliders()[0].dragToValue(1.00);
      target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);







})



test("Проверим что слайдер Size есть на экране слайдеров текста", function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[0].isValid()){

           window.scrollViews()[0].sliders()[0].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);





})


test("Проверим что слайдер Shadow есть на экране слайдеров текста",function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
    
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[1].isValid()){

           window.scrollViews()[0].sliders()[1].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);



	})



test("Проверим что слайдер Shadow есть на экране слайдеров текста",function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[2].isValid()){

           window.scrollViews()[0].sliders()[2].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);



	})

test("Проверим что слайдер Shadow есть на экране слайдеров текста",function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[3].isValid()){

           window.scrollViews()[0].sliders()[3].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);



	})


test("Проверим что слайдер Shadow есть на экране слайдеров текста",function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[4].isValid()){

           window.scrollViews()[0].sliders()[4].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);



	})


test("Проверим что слайдер Shadow есть на экране слайдеров текста",function(){
     target.pushTimeout(5);
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["Skip"].tap();
     
     target.delay(5);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("This is test session");
     target.delay(2);
     window.buttons()[14].tap();
     target.delay(2);
     window.buttons()["icon adjust"].tap();
     target.delay(2);
     if(window.scrollViews()[0].sliders()[5].isValid()){

           window.scrollViews()[0].sliders()[5].dragToValue(1.00);

     }
     else {
     	UIALogger.logFail();
     }
     target.delay(2);
      window.buttons()[14].tap();
      target.delay(2);
      window.buttons()["icon setting"].tap();
      target.delay(2);
      window.tableViews()[0].cells()["START OVER"].tap();
      target.delay(2);
      window.buttons()["icon back"].tap();
      target.delay(1);



	})




test("Проверяю доступность слайдера HUE и подергаю его", function(){

  target.delay(3);
  window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
  window.buttons()["Skip"].tap();
  window.buttons()["Color"].tap();
  target.delay(2);
  log("Проверяю слайдер HUE");
  if(window.scrollViews()[0].sliders()[0].isValid()){

           window.scrollViews()[0].sliders()[0].dragToValue(1.00);

     }
     else {
      UIALogger.logFail();
     }
  target.delay(2);
  window.buttons()[14].tap();
  target.delay(2);
  window.buttons()["icon setting"].tap();
  target.delay(2);
  window.tableViews()[0].cells()["START OVER"].tap();
  target.delay(2);
  window.buttons()["icon back"].tap();
  target.delay(1);
})


test("Проверяю доступность слайдера Opacity и подергаю его", function(){
  target.delay(3);
  windows.scrollViews()[0].collectionViews()[0].cells()[0].tap();
  window.buttons()["Skip"].tap();
  window.buttons()["Color"].tap();
  target.delay(2);
  log("Проверяю слайдер HUE");
  if(window.scrollViews()[0].sliders()[1].isValid()){

           window.scrollViews()[0].sliders()[1].dragToValue(1.00);

     }
     else {
      UIALogger.logFail();
     }
  target.delay(2);
  window.buttons()[14].tap();
  target.delay(2);
  window.buttons()["icon setting"].tap();
  target.delay(2);
  window.tableViews()[0].cells()["START OVER"].tap();
  target.delay(2);
  window.buttons()["icon back"].tap();
  target.delay(1);

})