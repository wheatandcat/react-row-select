import React, { Component } from "react"

class Td extends Component {
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps) {}

  render() {
    return <td>{this.props.children}</td>
  }
}

export default Td
