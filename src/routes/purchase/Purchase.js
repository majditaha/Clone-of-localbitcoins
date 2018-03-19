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
import s from './Purchase.css';
import {Button,Table, Label, Alert, Well, InputGroup,PanelGroup,Panel} from 'react-bootstrap';

class Purchase extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container} style={{width:'100%', display: 'inline-block', margin:'100px 100px 0px 100px'}}>
      <h1>Buy bitcoins using Moneygram with EURO(EUR)</h1>
      <div>LocalBitcoins.com user chrisjenkins wishes to sell bitcoins to you.</div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div>
            <Table>
                <tbody>
                  <tr>
                  <td><b>Price:</b></td>
                  <td><b style={{color:'rgb(27,96,25)'}}> 5,148.41 EURO/BTC</b></td>
                  </tr>
                  
                  <tr>
                  <td><b>Payment method:</b></td>
                  <td><b >Moneygram<span className="glyphicon glyphicon-info-sign"/></b></td>
                  </tr>

                  <tr>
                  <td><b>User:</b></td>
                  <td style={{color:'rgb(27,75,162)'}}><span className="glyphicon glyphicon-user"/><b>chrisjenkins</b><b style={{color:'rgb(213,216,117)'}}>◉<br/></b>
                  <Label>(feedback score 98%, <a style={{color:'rgb(83,137,255)'}}>see feedback</a>)</Label>
                  </td>
                  </tr>
                   <tr>
                      <td><b>Trade limits:</b></td>
                      <td><b>1,500 - 5000 EUR</b></td>
                    </tr>
                    <tr>
                      <td><b>Location:</b></td>
                      <td><b>United Statues</b></td>
                    </tr>
                    <tr>
                      <td><b>Payment window:</b></td>
                      <td><b>270 minutes<span className="glyphicon glyphicon-info-sign" style={{color:'rgb(83,137,192)'}}></span></b></td>
                    </tr>
                </tbody>
              </Table>
              <div>
                <Well style={{width:'100%', backgroundColor:'rgb(242,242,242)'}}>
                  <h6>How much you wish to buy?<br/></h6>
                  <Alert style={{width:'200px',height:'60px', background:'rgb(53,145,147)',color:'white',fontSize:'20px',textAlign:'left'}}>
                    EUR <input id="buy" type="text" style={{display:'inline-block',margin:'0px 0px 0px 0px  ', width:'100px', color:'black',background:'rgb(259,151,136)'}}/>
                   </Alert>
                   <Alert style={{width:'200px',height:'60px', background:'rgb(53,145,147)',color:'white',fontSize:'20px',textAlign:'left'}}>
                    BTC <input id="buy" type="text" style={{display:'inline-block', width:'100px', color:'black'}}/>
                   </Alert>
                  <div style={{color:'red'}}>The smallest amount you can buy from this ad is 1,500 EUR</div>
                  <div><textarea style={{width:'100%',fontSize:'15px'}} placeholder="Write your contact message and other information to the trader here..."/></div>
                    <Button bsStyle="success" style={{width:'100%'}}>Send trader request</Button>
                  </Well>
                </div>
            </div>
            <div>
              <PanelGroup>
                <Panel collapsible header="How to begin and contact the trader" eventKey="1">Panel 1 content</Panel>
                <Panel collapsible header="How to play online" eventKey="2">Panel 2 content</Panel>
                <Panel collapsible header="Cancelling the trade" eventKey="3">Panel 3 content</Panel>
              </PanelGroup>
            </div>
          </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  >
         <h4>Terms of trade with <i>chrisjenkins</i></h4>
         <div style={{padding:'20px' ,width:'400px',height:'700px',background:'rgb(242,242,242)',lineHeight:'25 px',fontSize:'15px'}}>
          <i>
            Hello,<br/>
            <br/>
            I normally answer within minutes<br/>
            <br/>
            If you are interested just message me<br/>
            and we talk about details.<br/>
            <br/>
            Terms:<br/>
            IMPORTANT:<br/>
            1) You should pay ONLY in Moneygram<br/>
            branch with crash! I don't accept online<br/>
            payments!<br/>
            2) I will need the Reference Number.<br/>
            your fill name  and the country from<br/>
            where you sent the money in order to<br/>
            pick it up.<br/>
            3)The buyer pays all the transaction<br/>
            costs.<br/>
            4)Please write my name correctly!<br/>
            Check twice!!<br/>
            5) Don't open a trade if you don't<br/>
            manage to pay within a few hours.<br/>
            6) Complete payment instructions are on<br/>
            the left side of the contact page.<br/>
            Please read carefully!.<br/>
            </i>
           </div>
          </div>
      </div>
    );  
  }
}

export default withStyles(s)(Purchase);
