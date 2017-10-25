const options = {
  query: (e) => {
    console.log(e.query);
  },
};

//Importing the pg-promise module
const pgp = require('pg-promise')(options);

function setDatabse() {
  if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
    return pgp({
    database: "tc_TodosApp",
    port: 5432,
    host: "localhost",
  })
  }
  else if (process.env.NODE_ENV === "production") {
    return pgp(process.env.DATABASE_URL);
  }
}
const db = setDatabse();

//Exporting db for use in Todos.js model
module.exports = db;
