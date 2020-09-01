import { configure } from "mobx"
import { createContext } from "react"
import ThemeStore from "./themeStore"

configure({ enforceActions: "always" })

export class RootStore {
  themeStore: ThemeStore

  constructor() {
    this.themeStore = new ThemeStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())
