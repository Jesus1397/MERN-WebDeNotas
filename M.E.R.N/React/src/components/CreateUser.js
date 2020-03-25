import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: ""
  };
  
  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };

  onChangeUsurname = event => {
    this.setState({
      username: event.target.value
    });
  };

  onSubmitUser = async event => {
    event.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username
    });
    this.setState({
      username: ""
    });
    this.getUsers();
  };

  deleteUser = async id => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="container py-4">
        <div className="row ">
          <div className="col-md-4 py-3">
            <div className="card card-body">
              <h3>Create new user</h3>
              <form action="" onSubmit={this.onSubmitUser}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    id=""
                    onChange={this.onChangeUsurname}
                    value={this.state.username}
                  />
                </div>
                <button type="submit" className="btn btn-success btn-block">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-8 py-3">
            <ul className="list-group">
              {this.state.users.map(user => (
                <li
                  className="list-group-item list-group-item-action"
                  key={user._id}
                  onDoubleClick={() => this.deleteUser(user._id)}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
