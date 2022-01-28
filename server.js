const express = require("express");
const app = express();


const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res  ) => {
  res.sendFile(__dirname + "/public/contactFile.html");
});

app.post('/', (req, res) => {
  console.log(req.body);

  var nodemailer = require('nodemailer');

  // Create the transporter with the required configuration for Gmail
  // change the user and pass !
  var transporter = nodemailer.createTransport({
      host: 'smtp.rediffmail.com',
      port: 465,
      service : "gmail",
      secure: true, // use SSL
      auth: {
          user: 'sharmabusiness224@gmail.com',
          pass: 'pswd@business'
      }
  });
  
  
  // setup e-mail data
  var mailOptions = {
      from:  req.body.email,             //'"Our Code World " <myemail@gmail.com>', // sender address (who sends)
      to:    'sharmabusiness224@gmail.com',       //mymail2@mail.com', // list of receivers (who receives)
      subject: req.body.subject,                         //'Hello', // Subject line
      text:    req.body.message  ,        //'Hello world ', // plaintext body
          //html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      req.send('success')
      console.log('Message sent: ' + info.response);
  });
});
app.listen(PORT, () => {
  console.log(`This server is runnning on ${PORT}`);
});
