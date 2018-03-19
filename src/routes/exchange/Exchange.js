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
import s from './Exchange.css';
import {label,FormControl,ControlLabel,InputGroup,FormGroup,DropdownButton,Checkbox,Alert, MenuItem,Radio, Button} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js';
import axios from 'axios';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Exchange extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={value1:'Bitcoin',value2:'Litecoin'}
  }

  change = event => {
    this.setState({value1: event.target.value})
  };
  
  change1 = event => {
    this.setState({value2: event.target.value})
  };

  onexchange = event =>{
    var apiBaseUrl = "https://api.blockcypher.com/v1/bcy/test/txs/new";
    var self=this;
    var newtx = {
      inputs: [{addresses: ['CEztKBAYNoUEEaPYbkyFeXC5v8Jz9RoZH9']}],
      outputs: [{addresses: ['C1rGdt7QEPGiwPMFhNKNhHmyoWpa5X92pn'], value: 10000}]
    };
    console.log("asdf");
    axios.post(apiBaseUrl, JSON.stringify(newtx))
    .then(function(response){
      console.log(response)
      if(response.tosign != null)
      {
        
      }
    });

    var sendtx = {
      tx: {},
      tosign: [
        "4176944ff8860009b3e353b6862427130e9086344e1125fe4dac35ca67242a7b"
      ],
      signatures: [
        "3045022100921fc36b911094280f07d8504a80fbab9b823a25f102e2bc69b14bcd369dfc7902200d07067d47f040e724b556e5bc3061af132d5a47bd96e901429d53c41e0f8cca"
      ],
      pubkeys: [
        "02152e2bb5b273561ece7bbe8b1df51a4c44f5ab0bc940c105045e2cc77e618044"
      ]
    };
    apiBaseUrl="https://api.blockcypher.com/v1/bcy/test/txs/send";
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
            <h1>Exchange</h1>
            <FormGroup controlId="formControlsSelect" style={{width:'200px'}}>
                <FormControl componentClass="select" placeholder="Bitcoin" value={this.state.value1} onChange={this.change.bind(this)}>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Litecoin">Litecoin</option>
                  <option value="Dashcoin">Dashcoin</option>
              </FormControl>
              </FormGroup>
              <FieldGroup
                  id="Exchange Amount"
                  label={this.state.value1}
                  type="number"
                  placeholder="0.00"
              />
              <FieldGroup
                  id="Address1"
                  label={"Your "+this.state.value1+" address"}
                  type="text"
                  placeholder="CrEsGRSiE57DaepR2Buob42vRrRDE93qQ2"  
              />
              <FieldGroup
                  id="Exchange Amount"
                  label={"Your "+this.state.value2+" address"}
                  type="text"
                  placeholder="DEwUGRSiE57DaepR2Buob42vRrsde123d"
              />
            </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Receive</h1>
            <FormGroup controlId="formControlsSelect" style={{width:'200px'}}>
                <FormControl componentClass="select" placeholder="Bitcoin" value={this.state.value2} onChange={this.change1.bind(this)}>
                  <option value="Bitcoin">Bitcoin</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Litecoin">Litecoin</option>
                  <option value="Dashcoin">Dashcoin</option>
              </FormControl>
            </FormGroup>
            <FieldGroup
                  id="Receive Amount"
                  label={this.state.value2}
                  type="number"
                  placeholder="0.00"
              />
              <FieldGroup
                  id="Address1"
                  label={"Other's "+this.state.value1+" address"}
                  type="text"
                  placeholder="XhzewRSiE57DaepR2Buob42vRrasd93132"
              />
              <FieldGroup
                  id="Exchange Amount"
                  label={"Other's "+this.state.value2+" address"}
                  type="text"
                  placeholder="XhUUGRSiE57DaepR2Buob42vRrasdew0da"
              />
            </div>
            <div style={{alignContent:'center', marginLeft:'20px'}}>
            <Button bsStyle="primary" onClick={this.onexchange.bind(this)}>
              Exchange
            </Button>
            </div>
      </div>
    </div>
    );
  }
}

export default withStyles(s)(Exchange);