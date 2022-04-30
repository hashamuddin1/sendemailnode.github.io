var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hasham.mangotech@gmail.com',
        pass: ''
    }
});

var mailOptions = {
    from: 'hasham.mangotech@gmail.com',
    to: 'hashamlaptop@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi Hasham .`
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});