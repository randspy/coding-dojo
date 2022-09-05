export class Bowling {
  constructor() {
    this.frames = [];
  }

  get score() {
    let result = this.frames.reduce(
      (acc, frame, idx) => this.accumulateFrameScore(acc, frame, idx),
      0
    );

    return result;
  }

  accumulateFrameScore(acc, frame, idx) {
    acc += this.frames[idx - 1]?.isSpare ? frame.firstPin * 2 : frame.firstPin;

    if (frame.secondPin) {
      acc += frame.secondPin;
      if (this.frames[idx - 1]?.isStrike) {
        acc += frame.firstPin + frame.secondPin;
      }
    }

    return acc;
  }

  roll(pin) {
    if (this.isFirstFrame || this.isLastFrameFull || this.isLastRollStrike) {
      this.frames.push(new Frame());
    }

    this.lastFrame.setPin(pin);
  }

  get isFirstFrame() {
    return !this.frames.length;
  }

  get isLastFrameFull() {
    return this.lastFrame.isFull;
  }

  get lastFrame() {
    return this.frames[this.frames.length - 1];
  }

  get isLastRollStrike() {
    return this.frames[this.frames.length - 1].isStrike;
  }
}

class Frame {
  constructor() {
    this._firstPin = null;
    this._secondPin = null;
  }
  setPin(value) {
    if (!this._firstPin) {
      this._firstPin = value;
    } else {
      this._secondPin = value;
    }
  }
  get firstPin() {
    return this._firstPin;
  }

  get secondPin() {
    return this._secondPin;
  }

  get isFull() {
    return this._firstPin && this._secondPin;
  }

  get isSpare() {
    return !this.isStrike && this._firstPin + this._secondPin === 10;
  }

  get isStrike() {
    return this._firstPin === 10;
  }
}
