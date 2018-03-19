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
import Wallet_receive from './Wallet_receive';

const title = 'Wallet_receive';

function action() {
  return {
    chunks: ['wallet_receive'],
    title,
    component: (
      <Layout>
        <Wallet_receive title={title} />
      </Layout>
    ),
  };
}

export default action;
