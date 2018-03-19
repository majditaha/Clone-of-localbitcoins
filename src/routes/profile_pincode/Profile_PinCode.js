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
import s from './Profile_PinCode.css';
import {Button, Label} from 'react-bootstrap';

class Profile_PinCode extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div className={s.container} style={{margin:'100px 100px 0px 100px'}}>
        <h1>Change App PIN Code</h1>
        <h4>Apps cannot send any bitcoins from GlobalCrypt wallet until you set an APP PIN code on your account. The PIN code should be four numbers.</h4><br/>
         <h4>App PIN code*</h4> 
         <form>
          <div className={s.formGroup}>
                  <input
                    className={s.input}
                    id="username"
                    type="text"
                    name="username"
                    style={{width:'350px'}}
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
              </div>
              <h4>App PIN code, again*</h4> 
          <div className={s.formGroup}>
                  <input
                    className={s.input}
                    id="username"
                    type="text"
                    name="username"
                    style={{width:'350px'}}
                    autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                  />
              </div>
        </form>
        <div>
          <Button bsStyle="primary">Submit</Button>  
          </div>
        </div>
    );
  }
}

export default withStyles(s)(Profile_PinCode);
