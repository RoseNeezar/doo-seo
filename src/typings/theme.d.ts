import "styled-components"
import { LightTheme, DarkTheme } from "./../themes"

type ThemeL = typeof LightTheme
type ThemeD = typeof DarkTheme

declare module "styled-components" {
  export interface DefaultTheme extends ThemeL, ThemeD {}
}
