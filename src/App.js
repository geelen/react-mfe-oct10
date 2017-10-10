import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">{greeting}</h1>
  </header>
)

const AppIntro = () => {
  console.log("Rendered AppIntro")
  return (
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  )
}

let hasEvenImported = false
class App extends Component {
  state = {
    greeting: "Hi, Envato Class of 10th October!",
    loadedLibrary: !!hasEvenImported,
  }

  handleClick = () => {
    console.log("clicked!")
    if (this.state.greeting.endsWith('!!!!')) {
      this.setState({ greeting: "Hi, Envato Class of 10th October!", })
    } else {
      this.setState({ greeting: this.state.greeting + '!' })
    }
  }

  componentDidMount() {
    if (!hasEvenImported) {
      hasEvenImported = true
      import('./some-expensive-dependency').then(lib => {
        this.setState({loadedLibrary: lib.default})
      })
    }
  }

  componentWillUnmount() {
    // Last instant that the DOM is live
  }

  render() {
    console.log("Rendered!")
    return !this.state.loadedLibrary
      ? <p>Loading...</p>
      : (
        <SomeComponentThatRequires dependency={this.state.loadedLibrary}/>
      )
  }
}

export default App
