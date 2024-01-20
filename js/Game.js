AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#coin1" },
  },

  init: function () {
    var duration = 120;
    var timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

  update: function () {
    this.isCollided(this.data.elementId);
  },

  startTimer: function (duration, timerEl) {
   // display the clock timer
  },
  isCollided: function (elemntId) {
    var element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#coin")) {
        element.setAttribute("visible", false);
        this.updateScore();
        this.updateTargets();
      } 
      else {
        this.gameOver();
      }
    });
  },
  updateTargets: function () {
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  },
  updateScore: function () {
    //Write the function to update score
    
  },
  gameOver: function () {
   
    //add gameOver text
  },
});
