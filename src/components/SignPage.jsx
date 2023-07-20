import axios from "axios";
import { useState } from "react";
import myConfig from "./configs/config";
import { toast } from "react-toastify";

const SignPage = () => {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      first_name,
      last_name,
      email,
      username: email,
      password,
      c_password,
    };
    let USER_URL = myConfig.API_URL + "/users/";
    axios({
      baseURL: USER_URL,
      method: "POST",
      data: data,
    })
      .then((res) => {
        if (res.status === 201) {
          toast({
            message: "Account was created ,please log in",
            type: "is-success",
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: "bottom-right",
          });
          window.location.href = "/log-in";
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section
      class="vh-100"
      style={{
        backgroundcolor: "#eee",
        margin: "auto",
        width: "60%",
        padding: "10px",
      }}
    >
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style={{ borderRadius: "25px;" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form class="mx-1 mx-md-4" onSubmit={handleRegister}>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            value={first_name}
                            onChange={(e) => setFname(e.target.value)}
                            style={{ height: "30px", width: "300px" }}
                          />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            value={last_name}
                            onChange={(e) => setLname(e.target.value)}
                            style={{ height: "30px", width: "300px" }}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            value={email}
                            onChange={(e) => setMail(e.target.value)}
                            style={{ height: "30px", width: "300px" }}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            class="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ height: "30px", width: "300px" }}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">
                            Repeat password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cd"
                            class="form-control"
                            value={c_password}
                            onChange={(e) => setCPassword(e.target.value)}
                            style={{ height: "30px", width: "300px" }}
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignPage;
