/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';
import {Button} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import history from '../../history.js';

class Register extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor()
  {
    super();
    this.state={name:'', email:'', username:'', password:''};
  }

  handleClick(event)
  {
    var apiBaseUrl = "http://192.168.1.165:8080/user/register";
    var self=this;
    var payload={
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post(apiBaseUrl, payload)
    .then(function(response){
      if(response.data.Success == true)
      {
        console.log("Successful");
        history.push('../login');
      }
    });
  }

  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h1>Register</h1>
          <div>
                <TextField
                hintText="Enter Your Username or Email"
                floatingLabelText="Name"
                required
                style={{marginBottom:'20px'}}
                onChange={(event, value)=>this.setState({name:value})}
                />
            </div>

            <div>
            <TextField
                hintText="Enter your email"
                floatingLabelText = "E-Mail"
                style={{marginBottom:'20px'}}
                required
                onChange={(event, value)=> this.setState({email:value})}
                />
            </div>

            <div>
            <TextField
                hintText="Enter your Username"
                floatingLabelText = "Username"
                style={{marginBottom:'20px'}}
                required
                onChange={(event,value)=>this.setState({username:value})}
                />
            </div>

            <div>
            <TextField
                hintText="Password"
                floatingLabelText = "Password"
                style={{marginBottom:'20px'}}
                type="password"
                required
                onChange={(event,value)=>this.setState({password:value})}
                />
            </div>

            <div className={s.formGroup} style={{marginBottom:'20px'}}>
              <Button bsStyle="primary" type="submit" onClick={(event)=>this.handleClick(event)} >
                Sign Up
               </Button>
            </div>
        </div>
    );
    }
}

export default withStyles(s)(Register);
