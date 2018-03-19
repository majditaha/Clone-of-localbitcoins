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
import s from './ChangePassword.css';
import {Button} from 'react-bootstrap';

class ChangePassword extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div > 
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h1>Change your password</h1>
          <label>Verify your phone number to increase the reputatio of your account and get access to more advertisements. Choose your country and enter your phone number.</label><br/>
          <form method="post">
            <div className={s.formGroup}> 
            <label>Country code*</label>
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="password"
                  name="usernameOrEmail"
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
            </div>
            <div className={s.formGroup}>
            <label>Phone number*</label>
                <input
                  className={s.input}
                  id="new password"
                  type="password"
                  name="password"
                />
            </div>
            <div className={s.formGroup}>
            <label>New password confirmation*</label>
                <input
                  className={s.input}
                  id="confirm password"
                  type="password"
                  name="password"
                />
            </div>
            <div className={s.formGroup}>
              <Button bsStyle="primary"  type="submit" >
                Change
               </Button>
            </div>
          </form>

          <div>
              <label>The password change resets your third party application and API authentications.</label>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ChangePassword);
