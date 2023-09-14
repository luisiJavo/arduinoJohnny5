//https://wiki.keyestudio.com/Ks0022_keyestudio_LM35_Linear_Temperature_Sensor#Specification

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {


// Create an analog Thermometer object:
new five.Thermometer({
    pin: "A0",
    freq: 10000,
    toCelsius: function(raw) {    // optional
      console.log((500 * raw) /1024);
    }
  });
});