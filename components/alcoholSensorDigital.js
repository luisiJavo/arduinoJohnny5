var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var sensor = new five.Sensor.Digital(2);

  sensor.on("change", function() {
    console.log(this.value);
  });
});

/*
If you prefer arrow functions...

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", () => {

  var sensor = new five.Sensor.Digital(2);

  sensor.on("change", () => {
    console.log(sensor.value);
  });
});

*/