/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Exchange from './Exchange';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
const title = 'exchange';

function action() {
  return {
    chunks: ['exchange'],
    title,
    component: (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Layout>
          <Exchange title={title} />
        </Layout>
      </MuiThemeProvider>  
    ),
  };
}

export default action;
