import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">{ greeting }</h1>
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

class App extends Component {
  state = {
    greeting: "Hi, Envato Class of 10th October!",
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
    // First time that the DOM is live
  }

  componentWillUnmount() {
    // Last instant that the DOM is live
  }

  render() {
    console.log("Rendered!")
    return (
      <div className="App">
        <AppHeader
          greeting={ this.state.greeting }
        />
        <AppIntro/>
        <p onClick={this.handleClick}>Click here!!</p>
      </div>
    )
  }
}

export default App
