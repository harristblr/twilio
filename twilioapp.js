// Twilio Credentials
const accountSid = 'AC32c61bc4c67f2d045504b3c5eb66a855';
const authToken = 'bc5df0206796f61416888b5976523f5e'

// const accountSid = 'AC32c61bc4c67f2d045504b3c5eb66a855';
// const authToken = 'bc5df0206796f61416888b5976523f5e'

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+917356883351',
    // from: '+12055188238',
    from: '+13348458172',
    body: 'My name is Alex',
  })
  .then(message => console.log(message.sid));