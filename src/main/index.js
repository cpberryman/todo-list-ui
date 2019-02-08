import React from 'react'
import {render} from 'react-dom'
import {ToDoListApp} from "./js/components/ToDoListApp";

const init = () => {
  render(<ToDoListApp />, document.getElementById('app'))
}

init()
