var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  
 // Create a new `led` hardware instance.
  var led = new five.Led(13);
  
  // Create a new `motion` hardware instance.
  var motion = new five.Motion(7);

  // "calibrated" occurs once, at the beginning of a session,
  motion.on("calibrated", function() {
    console.log("Calibrated");
    });

  // "motionstart" events are fired when the "calibrated"
  // proximal area is disrupted, generally by some form of movement
  motion.on("motionstart", function() {
    console.log("motionStart");
    led.on();
  });

  // "motionend" events are fired following a "motionstart" event
  // when no movement has occurred in X ms
  motion.on("motionend", function() {
    console.log("motionEnd");
    led.off();
  });
});

