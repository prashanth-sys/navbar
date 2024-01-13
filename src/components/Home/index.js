// Write your code here
// Write your code here
import {Component} from 'react'

import Context from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

class Home extends Component {
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
                      ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                  }
                  alt="home"
                />
                <h1>Home</h1>
              </div>
            )
          }}
        </Context.Consumer>
      </div>
    )
  }
}

export default Home
