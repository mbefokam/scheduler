//var CronJob = require('cron').CronJob;
var express = require('express');
var router = express.Router();
var request = require("request");
var cron = require('cron');
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'mailapp2017@gmail.com',
        pass: '1234567890@',
    },
});

const mailOptions = {
    from: 'mailapp2017@gmail.com',
    to: 'mbefokam@gmail.com, pm299@njit.edu',
    subject: 'Job Notification',
    html: '****New Job: The system was running and has been updated*****',
};

const failedMailOptions = {
    from: 'mailapp2017@gmail.com',
    to: 'mbefokam@gmail.com, pm299@njit.edu',
    subject: 'Fialed Job Notification',
    html: '****Failed Job: The last Job has failed the app needs some to be upgrade*****',
};

//var job = new cron.CronJob('* * * * *', function() {
//Runs every weekday (Monday through Friday at 11:30:00 PM)
var job = new cron.CronJob('00 30 01 * * 1-5', function() {
  var resObj = {
             url: "http://localhost:8080/api/data"
             , method: 'GET'
         };
         request(resObj, function (error, response, body) {
             if (error) {
                 transport.sendMail(failedMailOptions, (error, info) => {
                   if (error) {
                     console.log(error);
                   }
                   console.log("application not responding");
                 });
             }
             else {
               transport.sendMail(mailOptions, (error, info) => {
                 if (error) {
                  console.log(error);
                 }
              //   console.log('Message %s sent: %s', info.messageId, info.response);
               });
              //  console.log(response.statusCode);
             }
         });
}, null, true);
