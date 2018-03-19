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
import s from './Forums.css';
import {Button, ListGroup, ListGroupItem, Alert} from 'react-bootstrap';

class Forums extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div >
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
          <h3>Forums</h3>
            <div className={s.content}>
              <span className = "glyphicon glyphicon-xbt" ></span>
              <label>Post a trading request.</label>
              <label>General discuss Fraud and scam warnings Trading discussion Features and issues.</label>
            </div>
          <h3> Regional</h3>
            <div className={s.content}><label>UK USA Canada Europe France Asia China South America Africa Australia Nordic</label></div>
          <h3>Developer and affiliates.</h3>
          <div className={s.content}><label>Developers, APIs, Affiliate marketing  Bounties Translating LocalBitcoins.com Other hacking</label></div>
          <h3>Forum settings</h3>
          <div className={s.content}><span className="glyphicon glyphicon-user"/><label><a>Change avata image.</a></label></div>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(Forums);
