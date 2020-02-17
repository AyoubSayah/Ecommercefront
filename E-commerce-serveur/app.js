const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

// DB config
const db= 'mongodb://127.0.0.1:27017/formation';
// connect to Mongo
mongoose.connect(db , { useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));
   


app.use(bodyParser.urlencoded({
  limit : '50mb',
      extended: true
      
    }));
app.use(bodyParser.json({}));

var http = require('http');
var server = http.Server(app);


require('./routes/chariot.route')(app);
require('./routes/produits.route')(app);
require('./routes/admin.route')(app);
app.get('/', (req, res) => {
    
  res.send("Welcome")
});


const PORT = process.env.PORT || 5000;
server.listen(PORT);
