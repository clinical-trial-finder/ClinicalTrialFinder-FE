import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { signUp } from "../actions/index";

class SignUp extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signUp = e => {
    e.preventDefault();
    this.props.signUp(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/");
      }
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <h2>Sign Up</h2>
        <h5>Create your username</h5>
        <h5>and password below</h5>
        <form className="login-form" onSubmit={this.signUp}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button>
            {this.props.signing ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
