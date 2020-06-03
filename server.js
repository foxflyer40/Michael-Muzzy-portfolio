
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const sgMail = require('@sendgrid/mail');
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://michaelmuzzy:${process.env.PASSWORD}@contactformrecord-izqt0.mongodb.net/contact?`)
// "mongodb+srv://michaelmuzzy:${process.env.PASSWORD}@contactformrecord-izqt0.mongodb.net/test?retryWrites=true&w=majority"

const newDataBase = mongoose.connection;

newDataBase.on('error', (err)=>{console.log('something went wrong:',err)});
newDataBase.once('open', ()=>{console.log('Connected...')});

app.use(express.static(path.join(_dirname, '/client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencode({ extended: false }));

app.post('/newContact', getMessage);

const messageSchema = new mongoose.Schema({
   name: String,
   email: String,
   message: String
})

const Message = mongoose.model('Message', messageSchema);

async function getMessage(req,res) {
   let name = req.body.name;
   let email = req.body.email;
   let message = req.body.message;

   let newMessage = Message({
      name: name,
      email: email,
      message: message
   })

   await newMessage.save()

   sgMail.setApiKey(process.env.ContactFormApi);
   const msg = {
      to: 'foxflyer40@gmail.com',
      from: email,
      subject: 'New Contact from foxflyer40.com',
      text: `${message}\nFrom: ${name}`
   };
   sgMail.send(msg);
   res.type('application/json').send(JSON.stringify({status: 'thank-you'}))

}







app.use(express.static(path.resolve('./client/build')))

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

app.listen(port, () => {
   console.log('listening ', port)
})
