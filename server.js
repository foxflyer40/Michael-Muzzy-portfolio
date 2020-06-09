
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/Footer/Formtwo', getMessage);


async function getMessage(req, res) {
   let name = req.body.name;
   let email = req.body.email;
   let message = req.body.message;
   console.log(name)
   console.log(email)
   console.log(message)


   sgMail.setApiKey(process.env.ContactFormApi);
   const msg = {
      to: 'foxflyer40@gmail.com',
      from: email,
      subject: 'New Contact from foxflyer40.com',
      text: `${message}\nFrom: ${name}`
   };
   sgMail.send(msg);
   res.type('application/json').send(JSON.stringify({ status: 'thank-you' }))
   console.log(msg)
}


app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
   console.log('listening ', port)
})

