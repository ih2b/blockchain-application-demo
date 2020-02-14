var bodyParser = require('body-parser')
var http = require('http')
var cors = require('cors')
var express = require('express');
const app = express();
app.options('*', cors());
app.use(cors())

const ROUTERVote = require('./routes/smartcontract.routes');

var morgan = require('morgan');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
ROUTERVote(app);

app.listen(3000, () => console.log('port 3000!!!'));
module.exports = app
