const machine = {};
const vehicle = {};
const robot = {};

vehicle.__proto__ = machine;
robot.__proto__ = machine;

claim(vehicle.motors, undefined);
claim(robot.motors, undefined);

machine.motors = 4;
claim(vehicle.motors, 4);
claim(robot.motors, 4);

module.exports = {
  machine,
  vehicle,
  robot,
};
