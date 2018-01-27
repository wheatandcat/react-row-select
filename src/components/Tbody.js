// @flow
import React, { type Node } from "react"

type Props = {
  children?: Node
}

const Tbody = ({ children }: Props) => {
  return <tbody>{children}</tbody>
}

export default Tbody
