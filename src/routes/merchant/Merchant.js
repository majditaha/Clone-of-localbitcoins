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
import s from './Merchant.css';
import {Button,Table} from 'react-bootstrap';

class Merchant extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container} style={{width:'100%', display: 'inline-block', margin:'100px 100px 0px 100px'}}>
      <h1>Merchant Dashboard</h1>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h3>Send new invoice</h3>
        <div>
          <form>
          <label>Send invoice by*</label>
          <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{width:'100%'}}>
                e-mail
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          <label>Receiver email</label>
            <div>
              <input id="text1" type="text" style={{width:'100%'}} />
            </div>
            <div style={{margin:'0 0 15px'}}>
              <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
              <div style={{display:'inline-block'}}> <label>Internal only</label>
                <br/><label>Invoice needs to be paid form LocalBitcoins wallet</label></div>
             </div>
             <label>Currency*</label>
              <div class="dropdown">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{width:'100%'}}>
                USD
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
            <label>Amount*</label>
            <div>
              <input id="text1" type="text" style={{width:'100%'}} />
            </div>  
            <label>Description</label>
            <div>
              <textarea id="text1" type="text" style={{width:'100%', height:'200px'}} />
            </div>
            <Button bsStyle="primary" type="submit" style={{margin:'0 0 15px'}}><span className="glyphicon glyphicon-envelope" style={{color:'white'}}/> Send invoice</Button>
            </form>
            <h3>Sent invoices</h3>
            <div>
            <ul class="nav nav-tabs">
                 <li role="presentation" class="active"><a href="#"><label>Home</label></a></li>
                 <li role="presentation"><a href="#"><label>Profile</label></a></li>
                 <li role="presentation"><a href="#"><label>Messages</label></a></li>
                </ul>
              </div>
          </div>
         </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  >
        <div style={{backgroundColor:'rgb(242,242,242)',  height:'100% ',marginBottom:'20px',padding:'15px'}}>
            <h5>Merchant and invocing tool</h5>
            <label>Accept bitcoin and send bitcoin invoices to your customers. Invoices are delivered<br/>
            via email or via link sharing.<br/>
            <br/>
            Invoices can be denominated in any currency. When the recipient opens the<br/>
            invoice, the price is converted to bitcoins using the current exchange rate.  
            <br/>
            When an invoice is marked as "internal only" the payment can only be made from a<br/>
            LocalBitcoins accout. By using this feature you can save on bitcoin network<br/>
            transaction fees. Regular invoices have a unique bitcoin address as the payment<br/>
            reference and the payment can be made from any bitcoin wallet, including QR<br/>
            code compatible mobile wallets.
            <br/>
            Invoices can be integrated as part of your e-commerce platform or similar system<br/>
            to accept bitcoin payments. You can user our API to make the invoice integration<br/>
            More information can be found from blog post.<br/>
            <br/>
            To get notification about invoice status changes you can register callback URL below.</label>
            </div>


         </div>
      </div>  
    );  
  }
}

export default withStyles(s)(Merchant);
