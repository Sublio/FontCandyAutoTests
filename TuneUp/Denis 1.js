//#import "Screen.js";
//#import "env.js";
#import "tuneup/tuneup.js";



test("Inspiration button", function(target, app) {
  var window = app.mainWindow();

 
  //window.buttons()["Inspiration"].tap();

  
  assertEquals("Inspiration", window.buttons()[0].value());
});
