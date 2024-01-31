import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {toggleTheme, isDarkTheme} = value
          const navClass = isDarkTheme ? 'nav navDark' : '  nav   navLight'
          const classH = isDarkTheme ? 'l' : 'h'

          return (
            <nav className={navClass}>
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                  alt="website logo"
                  className="light"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                  className="light"
                />
              )}

              <ul>
                <Link to="/">
                  <li>
                    <h1 className={classH}>Home</h1>
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <h1 className={classH}>About</h1>
                  </li>
                </Link>
              </ul>
              {isDarkTheme ? (
                <button
                  type="button"
                  className="but"
                  onClick={toggleTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                    className="dark"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="but"
                  onClick={toggleTheme}
                  data-testid="theme"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                    className="dark"
                  />
                </button>
              )}
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Navbar
