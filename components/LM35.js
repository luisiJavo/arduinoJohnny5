var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var temperature = new five.Thermometer({
    pin: "A0",
    freq: 5000
  });
  
  temperature.on("data", function() {
    console.log("celsius: %d", (this.C * 500)/1024); //Calibrated
  });
});
