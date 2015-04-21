#import "Screen.js";
#import "env.js";

//iphone
if(target.model().match("iPhone")){
test("Проверяю что при первом запуске появляется Туториал в главном дашборде Айфон ", function(){
    
    target.delay(2);
    window.buttons()["Settings"].tap();
    target.delay(2);
    window.tableViews()[0].cells()["RESET HINT VIDEOS"].tap();;
    target.delay(2);
    window.buttons()["icon arrow down"].tap();
    target.delay(2);
    window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
    window.buttons()["DON'T CROP"].tap();
    target.delay(6);
    //target.frontMostApp().mainWindow().logElementTree();
    if(window.buttons()["btn close"].isValid()){


    	log("Туториал есть на главном дашборде");
    	window.buttons()["btn close"].tap();
        target.delay(2);
    	window.buttons()["icon setting"].tap();
        target.delay(2);
        window.tableViews()[0].tapWithOptions({tapOffset:{x:0.32, y:0.03}});
        target.delay(2);
        window.buttons()["icon back"].tap();
        target.delay(1);
    }
    else{

    	throw new Error("Туториала нет");
    }

});
}

//ipad

if(target.model().match("iPad")){


  test("Проверяю что при первом запуске появляется Туториал в главном дашборде Айпад", function(){


  	target.delay(2);
  	window.buttons()["Settings"].tap();
  	window.tableViews()[0].cells()["RESET HINT VIDEOS"].tap();
  	window.buttons()["icon back"].tap();
  	window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
  	window.buttons()["DON'T CROP"].tap();
  	if(window.buttons()["btn close"].isValid()){
        log("Туториал есть");
  		window.buttons()["btn close"].tap();
  		target.delay(2);
  		window.buttons()["icon setting"].tap();
  		target.delay(2);
  		window.tableViews()[0].cells()["START OVER"].tap();
  		window.buttons()["icon back"].tap();
  	}else{

  		throw new Error("Туториала нет")
  	}

  })
}



//iphone


if(target.model().match("iPhone")){

    test ("Проверяю что при первом заходе в Sayings показывается туториал айфон", function(){
    
    log("Айфон");
	target.delay(2);
	window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
	window.buttons()["DON'T CROP"].tap();
	target.delay(2);
	window.buttons()["Sayings"].tap();
	window.buttons()["btn close"].isValid()
	log("Туториал в Sayings есть");
	window.buttons()["btn close"].tap();
	window.buttons()["icon done"].tap();
	target.delay(4);
	window.buttons()["icon setting"].tap();
	target.delay(2);
	window.tableViews()[0].cells()["START OVER"].tap();
	window.buttons()["icon back"].tap();
   })
	  
};

if(target.model().match("iPad")){

	test("Проверяю что при первом заходе в Sayings показывается туториал айпад", function(){
         
        log("Айпад");
		target.delay(2);
		window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
		window.buttons()["DON'T CROP"].tap();
		target.delay(2);
		window.buttons()["icon presets"].tap();
		window.buttons()["btn close"].tap();
		window.buttons()["icon setting"].tap();
		window.tableViews()[0].cells()["START OVER"].tap();
		window.buttons()["icon back"].tap();
	})
};


