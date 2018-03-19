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
import s from './Wallet.css';
import {Button, ListGroup, ListGroupItem, Alert, Label,FormGroup,ControlLabel,FormControl,PanelGroup,Panel} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Wallet extends React.Component {

  constructor()
  {
    super();
  }

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
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" >
          <div>
              <ul class="nav nav-pills">
              <li role="presentation" class="active"><a href="/wallet" onClick={this.transition}><label>Send Bitcoins</label></a></li>
              <li role="presentation" ><a href="/wallet_receive" onClick={this.transition}><label>Receive Bitcoins</label></a></li>
                  <li role="presentation" ><a href="/transaction" onClick={this.transition}><label>Transaction</label></a></li>
             </ul>
            </div>
            <h1>Send Bitcoin  </h1>
            <div style={{margin:'0 0 15px'}}><label>You can send up to:<b> 0.00000648</b> BTC</label  ></div>
            <div style={{margin:'0 0 15px'}}>
              <form>     
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Receiving bitcoin address"
                  placeholder="Bitcoin Address"
                />
              </form>
            </div>

            <div style={{margin:'0 0 15px'}}>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Amount in bitcoins"
                  placeholder="0.0000"
                />
              </form>
            </div>
            <hr style={{margin:'0 0 15px'}}></hr>
            <div style={{margin:'0 0 15px'}}>
              <form>
                <FieldGroup
                  id="formControlsText"
                  type="text"
                  label="Appears in the transaction list"
                  placeholder="0.0000"
                />
              </form>
            </div>
            <div style={{margin:'0 0 15px'}}>
            <ControlLabel>Amount</ControlLabel>
              <form>
              <div>
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="..."/>
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                </div>
              <div style={{margin:'0 0 15px'}}><hr></hr>
              <form><Button bsStyle="primary" style={{color:'rgb(255,255,255)'}}><span className=" glyphicon glyphicon-bitcoin " style={{color:'rgb(255,255,255)'}}/>Continue</Button></form>
              </div>
            </div>
              </form>
              <div>
              <PanelGroup>
                <Panel collapsible  header=" How to begin and contact the trader" eventKey=" 1" style={{margin:'0 0 15px'}}>Panel 1 content</Panel>
                <Panel collapsible header=" How to play online" eventKey="2" style={{margin:'0 0 15px'}}>Panel 2 content</Panel>
                <Panel collapsible header=" Cancelling the trade" eventKey="3" style={{margin:'0 0 15px'}}>Panel 3 content</Panel>
              </PanelGroup>
            </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            </div>
        </div>
      </div>
    );  
  }
}

export default withStyles(s)(Wallet);
