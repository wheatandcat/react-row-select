// @flow
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { storiesOf } from "@storybook/react"
import { withKnobs, array, boolean } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Table from "./Table"
import CustomSyncTable from "./CustomSyncTable"
import Thead from "./Thead"
import Tbody from "./Tbody"
import Tr from "./Tr"
import Th from "./Th"
import Td from "./Td"
import CustomTable from "./CustomTable"

class Test extends Component {
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
    const root = ReactDOM.findDOMNode(this.root)
    if (!root) {
      return
    }

    console.log(root)
    console.log(root.offsetHeight)
  }
  render() {
    return (
      <div ref={node => (this.root = node)}>
        <Custom />
      </div>
    )
  }
}

const Custom = () => (
  <CustomSyncTable onCheck={action("onCheck")} checkeds={[1, 2, 3]}>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>name</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>tarou</Td>
      </Tr>
      <Tr>
        <Td>2</Td>
        <Td>zirou</Td>
      </Tr>
      <Tr>
        <Td>3</Td>
        <Td>subrou</Td>
      </Tr>
    </Tbody>
  </CustomSyncTable>
)

storiesOf("DefaultTable", module)
  .addDecorator(withKnobs)
  .add("Test", () => <Test on={boolean("on", true)} />)
  .add("CustomTable", () => (
    <CustomTable onCheck={action("onCheck")}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>tarou</Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>zirou</Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>subrou</Td>
        </Tr>
      </Tbody>
    </CustomTable>
  ))
  .add("default checkeds", () => (
    <CustomTable onCheck={action("onCheck")} defaultCheckeds={[1, 2]}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>tarou</Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>zirou</Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>subrou</Td>
        </Tr>
      </Tbody>
    </CustomTable>
  ))
  .add("isCheckRow = false", () => (
    <CustomTable onCheck={action("onCheck")}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr isCheckRow={false}>
          <Td>1</Td>
          <Td>tarou</Td>
        </Tr>
        <Tr isCheckRow={false}>
          <Td>2</Td>
          <Td>zirou</Td>
        </Tr>
        <Tr isCheckRow={false}>
          <Td>3</Td>
          <Td>subrou</Td>
        </Tr>
      </Tbody>
    </CustomTable>
  ))
  .add("row 0", () => (
    <CustomTable onCheck={action("onCheck")}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody />
    </CustomTable>
  ))
  .add("CustomSyncTable", () => (
    <CustomSyncTable onCheck={action("onCheck")} checkeds={[1, 2, 3]}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>tarou</Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>zirou</Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>subrou</Td>
        </Tr>
      </Tbody>
    </CustomSyncTable>
  ))
storiesOf("BaseTable", module)
  .addDecorator(withKnobs)
  .add("BaseTable", () => (
    <Table onCheck={action("onCheck")}>
      <Thead>
        <Tr>
          <Th>id</Th>
          <Th>name</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>1</Td>
          <Td>tarou</Td>
        </Tr>
        <Tr>
          <Td>2</Td>
          <Td>zirou</Td>
        </Tr>
        <Tr>
          <Td>3</Td>
          <Td>subrou</Td>
        </Tr>
      </Tbody>
    </Table>
  ))
