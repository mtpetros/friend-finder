var express = require('express');
var app = express();
var profileArray = require('../data/friends.js');

var friends = function (req, res) {
    res.json('../data/friends.js');
};

var newProf = function (req, res) {
    var newProfile = req.body;
    profileArray.push(newProfile);
    console.log(profileArray);

    var newScoreTotal = 0;
    for (var i = 0; i <newProfile.scores.length; i++) {
        newScoreTotal += parseInt(newProfile.scores[i]);        
    }
    console.log(newScoreTotal);
    console.log(profileArray[0].scores);

    for (var i = 0; i < profileArray.length - 1; i++) {
            profileArray[i].scoreTot = 0;
        for (var j = 0; j <profileArray[i].scores.length; j++) {
            profileArray[i].scoreTot += parseInt(profileArray[i].scores[j]);

        }
        console.log(profileArray[i].scoreTot);
    }

    var absDiffArr = [];
    for (var i = 0; i < profileArray.length - 1; i++) {
        var absDiff = (Math.abs(profileArray[i].scoreTot - newScoreTotal));
        absDiffArr.push(absDiff);
    }
    console.log(absDiffArr);
    var indexMatch = absDiffArr.indexOf(Math.min.apply(null, absDiffArr));
    console.log(Math.min.apply(null, absDiffArr));
    console.log(indexMatch);
    newProf.match = profileArray[indexMatch];
    console.log(newProf.match);

    res.send(`<p>${newProf.match.name}</p>
        <img src="${newProf.match.photo}">'`);
};

module.exports = {friends, newProf};