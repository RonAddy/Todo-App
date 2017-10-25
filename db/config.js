const options = {
  query: (e) => {
    return e.query;
  },
};

const pgp = require('pg-promise')(options);
