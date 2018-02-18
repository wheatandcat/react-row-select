import React, { Component, Children } from "react"
import PropTypes from "prop-types"

class Tbody extends Component {
  state = { trs: null }

  static contextTypes = {
    onRowCount: PropTypes.func,
  }

  async componentWillMount() {
    await this.setTrs(this.props)
  }

  async componentWillReceiveProps(nextProps) {
    await this.setTrs(nextProps)
  }

  setTrs = async props => {
    const trs = await Children.map(props.children, (item, index) => ({
      ...item,
      props: {
        ...item.props,
        index,
      },
    }))

    if (!trs) {
      return
    }

    if ((this.state.trs ? this.state.trs.length : 0) !== trs.length) {
      await this.context.onRowCount(trs.length)
    }

    await this.setState({ trs })
  }

  render() {
    if (this.state.trs === null) {
      return null
    }

    return <tbody>{this.state.trs.map(tr => tr)}</tbody>
  }
}

export default Tbody
