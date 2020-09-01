import { configure } from "mobx"
import { createContext } from "react"
import ThemeStore from "./themeStore"
import ModalStore from "./modalStore"

configure({ enforceActions: "always" })

export class RootStore {
  themeStore: ThemeStore
  modalStore: ModalStore
  constructor() {
    this.themeStore = new ThemeStore(this)
    this.modalStore = new ModalStore(this)
  }
}

export const RootStoreContext = createContext(new RootStore())
