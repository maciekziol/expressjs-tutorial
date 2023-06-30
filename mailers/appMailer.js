const mailer = require('./mailer');

exports.applicationNotify = (options) => {
  const defaultOptions = {
    subject: '[shelter for dog] Thank you!',
    view: 'application-notification'
  };

  return mailer.send({...defaultOptions, ...options});
};
