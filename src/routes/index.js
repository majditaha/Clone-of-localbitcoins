/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },
    {
      path: '/buybitcoin',
      load: () => import(/* webpackChunkName: 'buybitcoin' */ './buybitcoin'),
    },
    {
      path: '/sellbitcoin',
      load: () => import(/* webpackChunkName: 'sellbitcoin' */ './sellbitcoin'),
    },
    {
      path: '/accounts/profile',
      load: () => import(/* webpackChunkName: 'profile' */ './profile'),
    },
    {
      path: '/forums',
      load: () => import(/* webpackChunkName: 'forums' */ './forums'),
    },
    {
      path: '/wallet',
      load: () => import(/* webpackChunkName: 'wallet' */ './wallet'),
    },
    {
      path: '/wallet_receive',
      load: () => import(/* webpackChunkName: 'wallet_receive' */ './wallet_receive'),
    },
    {
      path: '/transaction',
      load: () => import(/* webpackChunkName: 'transaction' */ './transaction'),
    },
    {
      path: '/security',
      load: () => import(/* webpackChunkName: 'security' */ './security'),
    },
    {
      path: '/merchant',
      load: () => import(/* webpackChunkName: 'merchant' */ './merchant'),
    },
    { 
      path: '/trusted',
      load: () => import(/* webpackChunkName: 'trusted' */ './trusted'),
    },
    {
      path: '/support',
      load: () => import(/* webpackChunkName: 'support' */ './support'),
    },
    {
      path: '/support/request',
      load: () => import(/* webpackChunkName: 'request' */ './request'),
    },
    {
      path: '/teriyaki',
      load: () => import(/* webpackChunkName: 'teriyaki' */ './teriyaki'),
    },
    {
      path: '/purchase',
      load: () => import(/* webpackChunkName: 'purchase' */ './purchase'),
    },
    {
      path: '/advertise',
      load: () => import(/* webpackChunkName: 'advertise' */ './advertise'),
    },

    {
      path: '/loggedin',
      load: () => import(/* webpackChunkName: 'loggedin' */ './loggedin'),
    },
    {
      path: '/contacts/all',
      load: () => import(/* webpackChunkName: 'contacts_all' */ './contacts_all'),
    },
    {
      path: '/contacts/completed',
      load: () => import(/* webpackChunkName: 'contacts_completed' */ './contacts_completed'),
    },
    {
      path: '/contacts/cancelled',
      load: () => import(/* webpackChunkName: 'contacts_completed' */ './contacts_cancelled'),
    },
    {
      path: '/password_change',
      load: () => import(/* webpackChunkName: 'changepassword' */ './changepassword'),
    },
    {
      path: '/accounts/profile_phone',
      load: () => import(/* webpackChunkName: 'profile_phone' */ './profile_phone'),
    },
    {
      path: '/accounts/profile_realname',
      load: () => import(/* webpackChunkName: 'profile_realname' */ './profile_realname'),
    },
    {
      path: '/accounts/profile_pincode',
      load: () => import(/* webpackChunkName: 'profile_pincode' */ './profile_pincode'),
    },
    {
      path: '/accounts/profile_receipts',
      load: () => import(/* webpackChunkName: 'profile_recipts' */ './profile_recipts'),
    },
    {
      path: '/accounts/two_factor',
      load: () => import(/* webpackChunkName: 'profile_twofactor' */ './profile_twofactor'),
    },
    {
      path: '/accounts/browsers',
      load: () => import(/* webpackChunkName: 'profile_browsers' */ './profile_browsers'),
    },
    {
      path: '/accounts/login_history',
      load: () => import(/* webpackChunkName: 'profile_history' */ './profile_history'),
    },

    {
      path: '/posttrade',
      load: () => import(/* webpackChunkName: 'posttrade' */ './posttrade'),
    },
    {
      path: '/exchange',
      load: () => import(/* webpackChunkName: 'exchange' */ './exchange'),
    },
    
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - RomanCrypto`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
