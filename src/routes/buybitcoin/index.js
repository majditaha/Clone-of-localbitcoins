import React from 'react';
import BuyBitcoin from './BuyBitcoin';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

const title = 'Buy Bitcoin';

function action() {
  return {
    chunks: ['home'],
    title: 'buybitcoin',
    component: (
      <Layout>
        <BuyBitcoin title={title} />
      </Layout>
    ),
  };
}

export default action;
