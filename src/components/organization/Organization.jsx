import React, { Component } from "react";
import {Link} from 'react-router-dom';


const organizationsData = [
  { OrganizationName: "Google", OrganizationHandle: "google_1" },
];

export default class Organization extends Component {
  render() {
    return (
      <div>
        <h1>Organizations</h1>
        <ul>
          {organizationsData.map((organization, index) => (
            <li key={index}>
              <strong>Organization Name:</strong> {organization.OrganizationName},{" "}
              <strong>Organization Handle:</strong> {organization.OrganizationHandle}
            </li>

          ))}
        </ul>
        <div className="add-org">
        <Link to='/organization/add' className="link">Add Organization</Link>
        </div>
      </div>
    );
  }
}
