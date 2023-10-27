var nodemailer = require('nodemailer');

// Function to generate a random 6-character alphanumeric OTP with 2 uppercase letters
function generateOTP() {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let OTP = '';
  let uppercaseCount = 0;

  while (OTP.length < 6) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    OTP += char;

    if (/[A-Z]/.test(char) && uppercaseCount < 2) {
      uppercaseCount++;
    }
  }

  return OTP;
}

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'worldmessy387@gmail.com',
    pass: 'iddm kllz cnbb igjc'
  }
});

var otp = generateOTP(); // Generate the OTP

var mailOptions = {
  from: 'worldmessy387@gmail.com',
  to: 'sdjack2826@gmail.com',
  subject: 'Your OTP for Verification',
  text: 'Your OTP is: ' + otp // Include the OTP in the email body
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
