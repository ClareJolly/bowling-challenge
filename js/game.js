function Game() {
  this.currentframenumber = 0
  this.currentframe
  this.frames = []
  this.MAXIMUMFRAMES = 10
};

Game.prototype.bowl = function (pins) {
  if (this.currentframenumber === 0) {
    // console.log("start game")
    this.newFrame()
    this.currentframe.bowl(pins)
  }
  else {

    if (this.currentframe.isFrameOpen() === true) {
      this.currentframe.bowl(pins)
    }
    else
    {
      this.newFrame()
      this.currentframe.bowl(pins)
    }
  }
}

Game.prototype.newFrame = function () {
  this.currentframe = new Frame()
  this.frames.push(this.currentframe)
  this.currentframenumber += 1
}

Game.prototype.getCurrentFrameNumber = function () {
  return this.frames.length
}
