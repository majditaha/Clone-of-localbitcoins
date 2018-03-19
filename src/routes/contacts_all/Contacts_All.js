/**
 * React Starter Kit (https://www.reactstarterkit.com/)   
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { ButtonToolbar,Button,Table,Checkbox} from 'react-bootstrap'
import s from './Contacts_All.css';
import history from '../../history.js'
class Contacts_All extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
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
      <div className={s.root}>
        <div className={s.container} style={{margin:'100px 200px 0px 100px'}}>
          <div>
            <h1>Dashboard</h1>
            <h2>On this page you can view and manage your advertisement and trades.</h2>
          </div>

          <div className = {s.buttonlayout}>
            <ButtonToolbar>
              <Button href="/wallet" onClick={this.transition}> Wallet 0.000048593 BTC </Button>
              <Button href="/#" onClick={this.transition}> Open trades & advertisements </Button>
              <Button bsStyle="primary" href="/contacts/all" onClick={this.transition}> All closed trades</Button>
              <Button href="/contacts/completed" onClick={this.transition}> Completed trades </Button>
              <Button href="/contacts/cancelled" onClick={this.transition}> Cancelled trades </Button>
            </ButtonToolbar>
          </div>
          <div >
            <div className = {s.hyperlink}>
              <h2>Closed trades, all</h2>
            </div>
            <div>
              <nav aria-label="...">
                <ul class="pager">
                  <li><a href="#"><label>Previous</label></a></li>
                  <li><a href="#"><label>Next</label></a></li>
                </ul>
              </nav>
            </div>
             <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Create at</th>
                    <th>Trade type</th>
                    <th>Trading parter</th>
                    <th>Transaction status</th>
                    <th>Fiat</th>
                    <th>Trade amount</th>
                    <th>Trade fee</th>
                    <th>Exchange rate</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
            <div  style={{margin:'0 0 20px'}}>
              <nav aria-label="...">
                  <ul class="pager">
                    <li><a href="#"><label>Previous</label></a></li>
                    <li><a href="#"><label>Next</label></a></li>
                  </ul>
                </nav>            
              </div>
          </div>
          <div>
            <label>The adertiser pays the fee. In Sell advertisement the fee is added on the top of traded bitcoin amount. In Buy advertisements the fee is reduced from the traded bitcoin amount. In Local_SELL advertisements,
            with floating prices, a temporary floating margin is reserved from your wallet and ten returned back to you when the trade is closed. Exchange rate is calculated oon the raded amount.</label><br/>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contacts_All);
