// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import Table from "./Table"
import Thead from "./Thead"
import Tbody from "./Tbody"
import Tr from "./Tr"
import Th from "./Th"
import Td from "./Td"

storiesOf("components/Table", module).add("Table", () => (
  <Table
    onCheck={val => {
      console.log(val)
      console.log("onCheck")
    }}
  >
    <Thead>
      <Tr>
        <Th>aaaaa</Th>
        <Th>aaaaa</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>aaaaa</Td>
        <Td>aaaaa</Td>
      </Tr>
    </Tbody>
  </Table>
))
