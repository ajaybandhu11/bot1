import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import myConfig from "./configs/config";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);

    axios.defaults.headers.common["Authorization"] = "";

    let LOGIN_URL = myConfig.CRU_URL + "/api/v1/token/login/";
    axios
      .post(LOGIN_URL, formdata)
      .then((res) => {
        const token = res.data.auth_token;

        axios.defaults.headers.common["Authorization"] = "Token " + token;
        localStorage.setItem("token", token);
        console.log(token);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#eee",
        margin: "auto",
        width: "60%",
        padding: "20px",
      }}
    >
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ height: "30px", width: "300px" }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ height: "30px", width: "300px" }}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
