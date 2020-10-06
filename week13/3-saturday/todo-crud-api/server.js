
const express = require("express");
const app = express();
const pgp = require("pg-promise")();

const db = pgp("postgres://username:password@host:port/database");

