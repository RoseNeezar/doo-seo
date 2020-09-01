import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles, DarkTheme, LightTheme } from "./src/themes"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
