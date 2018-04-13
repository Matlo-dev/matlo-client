# Matlo-client

## Nodejs client for Matlo REST API

[![Build Status](https://travis-ci.org/Matlo-dev/matlo-client.svg?branch=master)](https://travis-ci.org/Matlo-dev/matlo-client)

### Installation

Install via npm

```bash
# Latest release
npm install matlo

# Development version
npm install git+https://github.com/matlo-dev/matlo-client.git
```

### Usage

#### Authenticate with login/password

```js
const matlo = require('matlo-client');

matlo.clientFromUserCredentials(
  {
    email: 'foo@bar.com',
    password: 'foobar',
    domain: 'cloud.matlo.com',
  },
  (error, client) => {
    // DO WHATEVER YOU WANT
  }
);
```

#### Authenticate with token

```js
const matlo = require('matlo-client');

matlo.clientFromToken(
  {
    token: 'some valid json web token',
    domain: 'cloud.matlo.com',
  },
  (error, client) => {
    // DO WHATEVER YOU WANT
  }
);
```

#### Implemented methods

* user
  * get
  * update
  * createDashboard
* dashboard
  * get
  * update
  * delete
  * setUserRights
* metadata
  * set
  * update
* data
  * send
  * delete

Methods are implemented as the Matlo dev team need them.

### Contributions

Issues and pull requests are welcome.

### License

Matlo-client is under [MIT license](./LICENSE).
