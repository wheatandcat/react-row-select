// @flow
import React, { Component, type Node } from "react"
import PropTypes from "prop-types"

export default class extends Component {
  static propTypes = {
    onCheck: PropTypes.func
  }
  static childContextTypes = {
    onCheck: PropTypes.func
  }

  getChildContext() {
    return {
      onCheck: this.props.onCheck
    }
  }

  render() {
    return <table>{this.props.children}</table>
  }
}
