#import "Screen.js";
#import "env.js";


test("Снять скриншот с экрана  первый способ", function(){
     
     target = UIATarget.localTarget()
     rectWithoutStatusBar = target.rect()
     rectWithoutStatusBar.origin.y = 20.0
     target.captureRectWithName(rectWithoutStatusBar, "home_without_status_bar")
     
     });


test("Снять скриншот с экрана второй способ", function(){
     
     target = UIATarget.localTarget();
     application = target.frontMostApp();
     target.captureScreenWithName("myscreenshot");
     target.delay(2);
     
     });