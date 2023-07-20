import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myConfig from "../configs/config";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';




const AddOrganization = () => {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Hook for managing history

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      handle,
      created_by: createdBy,
    };

    setIsLoading(true);
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.withCredentials=true;

    let ORG_URL = myConfig.CRU_URL + "/api/v1/organizations/";
    let token = localStorage.getItem("token");
    const csrftoken = Cookies.get('csrftoken')
    console.log(token)
    console.log(csrftoken)
     axios
      .post(ORG_URL, data, {
        headers: {
          'X-CSRFToken': csrftoken,
        },
      })
      .then((res) => {
        
        if (res.status === 200) {
          console.log(res.data);
          toast("Organization created successfully.");
          navigate("/organization"); // Use navigate hook to navigate programmatically
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
      <div className="container">
        <div className="column is-multiline">
          <div className="column is-12">
            <h1 className="title">Add Organizations</h1>
          </div>

          <div className="column is-12">
            <div className="field">
              <label>Organization Name</label>
              <div className="control">
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label>Organization Handle</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label>Created By</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  name="created_by"
                  value={createdBy}
                  onChange={(e) => setCreatedBy(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="field">
              <div className="control">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddOrganization;
