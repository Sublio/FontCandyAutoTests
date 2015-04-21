test("Получение координат кнопки Edit Text в главном дашборде ", function(){
    
    target.delay(2);
    window.scrollViews()[0].collectionViews()[0].cells()[0].tap();
    window.buttons()["DON'T CROP"].tap();
    target.delay(4);
    //target.frontMostApp().mainWindow().logElementTree();
    
//Распарсивание объекта!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*
var myObj = window.textFields();
log(JSON.stringify(myObj));


      // print(window.buttons()["Edit Text"].rect())



//Распарсивание объекта !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  

*/

log(window.buttons()[1].logElement());

})
