import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  state = {
    amber: ''
  }
  handleChange = (e) => {
    [e.target.name] = e.target.value
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <div className="h1">LOGIN</div>
          <form >
            <input type="text" placeholder="Username" name="username"
            onChange={this.handleChange}/>
            <input type="text" placeholder="password" name="password"
            onChange={this.handleChange}/>
          </form>
        </div>
       
      </div>
    )
  }
}
