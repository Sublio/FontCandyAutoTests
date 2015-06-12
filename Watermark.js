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
  target.delay(2);
  log("All done");


}
  )