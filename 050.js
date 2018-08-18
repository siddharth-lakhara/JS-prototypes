
const machine = {
  parts: [],
  capabilities: {},
};
const robot = {};
const vehicle = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;

claim(robot.parts, []);
claim(vehicle.parts, []);
claim(robot.capabilities, {});
claim(vehicle.capabilities, {});

robot.parts.push('core');
claim(robot.parts, ['core']);
claim(vehicle.parts, ['core']);

vehicle.capabilities.fly = true;
claim(robot.capabilities, { fly: true });
claim(vehicle.capabilities, { fly: true });

module.exports = {
  machine,
  vehicle,
  robot,
};
