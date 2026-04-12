const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sharvarigovele777@gmail.com', 
    pass: 'hitjmehbimvvxuam' 
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sharvarigovele777@gmail.com',
    replyTo: email, 
    subject: `New Portfolio Message from ${name}`,
    text: `Sender Email: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, error: error.message });
    }
    res.status(200).send({ success: true, message: 'Email sent!' });
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
