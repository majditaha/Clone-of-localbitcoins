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
import s from './Loggedin.css';
import {Button, ListGroup, ListGroupItem, Alert} from 'react-bootstrap';
import AlertDismissable from '../../components/Alert';

class Loggedin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div >
        <div className={s.container}style={{margin:'100px 100px 0px 100px '}}>
        <div className={s.formGroup} >
        <div style={{margin:'0 0 20px'}}>
          <AlertDismissable alertVisible={true} style="success" stField="success"/>
        </div>
        <div> 
          <AlertDismissable alertVisible={true} style="warning" stField="You have bitcoin in wallet."/>
        </div>
        <div>
          <h1>Login Guard Verification Required</h1>
          <label>We noticed that you're attempting to log in from an unauthenticated browser.</label><br/>
          <label>Before you can access your account you will need to verify your browser.  A link has been sent to your</label><br/>
          <label>email,please open the link in this browser to complete browser verification.</label><br/>
          <label>Problems, completing the verification? <a href="">Click here</a> to get help.</label><br/>
          </div>
        <Button bsStyle="primary" type="submit" >
          Log Out
        </Button>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Loggedin);
