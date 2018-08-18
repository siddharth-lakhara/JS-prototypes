
const machine = {
  motors: 4,
};

const robot = {
  friendly: true,
};
robot.__proto__ = machine;

const robby = {};
robby.__proto__ = robot;

claim(robby.motors, 4);
claim(robby.friendly, true);

module.exports = {
  machine,
  robot,
  robby,
};
