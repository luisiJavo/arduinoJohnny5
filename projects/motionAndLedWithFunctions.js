var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  
  function ledOn() {
    led.on();
  }
  function ledOff() {
    led.off();
  }
  // Create a new `led` hardware instance.
  var led = new five.Led(13);
  
  // Create a new `motion` hardware instance.
  var motion = new five.Motion(7);

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("calibrated");
    //setTimeout(ledOn, 3000); //Asynchronous
  });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionstart");
    ledOn();
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionend");
    ledOff();
  });
});


