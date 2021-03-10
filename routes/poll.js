const express = require('express');
const router = express.Router();
const Pusher = require('pusher');
const mongoose = require('mongoose');


const pusher = new Pusher({
  appId: "1169254",
  key: "c0d567a8dd6b88cd244d",
  secret: "7f5d30e66b4c0c63cb50",
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
        pusher.trigger("get-poll", "get-vote", { //os-poll, os-vote
        points : parseInt(vote.points),
        os : vote.os //os : req.body.os
    });
    return res.json({success : true, message : 'Thank you for voting!'});
    })

    
})

// Exporting our router.
module.exports = router;