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
import s from './Trusted.css';
import {Button, ListGroup, ListGroupItem, Alert, Label} from 'react-bootstrap';
import { join } from 'path';

class Trusted extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div >
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h1>Trusted people</h1>
          <div> 
              <ul class="nav nav-pills">
                <li role="presentation" class="active"><a href="#"><span className="glyphicon glyphicon-user" style={{color:'white'}}/><label>Your Trusted people</label></a></li>
                <li role="presentation"><a href="#"><span className="glyphicon glyphicon-duplicate" style={{color:'white'}}/><label>Your trusted advertisement</label></a></li>
                <li role="presentation"><a href="#"><span className="glyphicon glyphicon-info-sign" style={{color:'white'}}/><label>More about the trust system</label></a></li>
              </ul>
              </div>
          <h3>Speical deals for the trusted people</h3>
          <label>
              <i>Trusted people</i> can access your advertisement marked as trusted. You can <a>create speical advertisement</a> for friends with better price and less limitations with<span className="glyphicon glyphicon-exclamation-sign"/><i>Trusted people only</i><br/>
              options.<br/>
              <br/>
              Invite friends to LocalBitcois, give trusted feedback after trade or visite the user profile to make people trsted.<br/>
              <br/>
              Only trusted people can access your trusted advertisement<br/>
            </label>
          <h3>People you trust</h3> 
            <hr style={{width:'100%'}}/>
              <table class="table">
              <tr>
                <th>Profile</th>
                <th style={{textAlign:'right'}}>Has trades</th>
              </tr>

              <tbody>
                <td><label>inshalm</label></td>
                <td style={{textAlign:'right'}}><span className=" glyphicon glyphicon-remove-sign" style={{color:'red'}}/><label>No</label></td>
              </tbody>
              </table>

             <h3>People that trust you</h3> 
            <hr style={{width:'100%'}}/>
              <table class="table">
              <tr>
                <th>Profile</th>
                <th style={{textAlign:'right'}}>Has trades</th>
              </tr> 
              <tbody>
              </tbody>
              </table>
              <hr style={{width:'100%'}}/>
              <Alert bsStyle="success">
               <label>No one has marked you as trusted yet.</label><br/>
               <label>Your trade partners can mark your LocalBitcoins account as trusted.</label><br/>
              </Alert>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(Trusted);
