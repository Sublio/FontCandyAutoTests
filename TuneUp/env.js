
"use strict"

function log(message){
    var msg = Array.prototype.join.call(arguments, ', ');
    UIALogger.logMessage(msg);
};

function test(description, steps){
    
    try{
        UIALogger.logStart(description);
        steps();
        UIALogger.logPass("Test passed");
    } catch(exception){
        UIALogger.logError(exception.message);
        UIALogger.localTarget().logElementTree();
        UIALogger.logFail("Test failed");
        throw exception;
    }
};

function assert(value, failMsg){
    if (value) return;
    if (!failMsg)failMsg = "Assert failed";
    throw new Error(failMsg);
};

function assertEqual(value1,value2,failMsg){
    if (value1===value2) return;
    if (!failMsg) failMsg = "Assert Equal failed";
    var fullMsg = failMsg + ": '" + value1 +" '" +
    " !==  '" +value2 + "'";
    assert(false, fullMsg);
}
