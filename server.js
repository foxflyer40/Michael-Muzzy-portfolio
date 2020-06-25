
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mailgun = require("mailgun-js");
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/App/Formtwo', getMessage);


async function getMessage(req, res) {
   let name = req.body.name;
   let email = req.body.email;
   let message = req.body.message;

   const api_key = process.env.API_KEY
const DOMAIN = 'heroku.com';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});

res.type('application/json').send(JSON.stringify({ status: 'Your message has been sent.  Thank you!' }))

}






app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
   console.log('listening ', port)
})

