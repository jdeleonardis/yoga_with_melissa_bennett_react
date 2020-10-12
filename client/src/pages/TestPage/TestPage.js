
import React, { Component } from 'react';

export default class TestPage extends Component {
    constructor() {
      super();
      //Set default message
      this.state = {
        message: 'Loading...'
      }
    }
    componentDidMount() {
      //GET message from server using fetch api
      fetch('/api/token')
        .then(res => res.text())
        .then(res => {
          //console.log(res)
          this.setState({message: res})
      });
        //.then(res => this.setState({message: "token validated"}));
    }

    render() {
      return (
        <div>
          <h1>Home</h1>
          <br></br>
          <br></br>
          <br></br>
          <p>{this.state.message}</p>
        </div>
      );
    }
  }