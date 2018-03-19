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
import s from './Teriyaki.css';
import {Button,Table, Checkbox} from 'react-bootstrap';
import { loadavg } from 'os';

class Teriyaki extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.container} style={{width:'100%', display: 'inline-block',margin:'100px 100px 0px 100px'}}>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div>
            <h1>TeriyakiKitty</h1>
            <h4>
              Information on TeriyakiKitty
             </h4>
             <label>This information is updated hourly.</label>
             </div>
             <div>
              <Table striped bordered condensed hover>
                  <tbody>
                    <tr>
                      <th>Trade Volume</th>
                      <td><label>1-2BTC</label></td>
                    </tr>
                    <tr>
                      <th>
                        Number of confirmed trades
                      </th>   
                      <td  className= {s.content}>
                        <label><font color="red"> 8 </font> </label><br/>
                        <label>...with 4 different partners.</label>
                      </td>
                    </tr>
                    <tr>
                      <th><label>Feedback score</label></th>
                      <td><label>100%</label></td>
                    </tr>
                    <tr>
                      <th><label>Account created</label></th>
                      <td><label>1 month ago</label></td>
                    </tr>
                    <tr>
                      <th><label>Last Seen</label></th>
                      <td><label>1 month ago</label></td>
                    </tr>
                    <tr>
                      <th><label>Language</label></th>
                      <td><label>English</label></td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td><div>
                        <input type="checkbox" id="check1" style={{float:'left'}}/>
                        <label for="check1" style={{content:''}}>Verfied 1 month ago</label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th><label>Phone Number</label></th>
                      <td>
                        <form>
                          <span className="glyphicon glyphicon-warning-sign" style={{color: 'red'}}/>
                          <label>Verfied 1 month ago</label>
                          </form>
                      </td>
                    </tr>
                    <tr>
                      <th><label>Trust</label></th>
                      <td><label>Trusted by 0 people</label></td>
                    </tr>
                    <tr>
                      <th><label>Blocks</label></th>
                      <td><label>Blocked by 0 people</label></td>
                    </tr>
                  </tbody>
                </Table>
            </div >
            <h4>
              Feedback
            </h4>
            <label>Feedback left by users with noticeable trade volume.</label>
          <div>
            <label>Oct 13, 2017, 5:48 p.m</label><br/>
            <label><span className="glyphicon glyphicon-thumbs-up" style={{color:"green"}}></span>amazing seller, very patient
            <Button bsStyle="warning" height="10px" className="btn btn-default btn-xs ">Low Volume</Button>
            </label>
           </div>
           <div>
            <label>Oct 13, 2017, 5:48 p.m</label><br/>
            <label><span className="glyphicon glyphicon-thumbs-up" style={{color:"green"}}></span>Good and fast! 5-star trader.</label>
           </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"  >
          <div style={{backgroundColor:'rgb(152, 142, 142)' , width:'400px', height:'200px', padding:'25px'}}>
            <div style={{backgroundColor:'rgb(93, 193, 89)', width:'300px', height:'100px', margin:'22px',color:'white', fontSize:'20px', textAlign:'center', verticalAlign: 'middle', lineHeight:'100px'}}>
              <span className=" glyphicon glyphicon-star-empty"></span>
              <label>Already trusting 
              TeriyakiKitty</label>
              </div>
              <h6 style={{color:'red'}}>It's you.</h6>
            </div>
        </div>
        <div style={{color:'rgb(46,92,154)'}}>
        <span style={{margin:'5px' }} className="glyphicon glyphicon-flag"/> <label> Report this user</label>
        </div>
      </div>  
    );  
  }
} 

export default withStyles(s)(Teriyaki);
