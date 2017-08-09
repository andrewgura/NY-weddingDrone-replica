var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

router.get('/', function(req, res) {
  res.render('index');
});

router.post('/contact', function(req, res) {

  var mailOpts, smtpTrans;

  //email account for only this sample site, nothing to steal
  smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "websitewebsite9@gmail.com",
      pass: "simple123"
    }
  });

    mailOpts = {
      from: req.body.firstName + " " + req.body.email,
      //plz dont spam me
      to: "andrewgura94@gmail.com",
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
