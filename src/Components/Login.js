import React, { Component } from 'react';
import './Login.css';
import BrowserHistory from '../Utils/BrowserHistory';


const initialState = {
  name: "",
  password: "",
  nameError: "",
  passwordError: ""
};
export default class Login extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Please enter your username.";
    }

    if (!this.state.password ){
        passwordError = "Please enter your password.";
    }

    if (passwordError || nameError) {
      this.setState({ passwordError, nameError });
      return false;
    }
    BrowserHistory.push("/AllPost");
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    this.setState(initialState);
    }
  };
  onHandleClick(){
    BrowserHistory.push("/Register");
    }
  render() {
    return (
      <div>
       <h1>Login </h1>
       <div className="container4">
      <form onSubmit={this.handleSubmit}>
        <div className="container1">
          <label>UserName :</label>
          <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          <div
          className="error" > {this.state.nameError}</div><br></br>
        </div>
        <div className="container1">
        <label>Password :</label>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
          <div className="error">{this.state.passwordError}</div><br></br>
        </div>
       <div className="container2">
       <div ><button onClick={this.onHandleClick} className="button">Register</button></div>
       </div> 
      </form>
      <div className="container3">
          <button type="submit" onClick={this.validate} >Login</button>
      </div>
      </div>
      </div>
     
    );
  }
}




