import React, { Component } from 'react';
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userid : '',
      password: '',
      remember: false
    };
  }

  componentDidMount() {
    if (localStorage.remember && localStorage.userid !== "") {
        this.setState({
            remember: true,
            userid: localStorage.userid,
            password: localStorage.password
        })
    }
  }  

  handleInputChange = (event) => {
    const { value, name } = event.target;
    if (name !== "remember") {      
      this.setState({
        [name]: value
      });
    }
    else {      
      this.setState({remember: !this.state.remember});
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { userid, password, remember } = this.state
    if (remember && userid !== "") {
        localStorage.userid = userid
        localStorage.password = password
        localStorage.remember = remember
    }

    if (!remember) {
      localStorage.userid = ''
      localStorage.password = ''
      localStorage.remember = false   
    }

    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/adminhome');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div>
        <div id="login">
          <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" onSubmit={this.onSubmit}>
                    <h3 class="text-center">Login</h3>
                      <div class="form-group">
                        <label for="username">Userid:</label><br></br>
                        <input 
                          type="text" 
                          name="userid" 
                          id="username" 
                          class="form-control"
                          placeholder="Enter userid"
                          value={this.state.userid}
                          onChange={this.handleInputChange}
                          required>
                        </input>
                      </div>
                      <div class="form-group">
                        <label for="password">Password:</label><br></br>
                        <input 
                          type="password"
                          name="password"
                          id="password"
                          class="form-control"
                          placeholder="Enter password"
                          value={this.state.password}
                          onChange={this.handleInputChange}
                          required>
                        </input>
                      </div>
                      <div class="form-group">
                        <label for="remember"><span>Remember me</span> 
                          <span><input id="remember" name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange}></input></span>
                        </label><br></br>
                        <input type="submit" name="submit" class="btn greenbtn" value="Submit"></input>
                      </div>
                  </form>                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}