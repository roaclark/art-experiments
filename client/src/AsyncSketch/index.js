// @flow
import React, { Component } from 'react'

import sketch, { addPoint, WIDTH, HEIGHT } from './sketch'
import SketchContainer from '../SketchContainer'

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

function randomPoints() {
  setInterval(async () => {
    for (let i = 0; i < 500; i++) {
      addPoint({ x: randomInt(WIDTH), y: randomInt(HEIGHT) })
    }
    randomPoints()
    // console.log('foo')
  }, 1000)
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
