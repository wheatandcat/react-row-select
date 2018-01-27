// @flow
import React, { type Node } from "react"

type Props = {
  children?: Node,
}

const Td = ({ children }: Props) => {
  return <td>{children}</td>
}

export default Td
