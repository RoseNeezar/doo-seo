import styled from "styled-components"

export const Header = styled.div`
  height: 50px;
  background-color: ${({ theme }) => theme.action};
  color: ${({ theme }) => theme.reaction};
`
