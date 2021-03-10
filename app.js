const express = require('express');
const path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors');

require('dotenv').config();
// DB Config
require('./config/db');
const app = express();
const poll = require('./routes/poll');
const PORT = process.env.PORT || 3000;
// Public Folder : 
app.use(express.static(path.join(__dirname,'public')));
// Body-Parser Middleware : 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// To Enable CORS : 
app.use(cors());


app.use('/poll', poll);

app.listen(PORT, ()=>{
    console.log(`Server is live on PORT : ${PORT}`);
})