/*import * as React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../servicios/auth"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: "flex",
        flex: "2",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/perfil">Perfil</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate("/app/login"))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
*/

import React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import { /*getUser*/ isLoggedIn, logout } from "../servicios/auth"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: "flex",
        flex: "2",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/perfil">Perfil</Link>
        {` `}
        <Link to="/app/login">log in</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate("/app/login"))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
