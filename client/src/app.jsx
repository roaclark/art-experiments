// @flow
import React, { Component } from 'react'
import { render } from 'react-dom'

import AsyncSketch from './AsyncSketch'
import SketchContainer from './SketchContainer'
import exampleSketch from './sketches/example'
import bouncingSketch from './sketches/bouncing'
import './styles.css'

export default class App extends Component<*, *> {
  async componentDidMount() {
    const response = await fetch('api')
    const message = response.ok
      ? await response.text()
      : 'The server is sad. :('
    this.setState({ text: message })
  }

  render() {
    return (
      <div>
        <AsyncSketch />
        <SketchContainer sketch={bouncingSketch} />
        <SketchContainer sketch={exampleSketch} />
      </div>
    )
  }
}

const root = document.getElementById('app')
if (root) {
  render(<App />, root)
}
