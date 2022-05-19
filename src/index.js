import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./app"
import { ContextProvider } from "./context/context"

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
