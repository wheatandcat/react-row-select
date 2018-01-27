import React, { Component, Children } from "react"
import PropTypes from "prop-types"

class Tbody extends Component {
  state = { trs: null }

  static contextTypes = {
    onRowCount: PropTypes.func,
  }

  async componentWillMount() {
    const trs = await Children.map(this.props.children, (item, index) => ({
      ...item,
      props: {
        ...item.props,
        index,
      },
    }))

    await this.context.onRowCount(trs.length)

    this.setState({ trs })
  }
  render() {
    if (this.state.trs === null) {
      return null
    }

    return <tbody>{this.state.trs.map(tr => tr)}</tbody>
  }
}

export default Tbody
