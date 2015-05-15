#import "Screen.js";
#import "env.js";




test("Проверяем все кнопки на экране камеры", function(){
     
     target.delay(2);
     
     window.buttons()["Camera"].tap();
     log("Checking all buttons are visible");
     log("On camera screen had 5 buttons");
     var result1 = window.buttons()['icon cancel'].checkIsValid();
     target.delay(2);

     var result2 = window.buttons()['btn take shot'].checkIsValid();
     var result3 = window.buttons()['icon camera timer'].checkIsValid();
     var result4 = window.buttons()['icon camera facetime'].checkIsValid();
     var result5 = window.buttons()[0].checkIsValid();  //кнопка вспышки


     if(result1&result2&result3&result4&result5===true){
        
       
        window.buttons()["icon cancel"].tap();

     }else{

         throw new Error

     }
     target.delay(2);
    
      


})