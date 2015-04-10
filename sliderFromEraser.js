



#import "Screen.js";
#import "env.js";



test("Проверим слайдер на eraser ", function(){



	 target.pushTimeout(2);

     target.delay(2);
     window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
     window.buttons()["DON'T CROP"].tap();
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("Some test String");

     window.buttons()[15].tap();
     target.delay(4);
     window.buttons()["icon eraser"].tap();
     target.pushTimeout(2);
     target.delay(2);
     if (window.staticTexts()["Using eraser will limit editing of this layer"].isValid()){


     	target.delay(2);
     	window.buttons()["Don't show again"].tap();
     	window.buttons()["OK"].tap();
     }

     window.scrollViews()[0].sliders()[6].dragToValue(0.50);
     target.delay(2);
     window.scrollViews()[0].sliders()[6].dragToValue(1.00);
     target.delay(2);
     window.scrollViews()[0].sliders()[6].dragToValue(0.00);
     window.buttons()[15].tap();
     window.buttons()["icon setting"].tap();
     target.delay(1);
     window.tableViews()[0].tapWithOptions({tapOffset:{x:0.52, y:0.04}});
     window.buttons()["icon back"].tap();
     target.delay(2);

     
 })


test ("Проверим что кнопки Undo и Erase есть на экране Eraser", function(){


     target.pushTimeout(4);
     window.scrollViews()[0].collectionViews()[0].cells()[1].tap();
     window.buttons()["DON'T CROP"].tap();
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("Test session");
     window.buttons()[15].tap();
     target.delay(2);
     window.buttons()["icon eraser"].tap();
     target.delay(2);

     if(window.scrollViews()[0].buttons()["Undo"].isValid()&window.scrollViews()[0].buttons()["Erase"].isValid()===true){

          window.buttons()[15].tap();
          window.buttons()["icon setting"].tap();
          target.delay(1);
          window.tableViews()[0].tapWithOptions({tapOffset:{x:0.52, y:0.04}});
          window.buttons()["icon back"].tap();
          target.delay(2);
         }
         else {


          throw new Error;
         }
         
})


test("Проверю что по нажатию на Кнопку Erase она меняет свое имя на Draw", function(){
         target.pushTimeout(4);
     window.scrollViews()[0].collectionViews()[0].cells()[1].tap();
     window.buttons()["DON'T CROP"].tap();
     window.buttons()["Edit Text"].tap();
     app.keyboard().typeString("Test session");
     window.buttons()[15].tap();
     target.delay(2);
     window.buttons()["icon eraser"].tap();
     target.delay(2);
     window.scrollViews()[0].buttons()["Erase"].tap();
     target.delay(2);
     if(window.scrollViews()[0].buttons()["Draw"].isValid()===true){

          return true
     }else{
          throw new Error;
     }

})
