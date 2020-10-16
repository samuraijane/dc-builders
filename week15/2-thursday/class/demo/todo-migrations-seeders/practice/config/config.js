require('dotenv').config()

let dbPassword = process.env.DB_PASSWORD || null

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": dbPassword,
    "database": "danny",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
