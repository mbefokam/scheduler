# scheduler

Requirement Install and Run the following project https://github.com/mbefokam/data_platform

From the folder directory run : npm install

To reschedule the runner batch -> job.js Line 32 

Seconds: 0-59
Minutes: 0-59
Hours: 0-23
Day of Month: 1-31
Months: 0-11
Day of Week: 0-6

The current setting is '00 30 01 * * 1-5' which means Monday through Friday at 11:30:00 PM

The default runner is '* * * * *' which runs the application every few seconds 
