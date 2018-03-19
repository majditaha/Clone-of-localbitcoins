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
import Profile_Phone from './Profile_Phone';

const title = '';

function action() {
  return {
    chunks: ['profile_phone'],
    title,
    component: (
      <Layout>
        <Profile_Phone />
      </Layout>
    ),
  };
}

export default action;
