const pgPool = require('../config/database');
const logger = require('../library/logger');

class User {
  constructor() {
    this.pgPool = pgPool;
    this.logger = logger;
    this.table = 'core.users';
  }

  async rows() {
    const result = await this.pgPool
      .query(`SELECT * FROM ${this.table}`)
      .then((res) => res.rows)
      .catch((err) => {
        this.logger.write(__filename, 'error', err);
      });

    return result;
  }

  async search(sql, params) {
    const query = {
      text: `SELECT * FROM ${this.table} WHERE ${sql}`,
      values: params,
    };

    const result = await this.pgPool
      .query(query)
      .then((res) => res.rows)
      .catch((err) => this.logger.write(__filename, 'error', err));

    return result;
  }

  async update(fieldValues, where, params) {
    const query = {
      text: `UPDATE ${this.table} SET ${fieldValues} WHERE ${where}`,
      values: params,
    };

    const result = await this.pgPool
      .query(query)
      .then((res) => res.rows)
      .catch((err) => this.logger.write(__filename, 'error', err));

    return result;
  }
}

module.exports = new User();
