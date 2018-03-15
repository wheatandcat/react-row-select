import React, { Component } from "react"
import PropTypes from "prop-types"

export default class extends Component {
  static propTypes = {
    onCheck: PropTypes.func,
    checkeds: PropTypes.arrayOf(PropTypes.number),
  }
  static childContextTypes = {
    onCheck: PropTypes.func,
    onCheckAll: PropTypes.func,
    onRowCount: PropTypes.func,
    isChecked: PropTypes.func,
  }

  getChildContext() {
    return {
      onCheck: this.onCheck,
      onCheckAll: this.onCheckAll,
      onRowCount: this.onRowCount,
      isChecked: this.isChecked,
    }
  }

  state = { checkeds: [], rowCount: 0 }

  componentWillMount() {
    this.setState({ checkeds: this.props.checkeds || [] })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checkeds: nextProps.checkeds || [] })
  }

  onRowCount = async rowCount => {
    this.setState({
      rowCount,
    })
  }

  onCheck = async (targetIndex, checked) => {
    let checkeds = await this.state.checkeds

    if (checked) {
      checkeds = await [...this.state.checkeds, targetIndex].sort()
    } else {
      checkeds = await this.state.checkeds
        .filter(index => index !== targetIndex)
        .sort()
    }

    await this.setState({ checkeds })
    return this.props.onCheck(this.state.checkeds)
  }

  onCheckAll = async checked => {
    let all = []

    if (checked) {
      for (let i = 0; i < this.state.rowCount; i++) {
        all.push(i)
      }
    }

    await this.setState({ checkeds: all })
    return this.props.onCheck(all)
  }

  isChecked = index => {
    return this.state.checkeds.indexOf(index) >= 0
  }

  render() {
    return <table>{this.props.children}</table>
  }
}
