// @flow
import React, { Component, Children, type Node } from "react"
import PropTypes from "prop-types"

class Tr extends Component {
  state = { typeName: null }

  static contextTypes = {
    onCheck: PropTypes.func
  }

  async componentWillMount() {
    console.log(this.context)
    this.context.onCheck("test")

    const types = await Children.map(this.props.children, item => ({
      name: item.type.name
    }))

    this.setState({ typeName: types[0].name })
  }

  render() {
    if (this.state.typeName === null) {
      return null
    }

    return (
      <tr>
        <td>
          <input type="checkbox" name="riyu" value="3" />
        </td>
        {this.props.children}
      </tr>
    )
  }
}

export default Tr
