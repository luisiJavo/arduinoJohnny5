var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var temperature = new five.Thermometer({
    pin: "A0",
    freq: 5000
  });
  
  temperature.on("data", function() {
    console.log("celsius: %d", this.C);
    console.log(temperature);
  //  console.log("kelvin: %d", this.K);
  });
});

// Create an analog Thermometer object:
/*new five.Thermometer({
    pin: "A0",
    toCelsius: function(raw) { // optional
      //return (raw / sensivity) + offset;
      return (500 * val) /1024;
    }
  });*/
//});