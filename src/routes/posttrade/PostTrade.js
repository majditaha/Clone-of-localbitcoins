import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PostTrade.css';
import {label,FormControl,ControlLabel,InputGroup,FormGroup,DropdownButton,Checkbox,Alert, MenuItem,Radio, Button} from 'react-bootstrap';

class PostTrade extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1> {this.props.title} </h1>

          <Alert bsStyle="warning">
            <strong>Before creating an advertisement please read through </strong> <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> <a href=""> Our term of service</a>
            <strong> the </strong> <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span><a href=""> online sale advertisement guide</a> <strong> and </strong><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            <a href=""> cash exchange guide </a>
          </Alert>
          <h1> Advertisement rules and requirements </h1>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> For your ads to display you need to have Bitcoins in your wallet. You need 0.1 BTC or more for advertisements
            with online payment methods and 0.1 BTC or more for local advertisements (Cash)</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> Certain payment methods require you to be ID verified before your ads are visible.</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> Each completed trade costs advertisers 1% of the total trade amount.</h5> <a href = ""> See all fess on our fees page.</a>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> Once a trade is opened the price is final, except when there is a clear mistake in the pricing.</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> You are not allowed to buy or sell Bitcoin on behalf of someone else (brokering).</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> You may only use payment accounts that are registered in your own name (no third party payments!).</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> You must provide your payment details in the advertisement or in the trade cart.</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> All communication must happen on Global Crypto.</h5>
          </div>
          <div className = {s.innerGrid}>
            <span className = "glyphicon glyphicon-ok"></span><h5> Payment methods marked <strong> High Risk </strong> have a <strong>significant risk of fraud </strong>.
            Be careful and always ID verify your trading partners when using high risk payment methods.</h5>
          </div>


          <h1> Trade type </h1>
          <hr/>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-10">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px"}} >I want to ... </label>
                <div style = {{padding : "0 0 0 100px"}}>
                  <Checkbox >Sell your bitcoins locally</Checkbox>
                  <Checkbox >Buy bitcoins locally</Checkbox>
                  <Checkbox >Sell your bitcoins online</Checkbox>
                  <Checkbox >Buy bitcoins online</Checkbox>
                </div>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal"}} ><i>What kind of trade advertisement do you wish to create? If you wish to sell
                bitcoins make sure you have bitcoins in your Gloabl Crypto wallet. </i></label>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-6">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px"}} >Location </label>
                <input type="text" class="form-control" placeholder="Enter a location" style = {{width : "340px",margin : "0 0 0 120px"}}/>
              </div>
            </div>
          </div>

          {/* <div className = {s.innerGrid}>
            <div> <h5> <strong> Location </strong></h5> </div>
            <input type="text" placeholder="Username" aria-describedby="basic-addon1" style = {{margin : "0 0 0 30px"}}/>
            <div> <h5> <i> For online trade you need to specify the country. For local trade, please specify a city, postal code or street name. </i> </h5> </div>
          </div> */}

          <h1> More information </h1>
          <hr/>
          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-6">
              <label> <strong> Currency </strong></label>
              <DropdownButton title="EUR" id="dropdown-size-large" style = {{margin : "0 0 0 115px"}}>
                <MenuItem eventKey="1">USD</MenuItem>
                <MenuItem eventKey="2">CNY</MenuItem>
                <MenuItem eventKey="3">RBL</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
              </DropdownButton>
          </div>
        </div>


          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-10">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 0"}} >Currency </label>
                <input type="text" class="form-control" placeholder="USD" style = {{width : "340px",margin : "0 0 0 85px"}}/>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-10">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 0"}} >Margin </label>
                <input type="text" class="form-control" placeholder="0" style = {{width : "300px",margin : "0 0 0 100px"}}/><span class="input-group-addon" id="basic-addon1">%</span>
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 30px", fontFamily : "normal"}} ><i>Margin you want over the bitcoin market price.
                Use a negative value for buying or selling under the market price to attract more contacts. For more complex pricing edit the price equation directly. </i></label>
            </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-6">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 0"}} >Price euqation </label>
                <input type="text" class="form-control" placeholder="btc_in_usd" style = {{width : "340px",margin : "0 0 0 50px"}}/>
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 30px", fontFamily : "normal"}} ><i>How the trade price is determined from the hourly market place.
                For more information about euqtions how to determine your trading price see <a href="">pricing FAQ</a> </i></label>
            </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-3">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 0"}} >Min. transaction limit </label>
                <input type="text" class="form-control" placeholder="0" style = {{width : "305px",margin : "0 0 0 7.5px"}}/><span class="input-group-addon" id="basic-addon1">$</span>
                <label class="input-group-btn"  style = {{fontSize : "14px", padding : "0 30px 0 30px", fontFamily : "normal"}} ><i>Optional. Minimum transaction limit in one trade. </i></label>
            </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px"}} >Opening hours </label>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Sun </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 100px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal", margin : "0 0 0 0"}} ><i> Optional. Days and hours when you want your advertisement to be automatically shown and hidden </i></label>
              </div>
            </div>
          </div>


          <div class="row" style = {{padding : "10px 0 0 129px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Mon </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 95px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 130px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Tue </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 100px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 130px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Wed </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 95px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 130px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Thu </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 100px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 132px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Fri </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 105px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>

          <div class="row" style = {{padding : "10px 0 0 130px"}}>
            <div class="col-lg-9">
              <div class="input-group">
               <label class="input-group-btn"  style = {{fontSize : "14px", fontWeight:"normal", padding : "0 50px 0 80px"}} >Sat </label>
                <DropdownButton title="start" id="start" style = {{margin : "0 30px 0 100px"}}>
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
                <DropdownButton title="end" id="end" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </div>
          </div>


          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px"}} >Terms of trade </label>
                <FormControl componentClass="textarea" placeholder="" style = {{margin : "10px 0 0 80px" , width : "500px"}}/>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal", margin : "0 0 0 0px"}} ><i> Other information you wish to tell about your trade. </i></label>
              </div>
            </div>
          </div>

          <h1> Liquidity options </h1>
          <hr/>
          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px",margin: "0,300px,0,300px"}} >Track liquidity </label>
                <Checkbox style = {{}}></Checkbox>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal"}} ><i> This option limits the liquidity of this advertisement to the max.
                Buyers cannot open and complete trades for more than this amount. </i></label>
              </div>
           </div>
          </div>

          <h1> Security options </h1>
          <hr/>

          <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px",margin: "0,300px,0,300px"}} >Identified people only </label>
                <Checkbox style = {{}}></Checkbox>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal"}} ><i> To contact your advertisement, users need to verify their identify by sending IDs, drivers`s license or passport </i></label>
              </div>
          </div>
        </div>

        <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px",margin: "0,300px,0,300px"}} >SMS verification required </label>
                <Checkbox style = {{}}></Checkbox>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal"}} ><i> Only contacts with a verified mobile phone number can contact you from the advertisement. </i></label>
              </div>
          </div>
        </div>

        <div class="row" style = {{padding : "10px 0 0 30px"}}>
            <div class="col-lg-9">
              <div class="input-group">
                <label class="input-group-btn"  style = {{fontSize : "14px",margin: "0,300px,0,300px"}} >Trusted people only </label>
                <Checkbox style = {{}}></Checkbox>
                <label class="input-group-btn"  style = {{fontSize : "14px", fontFamily : "normal"}} ><i> Restrict your advertisement to be shown only to users that you have marked as <strong>Trusted</strong>.
                <a href= ""> Learn how to mark users as trusted</a> </i></label>
              </div>
          </div>
        </div>

        <Button bsStyle = "primary"> Publish advertisement </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PostTrade);
