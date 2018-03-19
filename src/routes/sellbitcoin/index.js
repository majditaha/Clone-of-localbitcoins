import React from 'react';
import SellBitcoin from './SellBitcoin';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';

const title = 'Sell Bitcoin';

function action() {
  return {
    chunks: ['sellbitcoin'],
    title: 'sellbitcoin',
    component: (
      <Layout>
        <SellBitcoin title={title} />
      </Layout>
    ),
  };
}

export default action;
