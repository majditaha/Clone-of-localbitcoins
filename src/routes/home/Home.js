/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { ButtonToolbar,Button,Table,Checkbox} from 'react-bootstrap'
import s from './Home.css';
import history from '../../history.js'
class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
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
      <div className={s.root}>
        <div className={s.container} style={{margin:'100px 200px 0px 100px'}}>
          <div>
            <h1>Dashboard</h1>
            <h2>On this page you can view and manage your advertisement and trades.</h2>
          </div>

          <div className = {s.buttonlayout}>
            <ButtonToolbar>
              <Button href="/wallet" onClick={this.transition}> Wallet 0.000048593 BTC </Button>
              <Button bsStyle="primary" href="/wallet" onClick={this.transition}> Open trades & advertisements </Button>
              <Button href="/contacts/all" onClick={this.transition}> All closed trades</Button>
              <Button href="/contacts/completed" onClick={this.transition}> Completed trades </Button>
              <Button href="/contacts/cancelled" onClick={this.transition}> Cancelled trades </Button>
            </ButtonToolbar>
          </div>

          <div className = {s.advertisementslayer}>
            <h2>Your Advertisements</h2>
            <div className = {s.hyperlink}>
              <h4>You can create maximum of 6 advertisements. The limit is based on your 30 days volume which is 1.3234243 BTC. To learn more about advertisement limits,</h4>
              <a href=""> click here</a>
            </div>
             <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Info</th>
                    <th>Price</th>
                    <th>Equation</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Deliver</td>
                    <td>Waiting for Response</td>
                    <td>$1000</td>
                    <td>Same</td>
                    <td>2017.11.2</td>
                  </tr>
                </tbody>
            </Table>
            <div class="pull-right float-right">
              <Button> +Create advertisement </Button>
            </div>
          </div>

          <div>
            <h1>Vacation</h1>
            <Checkbox inline> Selling vacation </Checkbox>
            <h5> Disable all your advertisements for sale temporaily</h5>

            <Checkbox inline> Buying vacation </Checkbox>
            <h5> Disable all your advertisements for purchase temporarily </h5>
            <div className = {s.buttonlayout}>
              <ButtonToolbar>
                <Button bsStyle="primary"> Save </Button>
              </ButtonToolbar>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
