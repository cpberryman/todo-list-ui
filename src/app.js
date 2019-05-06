import React from 'react'
import { render } from 'react-dom'
import AddItemForm from "./index.js";

const init = () => {
  render(<AddItemForm />, document.getElementById('app'))
}

init()
