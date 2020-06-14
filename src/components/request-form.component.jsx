import React from "react";
import Axios from "axios";

class RequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }

  handleChange = event => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.userInput);

    const resp = await Axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    console.log(resp.data);
  };

  render() {
    return (
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Add new user to the list</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Github Username"
                  value={this.state.userInput}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary">Add Card</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForm;
