// Write your code here
// Assuming that you have dark-theme-img.png and light-theme-img.png in your public folder or adjust the paths accordingly

// Import necessary libraries and context
import {Link, withRouter} from 'react-router-dom'
import Context from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <Context.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickColor = () => {
        toggleTheme()
      }

      return (
        <div className={`BgForHeader ${isDarkTheme ? 'dark' : 'light'}`}>
          <ul>
            <li className="liWebSiteLogo">
              <img
                className="webSiteLogo"
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </li>
          </ul>
          <ul className="HomeAndJobs">
            <Link to="/" className="link">
              <li
                className={`HomeAndJobsStyle ${
                  isDarkTheme ? 'light-text' : 'dark-text'
                }`}
              >
                Home
              </li>
            </Link>

            <Link to="/about" className="link">
              <li
                className={`HomeAndJobsStyle ${
                  isDarkTheme ? 'light-text' : 'dark-text'
                }`}
              >
                About
              </li>
            </Link>
          </ul>
          <div>
            <button
              className={`button ${isDarkTheme ? 'dark' : 'light'}`}
              type="button"
              onClick={onClickColor}
              data-testid="theme"
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                alt="theme"
                className="liWebSiteLogo"
              />
            </button>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default withRouter(Navbar)
