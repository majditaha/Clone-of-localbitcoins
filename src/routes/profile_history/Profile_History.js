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
import s from './Profile_History.css';
import {Button, Label,Table,Radio,Pager} from 'react-bootstrap';
import history from '../../history.js';

class Profile_History extends React.Component {
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
  getInitialState() {
    return {
      activePage: 1,
    };
  };

  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  };
  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Two-factor authentication</h1>
        <div style={{color:'rgb(54,120,183)'}}><i className="glyphicon glyphicon-arrow-left"/><a href="/security" onClick={this.transition}><label >Back to Account security.</label></a></div>
        <div>
        <Pager>
            <Pager.Item href="#"><label>Previous</label></Pager.Item>
            {' '}
            <Pager.Item href="#"><label>Next</label></Pager.Item>
          </Pager>

          </div>
          <Table responsive>
            <thead>
              <tr>
                <th><label>Date</label></th>
                <th><label>Type</label></th>
                <th><label>IP address</label></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><label>12/15/2017</label></td>
                <td><label>Successfully logged in</label></td>
                <td><label>94.242.219.242</label></td>
              </tr>
            </tbody>
          </Table>
          <Pager>
          <Pager.Item href="#"><label>Previous</label></Pager.Item>
          {' '}
          <Pager.Item href="#"><label>Next</label></Pager.Item>
        </Pager>

        </div>
    );
  }
}

export default withStyles(s)(Profile_History);
