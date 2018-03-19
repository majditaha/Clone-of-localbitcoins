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
import s from './Request.css';
import {Button, ListGroup, ListGroupItem, Alert, Label} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js'

class Request extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div >
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>My support tickets  </h1>
          <Alert bsStyle="info" style={{width:'100%', color:'rgb(109,139,159)'}}><label>During weekends LocalBitcoins support is limited. Please have patience and wait 12-24 hours for a reply to your ticket or dispute.</label></Alert>
          <hr style={{width:'100%'}}></hr>
          <label>
            Please take a moment of your time to describe your issue. If none of the options below fit your issue, please select "Other" and describe your issue in writing.
            </label>
         <h4>Please choose best alternative</h4>
         <hr style={{width:'100%'}}></hr>
           <div style={{color:'rgb(36,93,167)'}}>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Issue with your LocalBitcoins accout</a></label><br/>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Report fraud</a></label><br/>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Help with dispute trades</a></label><br/>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Problems with Bitcoin transactions or your wallet</a></label><br/>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Report a user</a></label><br/>
           <label style={{margin:'0 0 15px', fontSize:'16px'}}><a>Other</a></label><br/>
           </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Request);
