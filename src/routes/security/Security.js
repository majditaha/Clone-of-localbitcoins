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
import s from './Security.css';
import {Button, ListGroup, ListGroupItem, Alert, Label, PanelGroup} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js'

class Security extends React.Component {

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
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Account Security</h1>
        <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-left" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/accounts/profile" onClick={this.transition}> Back to Edit Profile</a></span></div>
        <div>
          <h4>Your account security level is: <b style={{color:'red'}}>weak</b></h4>  
          <label>Weak account security increases the risk of Bitcoin theft. Please enable two-factor authentication.</label>
          <div style={{backgroundColor:'rgb(242,180,200)', color:'rgb(100,156,214)',  height:'100%',marginBottom:'20px',padding:'15px'}}>
          <div style={{backgroundColor:'rgb(240,242,100 )', color:'rgb(100,156,214)',  height:'100%', margin:'15px'}}>
            <label><a href="">Two-Factor Authentication</a></label><br/>
            <label><a href="">Login Guard</a></label><br/>
            <label><a href="">Other Security Measures</a></label><br/>
            <label><a href="">Login History</a></label><br/>
            </div>
        </div>
          <h4>Two-Factor Authentication</h4>
          <label>Protect your Bitcoins with high security log in.</label><br/>
          <label>Two-Factor authentication is <b style={{color:'red'}}>disabled.</b></label><br/>

          <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/accounts/two_factor" onClick={this.transition}><label> Enable two-factor authentication</label></a></span></div>
          <div>
            <div style={{backgroundColor:'rgb(242,242,242)',  height:'100%',marginBottom:'20px',padding:'15px'}}>
              <div style={{backgroundColor:'rgb(242,242,242)',  height:'100%', margin:'15px'}}>
                <h5>What is two-factor authentication</h5>
                <img src={ require('./2factor.png') } ></img><br/>
                <label style={{margin:'0 20px'}}>•To login, You need one-time code from mobile phone or printed paper in addition to your password.</label><br/>
                <label style={{margin:'0 20px'}}>•LocalBitcoins two-Factor authentication works with <b>mobile apps</b>(Android, IOS, Windows Mobile) or <b>printed paper codes.</b></label><br/>
                <h5>Why two-factor authentication</h5>
                <label style={{margin:'0 20px'}}>•<b>More than 99%</b> of the attacks against you can be prevented with two-factor authentication.</label><br/>
                <label style={{margin:'0 20px'}}>•Two-factor authentication codes are very hard to steal, unlike passwords.</label><br/>
                <label style={{margin:'0 20px'}}>•<b>It takes only few miutes to set it up.</b></label><br/>
                </div>
              </div>
            </div>
            <h4>Login Guard</h4>
            <div style={{margin:'0 0 40px '}}>
              <label>Prevent logins from unauthorized browsers.</label><br/>
              <label>Login guard:<b style={{color:'rgb(62,120,61)'}}> enabled</b></label><br/>
              <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/accounts/browsers" onClick={this.transition}><label> Show authorized browsers</label></a></span></div>
              <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/accounts/login_history" onClick={this.transition}><label> Edit login guard options</label></a></span></div>
                </div>
            <h4>Other Security Measures</h4>
            <div style={{margin:'0 0 40px '}}>
              <label>Do not use the same password on different websites.</label><br/>
              <label>Do not use <b>Tor browser.</b><b style={{color:'rgb(100,156,214)'}}>Using a Tor browser puts in the rish getting your bitcoins stolen.</b></label><br/>
              <label>Do not get involved in transaction outside the LocalBitcoins.</label><br/>
              <label>Do not use the website from a <b>shared computers or devices, like ones in public internet cafes</b>, as they may have keyloggers installed to steal your user credentials.</label><br/>
              <label>Do not install third party software,  pirated software ofr browser addons you cannot trust 100%. This greatly reduces the risk of getting Bitcoin stealing malware infection on the computer.</label><br/>
             </div>
            <h4></h4>
            <div>
              <label>List previous logins and IPs.</label><br/>
              <label><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/accounts/login_history" onClick={this.transition}> <label >Show login history</label></a></span></label><br/>
            </div>
         </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Security); 