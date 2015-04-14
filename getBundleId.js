var target = UIATarget.localTarget();
var app_name = target.frontMostApp().bundleID();
UIALogger.logDebug(app_name);