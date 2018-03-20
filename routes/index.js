var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/contact', function(req, res) {

  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      //email address and that emails password, this sends the email
      user: "website6377@gmail.com",
      pass: "Simple123"
    }
  });

    mailOpts = {
      from: req.body.firstName + " " + req.body.email,
      //email that receives the form post
      to: "website6377@gmail.com",
      subject: "Website Contact",
      text: req.body.firstName + " " + req.body.lastName + " " + req.body.email + " " + req.body.comments
    }

    smtpTrans.sendMail(mailOpts, function(err,info){
      if (err) {
  			res.status(500).json({errors: err.errors})
  		} else {
  			res.status(200).json({data: 'success'})
  		}
    })

})

module.exports = router;
