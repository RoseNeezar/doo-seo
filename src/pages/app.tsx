import React from "react"
import { Router } from "@reach/router"
import Dynamic from "../App/features/Dynamic"
import Init from "../App/features/Init"

const App = () => {
  return (
    <div>
      <Router>
        <Init path="/app" />
        <Dynamic path="/app/:currency" />
      </Router>
    </div>
  )
}

export default App
