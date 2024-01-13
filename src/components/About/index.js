// Write your code here
// Write your code here
import {Component} from 'react'
import Context from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

class About extends Component {
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
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                  }
                  alt="about"
                />
                <h1>About</h1>
              </div>
            )
          }}
        </Context.Consumer>
      </div>
    )
  }
}

export default About
