import React, { Component } from "react"

class Td extends Component {
  state = {
    type: "Td",
  }
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps) {}

  render() {
    return <td>{this.props.children}</td>
  }
}

Td.displayName = "Td"

export default Td
