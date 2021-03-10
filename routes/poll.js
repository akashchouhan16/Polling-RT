const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');
require('dotenv').config();

const pusher = new Pusher({
  appId: process.env.appID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: "ap2",
  useTLS: true
});

const Vote = require('../model/vote.model');

router.get('/', (req,res)=>{
    Vote.find().then(votes => res.json({success : true, votes : votes}))
})

router.post('/', (req,res)=>{
    const newVote = {
        os : req.body.os,
        points : 1
    }
    new Vote(newVote).save().then(vote =>{
        pusher.trigger("get-poll", "get-vote", { 
        points : parseInt(vote.points),
        os : vote.os 
    });
    return res.json({success : true, message : 'Thank you for voting!'});
    })

    
})

// Exporting our router.
module.exports = router;