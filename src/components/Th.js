// @flow
import React, { Children, type Node } from "react"

type Props = {
  children?: Node
}

const Th = ({ children }: Props) => {
  return <th>{children}</th>
}

export default Th
