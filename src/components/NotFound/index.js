// Write your code here
// Write your code here
// Write your code here
import {Component} from 'react'

import Context from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Context.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <div
                className={`home-container ${isDarkTheme ? 'dark' : 'light'}`}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1 className={isDarkTheme ? 'dark' : 'light'}>
                  Lost Your Way?
                </h1>
                <p className={isDarkTheme ? 'dark' : 'light'}>
                  We cannot seem to find the page
                </p>
              </div>
            )
          }}
        </Context.Consumer>
      </div>
    )
  }
}

export default NotFound
