import React, { FC, useContext } from "react"
import { ThemeProvider } from "styled-components"
import { DarkTheme, LightTheme } from "./../../themes"
import { RootStoreContext } from "../Store/rootStore"
import { observer } from "mobx-react-lite"

const Layout: FC = ({ children }) => {
  const rootStore = useContext(RootStoreContext)
  const { toggleTheme } = rootStore.themeStore
  return (
    <ThemeProvider theme={toggleTheme ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default observer(Layout)
