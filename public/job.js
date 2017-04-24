//var CronJob = require('cron').CronJob;
var express = require('express');
var router = express.Router();
var request = require("request");
// var job = new CronJob(new Date(), function() {
//   console.log("THIS WORKS");
  // var resObj = {
  //            url: "http://localhost:8080/api/data"
  //            , method: 'POST'
  //            , json: req.body
  //
  //        };
  //        request(resObj, function (error, response, body) {
  //            if (error) {
  //                res.send(response.statusCode);
  //            }
  //            else {
  //                res.send(response.statusCode, body);
  //            }
  //        });
//   }, function () {
//   console.log("THIS WORKS");
//   },
//   true, /* Start the job right now */
//   timeZone /* Time zone of this job. */
// );
var cron = require('cron');

var job = new cron.CronJob('* * * * *', function() {
    console.log('Function executed!');
}, null, true);
