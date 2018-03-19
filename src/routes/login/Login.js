/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in thes
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import {Button} from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import history from '../../history.js';

class Login extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor()
  {
    super();
    this.state={username:'', password:''};
  }
  transition = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  };

  handleClick(event){
    var apiBaseUrl = "http://192.168.1.165:8080/user/login";
    var self=this;
    var payload={
      username: this.state.username,
      password: this.state.password
    }

    axios.post(apiBaseUrl, payload)
    .then(function(response){
      if(response.data.Success == true)
      {
        console.log("Successful");
        console.log(response.data.user.BTC_wallet_address);
        history.push('/#');
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Log in with your username or company email address.
          </p>
          
          <div>
            <div>
                <TextField
                hintText="Enter your username or Email"
                floatingLabelText="Username or Email"
                required
                style={{marginBottom:'20px'}}
                onChange={(event,newValue) => this.setState({username:newValue})}
                />
            </div>

            <div>
            <TextField
                hintText="Enter your password"
                floatingLabelText = "Password"
                style={{marginBottom:'20px'}}
                type="password"
                required
                onChange={(event,newValue) => this.setState({password:newValue})}
                />
            </div>

            <div className={s.formGroup} style={{marginBottom:'20px'}}>
              <Button bsStyle="primary" type="button" onClick={(event) => this.handleClick(event)}>
                Log In
               </Button>
            </div>
          </div>

          <div>
            <a ref="/login" className="s.label">
              <label><a>Forgot your password?</a></label>
            </a>
          </div>
          
          <div>
            <label>New to Location? <a href="/register" onClick={this.transition}>Sign up now!</a></label>
            </div>

          <div>
          <label>Please verify a human.</label>
            </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(s)(Login);
