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
import s from './Profile_RealName.css';
import {Button, Label} from 'react-bootstrap';

class Profile_RealName extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Real Name</h1>
        <h4>You can set your real name only onece. Your real name can't be changed after it has been  confirmed by a bitcoin seller</h4><br/>
        <label>Your real name is only show to Bitcoin sellers that you've opened trade with.</label>
        <div style={{color:'rgb(54,120,183)', fontSize:'15px'}}>
          <i className="glyphicon glyphicon-info-sign"/><label> Read more about GlobalCryptor real name and when real name is required.</label>
          </div>
        <hr/>
         <h4>Your Name</h4> 
         <form>
          <div className={s.formGroup}>
                  <input
                    className={s.input}
                    id="username"
                    type="text"
                    name="username"
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
              </div>
            </form>
        <div>
          <label>Enter your full name as it appears on bank account and related online purchasement infromation.</label><br/>
          <Button bsStyle="primary">Set real name</Button>  
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Profile_RealName);
