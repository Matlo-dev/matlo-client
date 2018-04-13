const agent = require('superagent');

module.exports = function engine(options) {
  const doneCallbacks = [];
  const failCallbacks = [];

  const request = agent(options.type, options.url);
  request.set(options.headers);
  if (options.data) {
    request.send(options.data);
  }
  request.end((err, res) => {
    if (err) {
      failCallbacks.forEach(done => done(err.response, err.message));
    } else {
      doneCallbacks.forEach(done => done(res.body));
    }
  });

  const promise = {
    fail(callback) {
      failCallbacks.push(callback);
      return promise;
    },
    done(callback) {
      doneCallbacks.push(callback);
      return promise;
    },
  };
  return promise;
};
