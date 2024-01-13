import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import Context from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState({isDarkTheme: true})
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
