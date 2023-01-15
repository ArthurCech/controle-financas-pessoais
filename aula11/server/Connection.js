const pgp = require("pg-promise");

class Connection {
  constructor() {
    this.connection = pgp()(
      "postgres://postgres:postgrespw@localhost:32768/financas_pessoais"
    );
  }

  query(statement, params) {
    return this.connection.query(statement, params);
  }
}

module.exports = Connection;
