// @flow
import React, { type Node } from "react"
import styled from "styled-components"

type Props = {
  children?: Node,
}

const StyledTh = styled.th`
  font-weight: normal;
`

const Th = ({ children }: Props) => {
  return <StyledTh>{children}</StyledTh>
}

export default Th
