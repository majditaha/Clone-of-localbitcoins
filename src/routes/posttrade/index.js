import React from 'react';
import PostTrade from './PostTrade';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

const title = 'Create a bitcoin trade adevertisement';

function action() {
  return {
    chunks: ['posttrade'],
    title: 'posttrade',
    component: (
      <Layout>
        <PostTrade title={title} />
      </Layout>
    ),
  };
}

export default action;
