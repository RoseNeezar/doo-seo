import React, { useContext } from "react"
import styled from "styled-components"
import Layout from "../App/Layout/Layout"
import { RootStoreContext } from "../App/Store/rootStore"
import { observer } from "mobx-react-lite"
import { Header } from "../App/Base/Header"

const PageLayout = styled.div`
  background-color: ${({ theme }) => theme.primary};
`

const IndexPage: React.FC = () => {
  const rootStore = useContext(RootStoreContext)
  const { setToggleTheme, toggleTheme } = rootStore.themeStore

  const HandleTheme = () => {
    setToggleTheme()
    console.log(toggleTheme)
  }
  console.log(toggleTheme)
  return (
    <Layout>
      <Header>header</Header>
      <PageLayout>
        <h1>hello world</h1>
        <button onClick={() => HandleTheme()}>Click me</button>
      </PageLayout>
    </Layout>
  )
}

export default observer(IndexPage)
