import React, { Component, Children, type Node } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const CheckBoxTh = styled.th`
  width: 3.5rem;
  cursor: pointer;
  text-align: left;
  font-weight: normal;
`

const CheckBoxTd = styled.td`
  width: 3.5rem;
  cursor: pointer;
`

class Tr extends Component {
  static propTypes = {
    isCheckRow: PropTypes.bool,
  }

  static defaultProps = {
    isCheckRow: true,
  }

  state = { typeName: null }

  static contextTypes = {
    onCheck: PropTypes.func,
    onCheckAll: PropTypes.func,
    isChecked: PropTypes.func,
    isCheckAll: PropTypes.func,
  }

  async componentWillMount() {
    const types = await Children.map(this.props.children, item => {
      return {
        name: item.type.displayName,
      }
    })

    const typeName = types[0].name

    await this.setState({
      typeName: typeName,
      checked:
        typeName === "Td" ? this.context.isChecked(this.props.index) : false,
    })
  }

  render() {
    if (this.state.typeName === null) {
      return null
    }

    return (
      <tr
        onClick={() => {
          if (this.state.typeName === "Th") {
            return
          }

          if (!this.props.isCheckRow) {
            return
          }

          this.context.onCheck(this.props.index)
        }}
        className={` ${this.state.typeName === "Td" ? "tr-body" : ""} ${
          this.state.typeName === "Td" &&
          this.context.isChecked(this.props.index)
            ? "tr-checked"
            : ""
        }`}
      >
        {this.state.typeName === "Th" ? (
          <CheckBoxTh
            onClick={() => {
              this.context.onCheckAll()
            }}
          >
            <input
              type="checkbox"
              checked={this.context.isCheckAll()}
              readOnly
            />
          </CheckBoxTh>
        ) : (
          <CheckBoxTd
            onClick={() => {
              if (this.props.isCheckRow) {
                return
              }

              this.context.onCheck(this.props.index)
            }}
          >
            <input
              type="checkbox"
              checked={this.context.isChecked(this.props.index)}
              readOnly
            />
          </CheckBoxTd>
        )}
        {this.props.children}
      </tr>
    )
  }
}

export default Tr
