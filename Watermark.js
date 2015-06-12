#import "Screen.js";
#import "env.js";




test("Проверяем  что можно зумить на кропе",function(){ 
  target.delay(1);
  var cell = window.scrollViews()[0].collectionViews()[0].cells();
  cell[1].tap()

  target.delay(2);
  var scrollView = window.scrollViews()[0];
  var rect = scrollView.rect();
  //target.logElementTree();
  log(JSON.stringify(rect));
  var pictureCenter = {


    x: rect.size.width/2 + rect.origin.x,
    y: rect.size.height/2 + rect.origin.y
  };

  var startPoint = {

    x: pictureCenter.x,
    y: pictureCenter.y
  };

  var endPoint = {

    x:pictureCenter.x - 60,
    y:pictureCenter.y

  };
  //target.pinchCloseFromToForDuration(startPoint, endPoint, 3);
  target.pinchOpenFromToForDuration({x:80, y:150}, {x:30, y:150}, 2) 

  target.delay(3);

  var options = {

    startOffset: {x:0.2, y:0.5},
    endOffset:   {x:0.9,y:0.4}
  };
  scrollView.flickInsideWithOptions(options);

  target.delay(2);


})