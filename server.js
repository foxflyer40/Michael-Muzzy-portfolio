
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
         console.log(name)
         console.log(email)
         console.log(message)
      }


      app.use(express.static(path.resolve('./client/build')))

      app.get('*', (req, res) => {
         res.sendFile(path.join(__dirname, '/client/build/index.html'))
      })

      app.listen(port, () => {
         console.log('listening ', port)
      })

