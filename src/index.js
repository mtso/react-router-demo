import BasicExample from './BasicExample'
import React from 'react'
import ReactDOM from 'react-dom'

let container = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)

ReactDOM.render(
  <BasicExample/>,
  container
)