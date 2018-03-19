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
import s from './Profile_Phone.css';
import {Button} from 'react-bootstrap';

class Profile_Phone extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h1>Phone number verification</h1>
          <label>Verify your phone number to increase the reputation of your account and get access to more advertisements. Choose your county code and enter your phone number</label>
          <form method="post">
            <div className={s.formGroup}>
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="text"
                  name="usernameOrEmail"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
            </div>

            <div className={s.formGroup}>
                  <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
                 />
            </div>

            <div className={s.formGroup}>
              <Button bsStyle="primary" type="submit" >
                Log In
               </Button>
            </div>
          </form>

          <div>
            <a ref="/login" className="s.label">
              <label><a>Forgot your password?</a></label>
            </a>
          </div>
          
          <div>
            <label>New to Location? <a>Sign up now!</a></label>
            </div>
          <div>
          <label>Please verify a human.</label>
            </div>
        </div>
    );
  }
}

export default withStyles(s)(Profile_Phone);
