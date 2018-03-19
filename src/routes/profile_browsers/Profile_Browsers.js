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
import s from './Profile_Browsers.css';
import {Button, Label,Table,Radio} from 'react-bootstrap';
import history from '../../history.js';

class Profile_Browsers extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  componentDidMount () {
    fetch('')
    } 
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
          <div><h6><a style={{color:'rgb(54,120,183)'}}>Help with activating two-factor authentication.</a></h6></div>
          <Table responsive>
    <thead>
      <tr>
        <th><label>Date</label></th>
        <th><label>User agent</label></th>
        <th><label>Location</label></th>
        <th><label>Ip address</label></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><label>12/15/2017</label></td>
        <td><label>Chrome/Mac OS X</label></td>
        <td><label>Luxembourg</label></td>
        <td><label>94.242.219.242</label></td>
        <td><Label style={{backgroundColor:'green'}}>Current browser</Label></td>
        <td><Button bsStyle="danger">Revoke access</Button></td>
      </tr>
    </tbody>
  </Table>
        </div>
    );
  }
}

export default withStyles(s)(Profile_Browsers);
