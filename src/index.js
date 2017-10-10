import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

document.getElementById('root').innerHTML = "Loading!!!"

console.log("Loaded this file!")
setTimeout(() => {
  console.log("Importing!")

  import('./App').then(imports => {
    const App = imports.default
    console.log("Imported!")
    ReactDOM.render(<App/>, document.getElementById('root'))
  })

}, 500)
