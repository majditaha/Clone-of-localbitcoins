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
import Profile_RealName from './Profile_RealName';

const title = '';

function action() {
  return {
    chunks: ['profile_realname'],
    title,
    component: (
      <Layout>
        <Profile_RealName />
      </Layout>
    ),
  };
}

export default action;
