/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo.png';
import s from './css/app.css';
import history from '../../history.js';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import {Button, ListGroup, ListGroupItem, Alert, Label, Nav,NavDropdown,NavItem,MenuItem} from 'react-bootstrap';

class Header extends React.Component {  
  transition = event => {
    event.preventDefault();
    history.push({
      pathname: event.currentTarget.pathname,
      search: event.currentTarget.search
    });
  };
  
  render() {
    return (
        <div className = {s.body}>  
          <nav className={s.uinav}>
            <div className={s.uinavlogo}><a href="/#" onClick={this.transition}>Global Crypt</a></div>
            <ul className={s.uinavmenu}>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                    <a href="/#"><div><Label>DASHBOARD</Label></div></a>
                    </li>
              <li className={s.uinavmenumenuli} style={{listStyleTpe:'none'}}>
                    <a href="/wallet"><div><Label>WALLET</Label></div></a>
                    </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                      <a href="/security"><div><Label>SECURITY</Label></div></a>
                    </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                      <a href="/accounts/profile"><div><Label>PROFILE</Label></div></a>
                    </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                  <a href="/buybitcoin"><div><Label>BUY BITCOIN</Label></div></a>
                  </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                 <a href="/sellbitcoin"><div><Label>SELL BITCOIN</Label></div></a>
               </li>  
               <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                  <a href="/advertise"><div><Label>POST A TRADE</Label></div></a>
                  </li>
               <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                  <a href="/"><div><Label>CASINO</Label></div></a>
                  </li>
                  
                  <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                  <NavDropdown eventKey={3} pullRight title={<Label>HELP</Label>} id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1} href="/teriyaki" onClick={this.transition}> How to buy Bitcoins</MenuItem>
                    <MenuItem eventKey={3.2} href="/accounts/profile" onClick={this.transition}> Frequently Asked Questions</MenuItem>
                    <MenuItem eventKey={3.3} href="/#" onClick={this.transition}> Guides</MenuItem>
                    <MenuItem eventKey={3.4} href="/wallet" onClick={this.transition}> Contact support</MenuItem>
                    <MenuItem eventKey={3.5} href="/security" onClick={this.transition}> Blog </MenuItem>
                    <MenuItem eventKey={3.6} href="/merchant" onClick={this.transition}>Fees</MenuItem>
                    <MenuItem eventKey={3.7} href="/trusted" onClick={this.transition}>About us</MenuItem>
                  </NavDropdown>
               </li>
            </ul>
            <ul className={s.uinavmenu}>
            
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                <a href="#"><div><span className="glyphicon glyphicon-envelope"/><span className="badge">31</span></div></a>
                </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                <a href="/login" onClick={this.transition}><div><span className="glyphicon glyphicon-envelope"/>Login</div></a>
                </li>
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                <a href="/register" onClick={this.transition}><div><span className="glyphicon glyphicon-envelope"/>SignUp</div></a>
                </li>
                
              <li className={s.uinavmenumenuli} style={{listStyleType:'none'}}>
                <NavDropdown eventKey={3} pullRight title={<span><i className="glyphicon glyphicon-user"/></span>}  id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="/teriyaki" onClick={this.transition}><i className="glyphicon glyphicon-user"></i> Teriyaki</MenuItem>
                  <MenuItem eventKey={3.2} href="/accounts/profile" onClick={this.transition}><i className="glyphicon glyphicon-edit"></i> Edit Profile</MenuItem>
                  <MenuItem eventKey={3.3} href="/#" onClick={this.transition}><i className="glyphicon glyphicon-dashboard"></i> dashboard</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4} href="/wallet" onClick={this.transition}><i className="glyphicon glyphicon-bitcoin"></i> Wallet:0 BTC</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.5} href="/security" onClick={this.transition}> Account security: <b style={{color:'red'}}>weak</b></MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.6} href="/merchant" onClick={this.transition}><i className="glyphicon glyphicon-shopping-cart"></i> Merchant</MenuItem>
                  <MenuItem eventKey={3.7} href="/trusted" onClick={this.transition}><i className="glyphicon glyphicon-star"></i> Trusted</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.8} href="/support" onClick={this.transition}><i className="glyphicon glyphicon-plus-sign"></i> Support</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.9}><i className="glyphicon glyphicon-share"></i> Log out</MenuItem>
                </NavDropdown>
               </li>

            </ul>
          </nav>
      </div>

    );
  }
}

export default withStyles(s)(Header);
