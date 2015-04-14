#import "Screen.js";
#import "env.js";

//Iphone




test ("Cheking that Inspiration Button is available", function(){
      target.delay(2);
      window.buttons()["Inspiration"].tap();
      target.delay(2);
      log("Ждем пока картинки загрузятся");
      target.delay(4);
      window.collectionViews()[0].cells()[80].scrollToVisible();
      target.delay(2);
      window.buttons()[5].tap();
     
      });


test("Проверим что камера доступна и работает", function(){
     target.delay(2);
     window.buttons()["Camera"].tap();
     target.delay(2);
     window.buttons()["btn take shot"].tap();
     log("Делаем назад");
     window.buttons()["icon back"].tap();
     
     });

//iphone
if(target.model().match("iPhone")){
test("Проверим что Settings кнопка доступна и посмотрим что внутри",function(){
     target.delay(2);
     window.buttons()["Settings"].tap();
     target.delay(2);
     window.buttons()["icon arrow down"].tap();
      
    
     
     
     target.delay();
     
     });
}

//ipad

if(target.model().match("iPad")){
    test("Проверим что Settings кнопка доступна и посмотрим что внутри", function(){
     
     target.delay(2);
     window.buttons()["Settings"].tap();
     target.delay(2);
     window.buttons()["icon back"].tap();
    })


}


//iPhone 
if(target.model().match("iPhone")){
     log("ЭТо Айфон")
test("Выберем одну картинку  и что - нибудь с ней сделаем", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].images()[0].tap();
     window.buttons()["DON'T CROP"].tap();
     
     target.delay(4);
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("Some very Long text integer dfgkjdhghshd;fghsdljflijsdfjlsdjfl")
     window.buttons()[15].tap();
     
     window.buttons()[15].tap();
     
     target.delay(2);
     window.buttons()["icon setting"].tap();
     target.delay(1);
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.52, y:0.04}});
     window.buttons()["icon back"].tap();
     target.delay(2);
     });

}


//iPad

if(target.model().match("iPad")){
    log("Это айпад");
test("Выберем одну картинку  и что - нибудь с ней сделаем", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].images()[0].tap();
     window.buttons()["DON'T CROP"].tap();
     
     target.delay(4);
     window.buttons()["icon add text"].tap();
     app.keyboard().typeString("Some very Long text integer dfgkjdhghshd;fghsdljflijsdfjlsdjfl")
     target.delay(2);
     app.windows()[1].buttons()["icon done"].tap();
     target.delay(2);
     window.buttons()["icon setting"].tap();
     window.tableViews()[0].cells()["START OVER"].tap();
     target.delay(2);
     window.buttons()["icon back"].tap();
           
     
     
     });


}


//iphone
if(target.model().match("iPhone")){

test("Берем картинку, кропаем ее и проверяем что кнопка Start over возвращает нас",function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     
     
     
     window.buttons()["1:1"].tap();
     target.delay(2);
     window.buttons()["icon done"].tap();
     
     
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
}

//iPad

if (target.model().match("iPad")) {
     test("Берем картинку, кропаем ее и проверяем что кнопка Start over возвращает нас",function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     
     
     
     window.buttons()["1:1"].tap();
     target.delay(2);
     window.buttons()["icon done"].tap();
     
     
     window.buttons()["icon cross"].tap();   
     target.delay(2);
     window.buttons()["icon add text"].tap();
     
     
     
     
     
     
     target.delay(2);
     app.keyboard().typeString("This is test session do not forbid");
     target.delay(2);
     app.windows()[1].buttons()["icon done"].tap();
     target.delay(2);
     app.window()[1].buttons()[14].tap();
     
     
     target.delay(1);
     window.buttons()["icon setting"].tap();
     target.delay(1);
     window.tableViews()[0].cells()["START OVER"].tap();
     window.buttons()["icon back"].tap();
     target.delay(2);
     
     
     
     });

};



      
//iphone
if(target.model().match("iPhone")){
    log("iPhone")
test("Проверим все шрифты по одному добавляя каждый по отдельности", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     window.buttons()["1:1"].tap();

     target.delay(2);
     window.buttons()["icon done"].tap();
     
     target.delay(2);
     window.buttons()["icon cross"].tap();	
     target.delay(1);
     window.buttons()["Add Text"].tap();
     target.delay(2);
     app.keyboard().typeString("This is test session do not forbid");
     target.delay(2);
     
     //Если удалить следующиую строчку - то возникнет баг
     
     window.buttons()[15].tap();
     
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
     
}

//ipad


if(target.model().match("iPad")){
     log("ipad");
   test("Проверим все шрифты по одному добавляя каждый по отдельности", function(){
     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     target.delay(2);
     window.buttons()["1:1"].tap();

     target.delay(2);
     window.buttons()["icon done"].tap();
     
     target.delay(2);
     window.buttons()["icon cross"].tap();   
     target.delay(1);
     window.buttons()["icon add text"].tap();
     target.delay(2);
     app.keyboard().typeString("This is test session do not forbid");
     target.delay(2);
     
     //Если удалить следующиую строчку - то возникнет баг
     
     app.windows()[1].buttons()["icon done"].tap();
     
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



}


