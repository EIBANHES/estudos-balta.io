'use strict' //faz com que seja mais criterioso

//importação de modulos
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');


const app = express();
const port = 3000;
app.set('port', port);