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
import s from './Transaction.css';
import {Button,Table, ListGroup, ListGroupItem, Alert, Label,FormGroup,ControlLabel,FormControl,PanelGroup,Panel} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Transaction extends React.Component {
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
        <div className={s.container} style={{width:'100%', display: 'inline-block', margin:'100px 100px 0px 100px'}}>
        <div >
              <ul class="nav nav-pills">
                <li role="presentation"><a href="/wallet" onClick={this.transition}><label>Send Bitcoins</label></a></li>
                <li role="presentation" ><a href="/wallet_receive" onClick={this.transition}><label>Receive Bitcoins</label></a></li>
                <li role="presentation" class="active"><a href="/transaction" onClick={this.transition}><label>Transaction</label></a></li>
              </ul>
            </div>
        <div>
        <h1>Wallet transitions</h1>
        <div><label>Below is the history of your LocalBitcoins wallet.</label></div>
        </div>
      
          <nav aria-label="...">
            <ul class="pager">
              <li><a href="#"><label>Previous</label></a></li>
              <li><a href="#"><label>Next</label></a></li>
            </ul>
          </nav>
         </div>
         <div style={{margin:'50px 100px 50px 100px'}}>
          <Table striped condensed hover style={{fontSize:'15px'}}>
              <thead>
                <tr>
                  <th></th>
                  <th><label>Date</label></th>
                  <th><label>Received BTC</label></th>
                  <th><label>Sent BTC</label></th>
                  <th><label>Description</label></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{color:'rgb(233,46,0)',fontSize:'15px'}}><label>−</label></td>
                  <td><label>10/13/2017 16:13</label></td>
                  <td><label></label></td>
                  <td><label>0.109001 </label></td>
                  <td><label>Bitcoin sell #15063320 Mycurrencybusiness (100+;99%)</label></td>
                </tr>
                <tr>
                  <td style={{color:'blue',fontSize:'15px'}}><label>+</label></td>
                  <td><label>10/13/2017 16:13</label></td>
                  <td><label>0.10970417</label></td>
                  <td><label></label></td>
                  <td><label>Deposite  to #15063320 Mycurrencybusiness (100+;99%)</label></td>
                </tr>
                <tr>
                  <td><label></label></td>
                  <td><label></label></td>
                  <td><label>Total Received BTC</label></td>
                  <td><label>Total Sent BTC</label></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td><label>0.10970417</label></td>
                  <td><label>0.109001</label></td>
                  <td><label></label></td>
                </tr>
 
              </tbody>
            </Table>
           </div>
           <h1 style={{margin:'50px 100px 10px 100px'}}>Ealier Month</h1>
           <Button bsStyle="primary" style={{margin:'10px 100px 50px 100px'}}>2017/9</Button>
      </div>
    );
  }
}

export default withStyles(s)(Transaction);
