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
import s from './Support.css';
import {Button, ListGroup, ListGroupItem, Alert, Label} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js'
class Support extends React.Component {
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
      <div >
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>My support tickets  </h1>
          <Alert bsStyle="info" style={{width:'100%', color:'rgb(109,139,159)'}}><b><label>During weekends LocalBitcoins support is limited. Please have patience and wait 12-24 hours for a reply to your ticket or dispute.</label></b></Alert>
          <Button bsStyle="primary" href="/support/request" onClick={this.transition}> Create a new ticket</Button>
          <div>
            <label>You don't have any support ticket.</label>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Support);
