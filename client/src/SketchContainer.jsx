// @flow
import React, { Component } from 'react'
import p5 from 'p5'

type PropsType = {
  sketch: p5 => void,
}

export default class SketchContainer extends Component<PropsType, *> {
  myRef: *

  constructor(props: *) {
    super(props)
    this.myRef = React.createRef()
  }

  async componentDidMount() {
    new p5(this.props.sketch, this.myRef.current)
  }

  render() {
    return <div ref={this.myRef} />
  }
}
