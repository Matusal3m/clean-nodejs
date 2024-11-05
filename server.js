require('dotenv').config();

const express = require('express');
const axios   = require('axios');
const http    = require('http');
const cors    = require('cors');

const libs     = { express, axios };
const app      = express();
const server   = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/mainRouter')(app, libs);

server.listen(3333, () => {
  try{
    console.info('🟢 Application up');
  }catch(error) {
    throw new Error(error);
  }
});