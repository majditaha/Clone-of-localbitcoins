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
import s from './Profile_TwoFactor.css';
import {Button, Label,Table,Radio} from 'react-bootstrap';
import history from '../../history.js';

class Profile_TwoFactor extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  transition = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  };

  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Two-factor authentication</h1>
        <div style={{color:'rgb(54,120,183)'}}><i className="glyphicon glyphicon-arrow-left"/><a href="/security" onClick={this.transition}><label >Back to Account security.</label></a></div>
          <label>Protect your account from unauthorized access by enabling two-factor authentication.</label><br/>
          <label>When two-factor authentication is active you need to enter a one time code every time you log in.</label><br/>
          <div><h6><a style={{color:'rgb(54,120,183)'}}>Help with activating two-factor authentication.</a></h6></div>
          <h4>Enable two-factor authentication</h4>
          <Radio checked readOnly>
            <b>Mobile app</b><label>based two-factor authentication</label><br/>
           </Radio>
           <Radio checked readOnly>
            <b>Paper code</b><label>based two-factor authentication</label>
           </Radio>
          <Button><i className="glyphicon glyphicon-wrench"/>Proceed to activation</Button><br/>
        </div>
    );
  }
}

export default withStyles(s)(Profile_TwoFactor);
