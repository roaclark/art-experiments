export const WIDTH = 200
export const HEIGHT = 100

const BACKGROUND_COLOR = 200
const POINT_COLOR = 50
const BATCH_SIZE = 50

const points = []

export function addPoint(p) {
  if (points.length < 1000) {
    points.push(p)
  }
}

export default p => {
  p.setup = function() {
    p.createCanvas(WIDTH, HEIGHT)
    p.background(BACKGROUND_COLOR)
  }

  p.draw = function() {
    p.fill(POINT_COLOR)

    const pointsToDraw = points.splice(0, BATCH_SIZE)

    pointsToDraw.map(point => p.point(point.x, point.y))
  }
}
