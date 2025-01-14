const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const session = require('express-session');

const sessionConfig = {
  name: 'session',
  secret: 'fbiopenup',
  cookie: {
      maxAge: 1000 * 10,
      secure: false,
      httpOnly: true
  },
  resave:false,
  saveOnInitialize: true
}

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();
server.use(session(sessionConfig));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

module.exports = server;
