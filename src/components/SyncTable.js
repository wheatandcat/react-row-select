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
    isCheckAll: PropTypes.func,
  }

  getChildContext() {
    return {
      onCheck: this.onCheck,
      onCheckAll: this.onCheckAll,
      onRowCount: this.onRowCount,
      isChecked: this.isChecked,
      isCheckAll: this.isCheckAll,
    }
  }

  state = { checkeds: [], rowCount: 0, checkAll: false }

  componentWillMount() {
    this.setState({
      checkeds: this.props.checkeds || [],
      checkAll: this.props.checkeds.length === 0 ? false : this.state.checkAll,
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checkeds: nextProps.checkeds || [],
      checkAll: nextProps.checkeds.length === 0 ? false : this.state.checkAll,
    })
  }

  onRowCount = async rowCount => {
    this.setState({
      rowCount,
    })
  }

  isCheckAll = () => {
    return this.state.checkAll
  }

  onCheck = async targetIndex => {
    let checkeds = await this.state.checkeds

    if (this.state.checkeds.indexOf(targetIndex) >= 0) {
      checkeds = await this.state.checkeds
        .filter(index => index !== targetIndex)
        .sort()
    } else {
      checkeds = await [...this.state.checkeds, targetIndex].sort()
    }

    await this.setState({
      checkeds,
      checkAll: checkeds.length === 0 ? false : this.state.checkAll,
    })
    return this.props.onCheck(this.state.checkeds)
  }

  onCheckAll = async () => {
    let all = []

    if (!this.state.checkAll) {
      for (let i = 0; i < this.state.rowCount; i++) {
        all.push(i)
      }
    }

    await this.setState({ checkeds: all, checkAll: !this.state.checkAll })
    await this.props.onCheck(all)
  }

  isChecked = index => {
    return this.state.checkeds.indexOf(index) >= 0
  }

  render() {
    return <table>{this.props.children}</table>
  }
}
