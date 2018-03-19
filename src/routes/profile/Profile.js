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
import s from './Profile.css';
import {Button, ListGroup, ListGroupItem, Alert, Label} from 'react-bootstrap';
import { join } from 'path';
import history from '../../history.js';

class Profile extends React.Component {

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
          <h1>Edit your Profile</h1>
          <div style={{backgroundColor:'rgb(219,241,252)', color:'rgb(100,156,214)',  height:'380px',margin :'20px 100px 0x 100px',padding:'15px'}}>
              <div style={{backgroundColor:'rgb(219,241,252 )', color:'rgb(100,156,214)',  height:'275px', margin:'15px'}}>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#basic">Basic user information</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#password">Change Password</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#email">Change email address</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#verify">Verification</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#security">Security</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#realname">Real Name</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#app">Apps</a></label><br/>
                <label style={{margin:'0 0 15px',fontSize:'18px'}}><a href="#receipt">Premium service receipts</a></label><br/>
                </div>
            </div>

            <div className="alert alert-info" role="alert" style={{marginBottom:'20px',marginTop:'20px', height:'60px',verticalAlign:'middle'}}>
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <label>You have not added a verified phone number to your account yet.</label>
                <Button bsStyle="default">Verify phone number</Button>
             </div>

             <div className="alert alert-info" role="alert" style={{marginBottom:'20px', height:'60px',verticalAlign:'middle'}}>
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <label>You have not set a real time to your account yet.</label>
                <Button bsStyle="default">Set real name</Button>
             </div>

             <div id="basic">
               <h3>Basic user information</h3>
               <label>Email: romanrock@mail.com</label>
               <h5>Time zome</h5>
               <div className="btn-group" style={{margin:'0 0 15px'}}>
                  <button type="button" style={{width:'400px', textAlign:'right '}} className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ------------------------------ <span className="caret"style={{textAlign:'center'}}></span>
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <div>

                  <form>
                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Show me as real name verifier to others</label></b>
                      <br/><label>Your username is shown when people make new trades with your old</label></div>
                    </div>

                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Disable sensitive information from email notifications</label></b>
                      <br/><label>The e-mail will just ask you to log in to the site, where the actual notifications will be</label></div>
                    </div>

                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Enable web notifications</label></b>
                      <br/><label>You will get external notifications outside the browser window.</label></div>
                    </div>

                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Selling vacation</label></b>
                      <br/><label>You will get external notifications outside the browser window.</label></div>
                    </div>
                      
                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checskbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Buying  vacation</label></b>
                      <br/><label>Disable all your advertisement for purchase temporaily</label></div>
                    </div>

                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Send SMS notifications for new trade contacts</label></b>
                      <br/><label>Send SMS notifications for new trade contacts.(price:free)</label></div>
                    </div>

                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Send SMS notifications for new online payments</label></b>
                      <br/><label>Send SMS notifications for new online payments in your advertisements</label></div>
                    </div>
                    
                    <div style={{margin:'0 0 15px'}}>
                      <div style={{float:'left'}}><input id="checkbox1" type="checkbox"/></div>
                      <div style={{display:'inline-block'}}><b><label>Send SMS notifications for new escrow released</label></b>
                      <br/><label>Send SMS notifications for new online excrow releases (price:free)</label></div>
                    </div>
                    
                    <h5>Introduction</h5>
                    <div style={{margin:'0 0 15px' }}>
                      <textarea rows="4" cols="50" style={{width:'400px', height:'200px'}}></textarea><br/>
                      <label>Shown on your public profile. Plain text only, up to 200 characters.</label>
                      </div>

                    <h5>Homepage</h5>
                    <div style={{margin:'0 0 15px'}}>
                      <input id="textedit" type="text" style={{width:'400px'}}/><br/>
                      <label>Shown on your public profile. Plain text only, up to 200 characters.</label>
                      </div>

                    <Button bsStyle="primary">Save Profile</Button>
                   </form> 
                  </div>
                  <div id="password" style={{margin:'0 0 25px'}}>
                    <h3>Change Password</h3>
                    <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)', wordSpacing:'0px'}}><a href="/password_change" onClick={this.transition}> <label>ChangePassword</label></a></span></div>
                   </div>
                   <div id="email" style={{margin:'0 0 25px'}}>
                    <h3>Change email address</h3>
                    <div style={{margin:'10px'}}><span  className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a> <label>Change email address</label></a></span></div>
                   </div>

                   <div id="verify" style={{margin:'0 0 25px'}}>
                    <h3>Verification</h3>
                    <label style={{margin:'10px'}}>E-mail verified:<b style={{color:'rgb(29,103,0)'}}> yes</b></label><br/>
                    <label style={{margin:'10px'}}>Phone number verified:<b style={{color:'rgb(240,0,0)'}}> no</b></label><br/>
                    <div style={{margin:'10px'}}><span  className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a href="/accounts/profile_phone" onClick={this.transition}> <label>Verify phone number</label></a></span></div>
                    <label style={{margin:'10px'}}>Identity verified:<b style={{color:'rgb(240,0,0)'}}> no</b></label><br/>
                    <div style={{margin:'10px'}}><span  className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a><label> Verify identity</label></a></span></div>
                   </div>

                   <div id="security" style={{margin:'0 0 25px'}}>
                    <h3>Security</h3>
                    <label style={{margin:'10px'}}>Your account is:<b style={{color:'rgb(240,0,0)'}}> weak</b></label><br/>
                    <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a href="/security" onClick={this.transition}><label>Edit security options</label></a></span></div>
                   </div>

                   <div  id="realname" style={{margin:'0 0 25px'}}>
                    <h3>Real name</h3>
                    <label style={{margin:'10px'}}>Real name verification:<b style={{color:'rgb(29,103,0)'}}> 0</b> verification</label><br/>
                    <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a href="/accounts/profile_realname" onClick={this.transition}> <label >Your real name information</label></a></span></div>
                   </div>

                   <div id="app" style={{margin:'0 0 25px'}}>
                    <h3>Apps</h3>
                    <label style={{margin:'10px'}}>Third-party apps can do trades for you on GlobalCrypt with<a><b style={{color:'rgb(94,158,208)'}}> GlobalCrypt API. </b></a> </label><br/>
                    <label style={{margin:'10px'}}>You are not using any apps right now.</label><br/>
                    <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a href="/accounts/profile_pincode" onClick={this.transition}> <label> Set and change App PIN code.</label></a></span></div>
                    <div style={{margin:'10px'}}><span className="glyphicon glyphicon-arrow-right" style={{color:'rgb(94,158,208)',wordSpacing:'0px'}}><a> <label> Manage apps</label></a></span></div>
                   </div>

                   <div id="receipt" style={{margin:'0 0 25px'}}>
                    <h3>Premium service receipts</h3>
                    <span style={{margin:'0 0 15px',color:'rgb(94,158,208)'}}><a href="/accounts/profile_receipts" onClick={this.transition}><label>View your receipts for GlobalCrypt.com service here.</label></a></span>
                    <label style={{margin:'0 0 15px'}}><b>Note:</b> These are the receipts from your transactions, but the receipts from the services you have bought from GlobalCrypt.com, for tax purpose. You can find your trade receipts under </label><a href="\" onClick={this.transition}><label>DashBoard</label></a>.<label> Closed contacts.</label>
                   </div>

               </div>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
