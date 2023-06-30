const Application = require('../models/application');
const { check, validationResult } = require('express-validator');
const appMailer = require('../mailers/appMailer');

exports.store = async (req, res, next) => {
  const application = {
    'name': req.body.name,
    'email': req.body.email.toLowerCase(),
    'message': req.body.message
  };
  await Application.create(application);

  appMailer.applicationNotify({ email: application.email, data: { name: req.body.first_name } });

  req.flash('form', `${req.body.first_name}, You are a true hero!`);
  res.redirect('/');
};

exports.validate = [
  check('name').trim().isLength({ min: 1 }).withMessage('Name is required.'),
  check('email').isEmail().withMessage('Incorrect e-mail.').isLength({ min: 1 }).withMessage('E-mail must be provided'),
  check('message').isLength({ min: 1 }).withMessage('Message is required.'),
];

exports.checkValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('home', {
      validated: req.body,
      errors: errors.mapped(),
      showLightbox: 'true'
    });
  }

  next();
};

exports.normalizeData = (req, res, next) => {
  let nameArray = req.body.name.split(' ');
  req.body.first_name = nameArray.shift();
  req.body.last_name = nameArray.join(' ');

  next();
};
