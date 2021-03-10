const mongoose = require('mongoose');
require('dotenv').config();


mongoose.Promise = global.Promise
// Use Local for testing, Use Cloud for Deployment Purposes.
const cloudDBURL = process.env.cloudDBURL;
const localDBURL = process.env.localDBURL;

mongoose.connect(localDBURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected To the DataBase!');
}).catch(err =>{
    console.log(`Error While connecting to the DataBase.... :/`);
})