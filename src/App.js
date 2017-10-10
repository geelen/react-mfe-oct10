import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

class App extends Component {
  constructor() {
    super()
    this.state = { foo: 'bar' }
  }

  handleClick = () => {
    console.log("clicked!")
    if (this.state.foo === 'bar') {
      this.setState({ foo: 'baz!!!!' })
    } else {
      this.setState({ foo: 'bar' })
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppIntro/>
        <p onClick={this.handleClick}>{this.state.foo}</p>
      </div>
    )
  }
}

export default App
