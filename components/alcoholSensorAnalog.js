var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A0", 
    freq: 1000, 
    //threshold: 5
  });
  
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", function() {
    //console.log(this.scaleTo(0, 10));
    console.log(this.raw);
  });
});

/*
If you prefer arrow functions...

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", () => {
  var sensor = new five.Sensor("A0");
  
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", () => {
    console.log(sensor.scaleTo(0, 10));
  });
});

*/