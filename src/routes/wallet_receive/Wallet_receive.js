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
import s from './Wallet_receive.css';
import {Button, ListGroup, ListGroupItem, Alert, Label,FormGroup,ControlLabel,FormControl,PanelGroup,Panel} from 'react-bootstrap';
import { join } from 'path';
import { Buffer } from 'buffer';
import history from '../../history';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Wallet_receive extends React.Component {
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
          <div style={{margin:'0px 0px 20px 0px'}}>
              <ul class="nav nav-pills">
                <li role="presentation"><a href="/wallet" onClick={this.transition}><label>Send Bitcoins</label></a></li>
                <li role="presentation" class="active"><a href="/wallet_receive" onClick={this.transition}><label>Receive Bitcoins</label></a></li>
                <li role="presentation"><a href="/transaction" onClick={this.transition}><label>Transaction</label></a></li>
              </ul>
            </div>
            <h1 style={{margin:'0 0 15px'}}>Receive Bitcoin  </h1>
            <div style={{margin:'0 0 15px'}}><label>Give out the bitcoin address below to receive bitcoins.</label></div>
            <div style={{margin:'0 0 15px',fontSize:'20px'}}><b><Label>13STdRmXEKkw9</Label></b><Button style={{width:'50px',textAlign:'center'} }className="glyphicon glyphicon-duplicate"></Button></div>
              <div>
              <PanelGroup>
                <Panel collapsible  header=" How to begin and contact the trader" eventKey=" 1" style={{margin:'0 0 15px'}}>Panel 1 content</Panel>
                <Panel collapsible header=" How to play online" eventKey="2" style={{margin:'0 0 15px'}}>Panel 2 content</Panel>
                <Panel collapsible header=" Cancelling the trade" eventKey="3" style={{margin:'0 0 15px'}}>Panel 3 content</Panel>
              </PanelGroup>
            </div>
         </div>
        </div>
    );
  }
}

export default withStyles(s)(Wallet_receive);
