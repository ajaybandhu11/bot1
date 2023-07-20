import { BrowserRouter , Routes, Route} from "react-router-dom";
import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import SignPage from "./components/SignPage";
import Dashboard from "./components/Dashboard";
import Organization from "./components/organization/Organization";
import AddOrganization from "./components/organization/AddOrganization";
import ChatBot from "./components/chatbot/ChatBot";
class App extends Component {
  state = {
    isAuthenticated: false,
  };

  componentDidMount() {
    if (localStorage.getItem("user-token") !== null) {
      this.setState({ isAuthenticated: true });
    } else {
      this.setState({ isAuthenticated: false });
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route  path="/log-in" element={<LoginPage/>} />
            <Route path="/sign-up" element={<SignPage/>} />
            <Route path="/organization" element={< Organization/>}/>
            <Route path="/organization/add"  element={<AddOrganization/>}/>
            <Route path="/chatbot" element={< ChatBot/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
