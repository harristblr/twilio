// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   const message = twiml.message();
//   message.body('OK then...............................');
//   message.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });




const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var bodyParser = require('body-parser')
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
  // res.end(JSON.stringify(req.body, null, 2))
// })
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message('How are you');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  console.log("Result----------------",req.body);
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});









// const http = require('http');
// const express = require('express');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();

// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

// http.createServer(app).listen(1337, () => {
//   console.log('Express server listening on port 1337');
// });