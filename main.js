const async = require('async');
const request = require('superagent').agent();

const client = require('./src/client');

function clientFromUserCredentials({ email, password, domain }, callback) {
  domain = domain || 'cloud.matlo.com';

  async.waterfall(
    [
      // request token
      cb => {
        request
          .post(`https://${domain}/api/session/login`)
          .send({ username: email, password })
          .end((authError, response) => {
            if (authError) {
              cb(authError);
            } else {
              cb(null, response.body.result.token);
            }
          });
      },
      // create client with token
      (token, cb) => {
        cb(null, client({ token, domain }));
      },
    ],
    callback
  );
}

function clientFromToken({ token, domain }, callback) {
  domain = domain || 'cloud.matlo.com';
  callback(null, client({ token, domain }));
}

module.exports = {
  clientFromUserCredentials,
  clientFromToken,
};
