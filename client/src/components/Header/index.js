import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className="title">Y  O  G  A <span className='span'> | for everyone</span></h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Classes</Link>
              <a href="/" onClick={logout}>
                LOGOUT
              </a>
            </>
          ) : (
            <>
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGNUP</Link>
              <Link to="/VirtualClasses">VIRTUAL CLASSES</Link>
              <Link to="/TypesofYoga">TYPES OF YOGA</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
