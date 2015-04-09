#import "Screen.js";
#import "env.js";




test("Проверяю что на экране Settings все кнопки на месте и нажму поочередно на кажудую", function(){
      
       target.delay(2);
       window.buttons()["Settings"].tap();
       target.delay(2);
       
       var result1 = window.tableViews()[0].cells()["INSPIRATION"].checkIsValid();
       target.delay(2);
       var result2 = window.tableViews()[0].cells()["RATE"].checkIsValid();
       target.delay(2);
       var result3 = window.tableViews()[0].cells()["REPORT A BUG"].checkIsValid();
       target.delay(2);
       var result4 = window.tableViews()[0].cells()["GET IN TOUCH"].checkIsValid();
       target.delay(2);
       var result5 = window.tableViews()[0].cells()["RESET HINT VIDEOS"].checkIsValid();
       targetd.delay(2);
     


     if(result1&result2&result3&result4&result5===true){
        
       
        window.buttons()["icon arrow down"].tap();

     }else{

         throw new Error

     }
     target.delay(2);
    	

     


} )