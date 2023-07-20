import React, { Component } from "react";

export default class ChatBot extends Component {
  render() {
    return (
      <div className="container mg-2" >
        <div className="column is-multiline">
          <div className="column is-12">
            <h1 className="title">Add chatbot</h1>
          </div>

          <div className="column is-12">
            <form mg-2>
              <div className="field">
                <label>Name </label>
                <div className="control">
                  <input type="text" name="company" className="input" />
                </div>
              </div>
              <div className="field">
                <label>Organization </label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>
              <div className="field">
                <label>Created by</label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>{" "}
              <div className="field">
                <label>Handle Name </label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>{" "}
              <div className="field">
                <label>Tools</label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>{" "}
              <div className="field">
                <label> Open Api Key</label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>
              <div className="field">
                <label>Initial message </label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>{" "}
              <div className="field">
                <label>Intro Message </label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>
              <div className="field">
                <label>Rules</label>
                <div className="control">
                  <input type="text" className="input" name="orghdle" />
                </div>
              </div>
              <br />
              <div className="field">
                <div className="control">
                  <button className="button is-success">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}
