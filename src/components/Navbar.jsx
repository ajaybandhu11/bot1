import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/v1/token/logout");
      console.log("Logged out");
      this.setState({ isLoggedIn: false });
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");

    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    const isLoggedIn = !!localStorage.getItem("token");
    this.setState({ isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {isLoggedIn ? (
                <>
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/organization" className="nav-link">
                      Organization
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/chatbot" className="nav-link">
                      Chatbot
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                {isLoggedIn ? (
                  <>
                    <button onClick={this.handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <li className="nav-item active">
                      <Link to="/log-in" className="nav-link">
                        <strong>Login</strong>
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link to="/sign-up" className="nav-link">
                        <strong>Signup</strong>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
