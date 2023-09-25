/*
In order to use the Stepper class, your board must be flashed with AdvancedFirmata,
which is available here: https://github.com/soundanalogous/AdvancedFirmata
*/

const {Board, Stepper} = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  /**
   * In order to use the Stepper class, your board must be flashed with
   * either of the following:
   *
   * - AdvancedFirmata https://github.com/soundanalogous/AdvancedFirmata
   * - ConfigurableFirmata https://github.com/firmata/arduino/releases/tag/v2.6.2
   *
   */

  const stepper = new Stepper({
    type: Stepper.TYPE.FOUR_WIRE,
    stepsPerRev: 200,
    pins: {
      motor1: 2,
      motor2: 3,
      motor3: 4,
      motor4: 5
    }
  });

  // set stepp[er to 180 rpm, CCW, with acceleration and deceleration
  stepper.rpm(180).direction(Stepper.DIRECTION.CCW).accel(1600).decel(1600);
  
  // make 10 full revolutions 
  stepper.step(2000, () => {
    console.log("done moving CCW");

    // once first movement is done, make 10 revolutions clockwise at previously
    //      defined speed, accel, and decel by passing an object into stepper.step
    stepper.step({
      steps: 2000,
      direction: Stepper.DIRECTION.CW
    }, () => console.log("done moving CW"));
  });
});

/*five.Stepper({
    type: five.Stepper.TYPE.FOUR_WIRE
    stepsPerRev: number,
    pins: {
      motor1: number,
      motor2: number,
      motor3: number,
      motor4: number
    }
  });*/
  
  /*five.Stepper({
    type: five.Stepper.TYPE.FOUR_WIRE
    stepsPerRev: number,
    pins: [ motor1, motor2, motor3, motor4 ]
  });*/
  