const Client = require('djax-client');

const engine = require('./engine');

module.exports = function client({ domain, token }) {
  return new Client({
    settings: {
      baseUrl: `https://api.${domain}`,
      engine,
      solver: /\:([^/:]+)/g,
    },

    defaults: {
      dataType: 'json',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },

    services: {
      user: {
        get: {
          type: 'GET',
          url: '/user/:uid',
        },
        update: {
          type: 'POST',
          url: '/user/:uid',
        },
        createDashboard: {
          type: 'POST',
          url: '/user/:uid/dashboards',
        },
      },
      dashboard: {
        get: {
          type: 'GET',
          url: '/dashboard/:did',
        },
        update: {
          type: 'POST',
          url: '/dashboard/:did',
        },
        delete: {
          type: 'DELETE',
          url: '/dashboard/:did',
        },
        setUserRights: {
          type: 'POST',
          url: '/dashboard/:did/user/:uid',
        },
      },
      metadata: {
        set: {
          type: 'POST',
          url: '/dashboard/:did/metadata',
        },
        update: {
          type: 'PUT',
          url: '/dashboard/:did/metadata',
        },
      },
      data: {
        send: {
          type: 'POST',
          url: '/dashboard/:did/data',
        },
        delete: {
          type: 'DELETE',
          url: '/dashboard/:did/data',
        },
      },
    },
  });
};
