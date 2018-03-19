/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in thess
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Profile_Recipts.css';
import {Button, Label,Table} from 'react-bootstrap';
import history from '../../history.js';

class Profile_Recipts extends React.Component {
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
        <h1>Receipts from localbitcoins services</h1>
        <div>
          <nav aria-label="...">
            <ul class="pager">
              <li><a href="#"><label>Previous</label></a></li>
              <li><a href="#"><label>Next</label></a></li>
            </ul>
          </nav>  
        </div>
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>Create at</th>
                <th>Description</th>
                <th>Amount(BTC)</th>
                <th>Amount(EUR)</th>
                <th>Country</th>
                <th>VAT%</th>
                <th>VAT paid(EUR)</th>
              </tr>
            </thead>
            <tbody>
          </tbody>
          </Table>
          <div>
            <nav aria-label="...">
              <ul class="pager">
                <li><a href="#"><label>Previous</label></a></li>
                <li><a href="#"><label>Next</label></a></li>
              </ul>
              </nav>
            </div>
          </div>
        <label><b>Please note!</b> Because of a new VAT guidance, beginning 20th August 2014, VAT is not paid on escrow fees any more. Some services, such as SMS fees etc still include VAT. More information about this will be available soon.</label><br/>
        <label>VAT is paid to Finland from EU trade. If you are a registered business in Europe, and interested in getting he VAT returns,<a href="/support/request" onClick={this.transition} style={{color:'rgb(54,120,183)'}}>please conatact us</a></label>          
        </div>
    );
  }
}

export default withStyles(s)(Profile_Recipts);
