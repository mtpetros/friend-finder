var express = require('express');
var app = express();
var path = require("path");

var survey = function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "../public/survey.html"));
};

var home = function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
};

module.exports = {survey, home};