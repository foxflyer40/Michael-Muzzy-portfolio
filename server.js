
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/App/Formtwo', getMessage);


async function getMessage(req, res) {
   let name = req.body.name;
   let email = req.body.email;
   let message = req.body.message;



res.type('application/json').send(JSON.stringify({ status: 'Your message has been sent.  Thank you!' }))

}

var API_KEY = process.env.API_KEY;
var DOMAIN = 'heroku.com';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'foxflyer40@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});


app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
   console.log('listening ', port)
})

