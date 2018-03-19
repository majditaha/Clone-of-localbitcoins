/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 * 
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.np
 * 
 * This source code is licensed under the MIT license found in thes
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes, { element } from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Advertise.css';
import {Button, Label,Table,Radio, Alert,FormGroup,ControlLabel,FormControl,InputGroup} from 'react-bootstrap';
import history from '../../history.js';
import {currencies} from 'country-data';
import RaisedButton  from 'material-ui/RaisedButton';
import CityList from 'react-citypicker';

class Advertise extends React.Component {

  constructor(props){
    super(props)
    this.state={value:'USD', rate: [], mount:1, margin:0}
  }

  static propTypes = {
    title: PropTypes.string.isRequired, 
  };

  componentDidMount()
  {
    console.log(CityList);
    fetch('https://bitpay.com/api/rates')
      .then((Response) => Response.json())
      .then((curr)=>
      {
          this.setState({rate:curr});
      }
    )
  }

 change = event => {
    this.setState({value: event.target.value})
  };

  onChangeHandler = event => {
    this.setState({mount : event.target.value})
  }

  onChangeMargin = event => {
    this.setState({mount: 1+event.target.value/100, margin: event.target.value})
  }

  transition = event => {
    event.preventDefault();
      history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  };

  render() {
    const time1=["start","00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00","03:15","03:30","03:45","04:00"
                  ,"04:15","04:30","04:45","05:00","05:15","05:30","05:45","06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00",
                  ,"08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00"
                  ,"14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00",
                  "19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00"
                  ,"23:15","23:30","23:45"];

    const time2=["end","00:15","00:30","00:45","01:00","01:15","01:30","01:45","02:00","02:15","02:30","02:45","03:00","03:15","03:30","03:45","04:00"
                  ,"04:15","04:30","04:45","05:00","05:15","05:30","05:45","06:00","06:15","06:30","06:45","07:00","07:15","07:30","07:45","08:00",
                  ,"08:15","08:30","08:45","09:00","09:15","09:30","09:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00"
                  ,"14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00",
                  "19:15","19:30","19:45","20:00","20:15","20:30","20:45","21:00","21:15","21:30","21:45","22:00","22:15","22:30","22:45","23:00"
                  ,"23:15","23:30","23:45"];

    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Create a bitcoin trade advertisement</h1>
        <div>
          <Alert bsStyle="danger" style={{color:'rgb(167,64,66)'}}>
            <strong><i className="glyphicon glyphicon-warning-sign"/>Creating advertisement is for those who want to be actively involved in trading Bitcoins.</strong><br/>
            <strong>If you're now to Bitcon please see the<i className="glyphicon glyphicon-exclamation-sign"/><label style={{color:'rgb()'}}> how to buy and to sell guides.</label></strong>
            </Alert>
          </div>
          <div>
            <Alert bsStyle="warning">
            <label>Before creating an advertisement please read through <i className="glyphicon glyphicon-exclamation-sign"/><a>our terms of service</a> the<i className="glyphicon glyphicon-exclamation-sign"/><a>online sale advertisement guide and </a> <i className="glyphicon glyphicon-exclamation-sign"/> <a>cash exchange guide</a></label>.
              </Alert>
            </div>
          <h3>Advertisement rules and requirements</h3>
          <div>
              <label>•For your ads to display you need to have Bitcoins in your GlobalCrypt wallet. You need 0.1 BTC or more for advertisements with online payment methods and 0.1 BTC or more for local advertisments(cash).</label><br/>
              <label>•Certain payment methods require you tp be ID verified before your ads are visible.</label><br/>
              <label>•Each completed trade costs advertisers 1% of the total trade amount.<a>See all fees on our fees page.</a></label><br/>
              <label>•Once a trade is opened the price is final, except when there is a clear mistake in the pricing.</label><br/>
              <label>•You are not allowed to buy or sell Bitcoin on behalf of someone else(brokering).</label><br/>
              <label>•You may only use payment accounts that are registered in your own name(no third paty payments!)</label>
              <label>•You must provide your payment details in  the advertisement or in the trade chat.</label>
              <label>•All communication must happen on GlobalCrypt.com</label>
              <label>•Payment methods marked <strong>High Risk</strong> have a <b>significant risk of fraud.</b> Be careful and always ID verify your trading aprtners when using high risk payment methods.</label>
            </div>
          <div>
            <h3>Trade type</h3>
              <hr/>
              <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                  <div className="col col-md-2">
                      <strong>I want to...</strong>
                    </div>

                  <div className="col col-md-4">
                    <input type="radio" name="contact" style={{float:'left'}}/><b>Sell your bitcoins locally</b><br/>
                    <input type="radio" name="contact" style={{float:'left'}}/><b>Buy bitcoins locally</b><br/>
                    <input type="radio" name="contact" style={{float:'left'}}/><b>Sell your bitcoins online</b><br/>
                    <input type="radio" name="contact" style={{float:'left'}}/><b>Buy bitcoins online</b><br/>
                    </div>

                  <div className="col col-md-6">
                      <i><label>What kind of trade advertisement do you wish to create? If you wish to sell bitcoins make sure you have bitcoins in your GlobalCrypt wallet.</label></i>
                    </div>
                </div>

                <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                  <div className="col col-md-2">
                      <strong>Location</strong>
                    </div>

                  <div className="col col-md-4">
                      <input
                        className={s.input}
                        id="location"
                        type="text"
                        name="location"
                        placeholder="Enter a location"
                        style={{width:'400px'}}
                        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      />
                    </div>

                  <div className="col col-md-6">
                      <i><label><i><label>For online trade you need to specify the country. For local trade, please specify a city, postal code or street name.</label></i></label></i>
                    </div> 
                </div>
                 
           <h3>More information</h3>
             <hr/>
             <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                  <div className="col col-md-2">
                      <strong>Currency</strong>
                    </div>
                    
                  <div className="col col-md-4">
                    <FormGroup controlId="formControlsSelect" style={{width:'400px'}}>
                        <FormControl componentClass="select" placeholder="USD" value={this.state.value} onChange={this.change.bind(this)}>
                          {
                            currencies.all.map(element => {
                              return <option value={element.code}>{element.code}</option>
                            })
                          }
                        </FormControl>
                      </FormGroup>
                    </div>

                  <div className="col col-md-6">
                    </div>
                </div>

             <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
               <div className="col col-md-2">
                 <strong>Margin</strong>
                  </div>

               <div className="col col-md-4">
                 <InputGroup style={{width:'400px'}}>
                    <FormControl type="text" value={this.state.margin} onChange={this.onChangeMargin.bind(this)}/>
                    <InputGroup.Addon><label>%</label></InputGroup.Addon>
                  </InputGroup>
                 </div>

               <div className="col col-md-6">
                 <i><label><i><label>Margin you wnat over ther bitcoin price. Use a negative value for buying or selling under the market price to attract more contacts. For more complex prcing edit the price equation directly.</label></i></label></i>
                  </div> 
              </div>

              <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                  <div className="col col-md-2">
                      <strong>Price equation</strong>
                    </div>

                  <div className="col col-md-4">
                      <input
                        className={s.input}
                        id="location"
                        type="text"
                        name="location"
                        style={{width:'400px'}}
                        value={this.state.mount}
                        onChange={this.onChangeHandler.bind(this)}
                        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      />
                      
                      <label>Trade price with current market value<br/>
                      {
                        this.state.rate.map((item) =>
                        {
                          if(item.code == this.state.value)
                          {
                            return(
                              <label style={{color:'green'}}>{item.rate * this.state.mount} {this.state.value}/BTC</label>
                            );
                          }
                        })
                      }
                        </label><br/>
                      <b style={{color:'rgb(17,131,1)'}}>{
                      }
                      </b>                      
                    </div>

                  <div className="col col-md-6">
                      <i><label><i><label>How the trade price is determined from the hourly market price. For more information about questions how to determine your trading price see <span className="glyphicon glyphicon-edit"/><a>pricing FAQ</a> Please note that the advertiser is always responsile for all payment processing fees.</label></i></label></i>
                    </div> 
                </div>

              <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
               <div className="col col-md-2">
                 <strong>Min. transaction limit</strong>
                  </div>

               <div className="col col-md-4">
                 <InputGroup style={{width:'400px'}}>
                    <FormControl type="text" />
                    <InputGroup.Addon><label>USD</label></InputGroup.Addon>
                  </InputGroup>
                 </div>

               <div className="col col-md-6">
                 <i><label><i><label>Optional. Minimum transaction limit in one trade.</label></i></label></i>
                  </div> 
               </div>

               <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                  <div className="col col-md-2">
                    <strong>Max. transaction limit</strong>
                      </div>
                  <div className="col col-md-4">
                    <InputGroup style={{width:'400px'}}>
                        <FormControl type="text" />
                        <InputGroup.Addon><label>USD</label></InputGroup.Addon>
                      </InputGroup>
                    </div>
                  <div className="col col-md-6">
                    <i><label><i><label>Optional. Maximum transaction limit in one trade. For online sells, your GlobalCrypt.com wallet balance may limit the maximum fundable trade also.</label></i></label></i>
                      </div> 
                  </div>
                      
                  <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                    <div className="col col-md-2">
                      <strong>Restrict amounts to</strong>
                        </div>
                    <div className="col col-md-4">
                        <input
                        className={s.input}
                        id="location"
                        type="text"
                        name="location"
                        style={{width:'400px'}}
                        autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                      />
                      </div>

                    <div className="col col-md-6">
                      <i><label><i><label>Optional. Restrict trading amounts to specific comma-separated integers, for example 20,50,100. In flat currency(USD/EUR/etc). Handy for coupons, gift cards, etc.</label></i></label></i>
                        </div> 
                    </div>

                  <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                      <div className="col col-md-2">
                        <strong>Opening hours</strong>
                          </div>
                          
                      <div className="col col-md-4">

                      <div className="row">
                          <div className="col col-md-2">
                            <label>Sun</label>
                            </div>
                          <div className="col col-md-4" >
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                time1.map((element) => 
                                  <option > {element}</option>
                                )
                              }
                                </FormControl>
                              </FormGroup>
                            </div>
                           
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                                {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          </div>
                      
                        <div className="row">
                          <div className="col col-md-2">
                            <label>Mon</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                                {
                                  time1.map((element) => 
                                    <option > {element}</option>
                                  )
                                }

                                </FormControl>
                              </FormGroup>
                            </div>
                           
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                                {
                                  time2.map((element) => 
                                    <option > {element}</option>  
                                  )
                                }
                              </FormControl>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="row">
                          <div className="col col-md-2">
                            <label>Tue</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                time1.map((element) => 
                                  <option > {element}</option>
                                )
                              }
                              </FormControl>
                              </FormGroup>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                                {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                              </FormControl>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="row">
                          <div className="col col-md-2">
                            <label>Wed</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time1.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="row">
                          <div className="col col-md-2">
                            <label>Thu</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time1.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="row">
                          <div className="col col-md-2">
                            <label>Fri</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time1.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="row">
                          <div className="col col-md-2">
                            <label>Sat</label>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time1.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          <div className="col col-md-4">
                            <FormGroup controlId="formControlsSelect" style={{width:'100px'}}>
                              <FormControl componentClass="select" placeholder="select">
                              {
                                  time2.map((element) => 
                                    <option > {element}</option>
                                  )
                                }
                                </FormControl>
                              </FormGroup>
                            </div>
                          </div>
                        </div>
                      <div className="col col-md-6">
                        <i><label><i><label>Optional. Maximum transaction limit in one trade. For online sells, your GlobalCrypt.com wallet balance may limit the maximum fundable trade also.</label></i></label></i>
                          </div> 
                     </div>

                     <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                        <div className="col col-md-2">
                          <strong>Max. transaction limit</strong>
                            </div>
                        <div className="col col-md-4">
                          <FormGroup controlId="formControlsTextarea">
                              <FormControl componentClass="textarea"/>
                            </FormGroup>
                  
                          </div>
                        <div className="col col-md-6">
                          <i><label><i><label>Other information you wish to tell about your trade.</label></i></label></i><br/>
                          <i><label><i><label>Example 1:<b>This advertisement is only for cash trades.</b></label></i></label></i><br/>
                          <i><label><i><label>If you want to pay online, contact</label></i></label></i><br/>
                          <i><label><i><label>GlobalCrypt.com/ad/1234. Example 2:Please make</label></i></label></i><br/>
                          <i><label><i><label>request only when you can complete the payment</label></i></label></i><br/>
                          <i><label><i><label>with cas within 12 hours.</label></i></label></i><br/>
                            </div> 
                      </div>

                      <h3>Liquidity options</h3>
                      <hr/>
                      <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                        <div className="col col-md-2">
                            <strong>Track liquidity</strong>
                          </div>
                        <div className="col col-md-4">
                            <input
                              id="location"  
                              type="checkbox"
                              name="location"
                              placeholder="Enter a location"
                              style={{float:'left'}}
                              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                            />
                          </div>
                        <div className="col col-md-6">
                            <i><label><i><label>This optoin limits the liquidity of this advertisement to the max. transaction limit. Buyers cannot open and complete trades for more than this amount.</label></i></label></i><br/>
                            <br/>
                            <i><label>Example: With track liquidity turned on and ma. transaction limit set to 100 USD when a buyer opens a</label></i><br/>
                            <i><label>trade for 20 USD the max. transaction limit is automatically decreased to 80 USD. It returns to 100 USD</label></i><br/>
                            <i><label>if the buyer cancels the trade, and stays at 80 USD if the trade is completed</label></i><br/>                        
                          </div> 
                      </div>

                      <h3>Security options</h3>
                      <hr/>

                      <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                        <div className="col col-md-2">
                            <strong>Identified people only</strong>
                          </div>
                        <div className="col col-md-4">
                            <input
                              id="location"  
                              type="checkbox"
                              name="location"
                              placeholder="Enter a location"
                              style={{float:'left'}}
                              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                            />
                          </div>
                        <div className="col col-md-6">
                            <i><label><i><label>To contact your advertisement, users need to verify their identity by sending IDs, driver's licence or passport.</label></i></label></i><br/>
                          </div> 
                      </div>

                      <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                        <div className="col col-md-2">
                            <strong>SMS verification required</strong>
                          </div>
                        <div className="col col-md-4">
                            <input
                              id="location"  
                              type="checkbox"
                              name="location"
                              placeholder="Enter a location"
                              style={{float:'left'}}
                              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                            />
                          </div>
                        <div className="col col-md-6">
                            <i><label><i><label>Only contacts with a verified mobile phone number can contact you from the advertisement.</label></i></label></i><br/>              
                          </div> 
                      </div>

                      <div className="row" style={{fontSize:'18px', margin:'0 0 20px'}}>
                        <div className="col col-md-2">
                            <strong>Trusted people only</strong>
                          </div>
                        <div className="col col-md-4">
                            <input
                              id="location"  
                              type="checkbox"
                              name="location"
                              placeholder="Enter a location"
                              style={{float:'left'}}
                              autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                            />
                          </div>
                        <div className="col col-md-6">
                            <i><label>Restrict your advertisement to be shown only to users that you have makred as <b><span className="glyphicon glyphicon-star"/> Trusted</b></label></i><br/>
                            <i><label style={{color:'rgb(54,120,187)'}}><a>Learn how to mark users as trusted.</a></label></i>
                          </div>
                       </div>

                </div>
                <Button bsStyle="primary">Publish advertisement</Button>
        </div>
    );
  }
}

export default withStyles(s)(Advertise);
