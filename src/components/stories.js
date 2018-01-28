// @flow
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Table from "./Table"
import Thead from "./Thead"
import Tbody from "./Tbody"
import Tr from "./Tr"
import Th from "./Th"
import Td from "./Td"
import CustomTable from "./CustomTable"

storiesOf("DefaultTable", module)
  .addDecorator(withKnobs)
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
