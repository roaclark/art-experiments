const WIDTH = 500
const HEIGHT = 500

const BACKGROUND_COLOR = 100
const BALL_COLOR = 200

const DIAMETER = 25
const ACCELERATION = 1
const DAMPENING = 0.9

let x = WIDTH / 2
let y = DIAMETER
let speed = 0

function updateBallPosition() {
  y = Math.min(y + speed, HEIGHT - DIAMETER / 2)
  speed += ACCELERATION
  if (y == HEIGHT - DIAMETER / 2) {
    speed *= -DAMPENING
  }
}

export default p => {
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT)
  }

  p.draw = () => {
    p.background(BACKGROUND_COLOR)
    p.fill(BALL_COLOR)
    p.circle(x, y, DIAMETER)

    updateBallPosition()
  }
}
