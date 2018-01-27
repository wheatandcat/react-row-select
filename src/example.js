import React from "react"
import { render } from "react-dom"
import Table, { Thead, Tbody, Tr, Th, Td } from "./"

const Custom = () => (
  <div>
    <h2>react-row-select-table demos</h2>
    <h5>
      github:{" "}
      <a
        href="https://github.com/wheatandcat/react-row-select-table"
        target="_black"
      >
        https://github.com/wheatandcat/react-row-select-table
      </a>
    </h5>
    <h3>table</h3>
    <Table onCheck={value => console.log(value)}>
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
    <br />

    <div>
      <h3>src</h3>
      <pre style={{ backgroundColor: "F9F9F9" }}>
        <code className="language-jsx">
          {`
      import React from "react"
      import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table"

      const Custom = () => (
        <Table onCheck={value => console.log(value)} defaultCheckeds={[1,3]}>
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
      )
      `}
        </code>
      </pre>
    </div>
  </div>
)

render(
  <div>
    <Custom />
  </div>,
  document.getElementById("root")
)
