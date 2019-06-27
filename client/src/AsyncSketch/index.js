// @flow
import React, { Component } from 'react'

import sketch, { addPoint, WIDTH, HEIGHT } from './sketch'
import SketchContainer from '../SketchContainer'

const POINTS_PER_INTERVAL = 700
const INTERVALS_PER_SECOND = 10
const MILLISECONDS_PER_SECOND = 1000

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

function randomPoints() {
  setInterval(async () => {
    for (let i = 0; i < POINTS_PER_INTERVAL; i++) {
      addPoint({ x: randomInt(WIDTH), y: randomInt(HEIGHT) })
    }
    randomPoints()
  }, MILLISECONDS_PER_SECOND / INTERVALS_PER_SECOND)
}

export default class AsyncSketch extends Component<*, *> {
  constructor(props: *) {
    super(props)
  }

  async componentDidMount() {
    randomPoints()
  }

  render() {
    return <SketchContainer sketch={sketch} />
  }
}
