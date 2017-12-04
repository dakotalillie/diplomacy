const turn = document.getElementById("turn")
const phase = document.getElementById("phase")
const timer = document.getElementById("timer")
const timerToggleButton = document.getElementById("timer_toggle")
let currentTimer;

const users = {
  u1: new User("user1"),
  u2: new User("user2"),
  u3: new User("user3"),
  u4: new User("user4"),
  u5: new User("user5"),
  u6: new User("user6"),
  u7: new User("user7")
};

const game = new Game("test game", new Turn(
  "Spring", 1901, "Diplomatic Phase", 
), true);

