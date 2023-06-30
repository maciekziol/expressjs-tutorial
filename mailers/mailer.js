const sendgrid = require('@sendgrid/mail');
const sendgridConfig = require('../config/sendgrid');
const pug = require('pug');

exports.send = async (options) => {
  Object.assign(sendgridConfig, {
    to: options.email,
    subject: options.subject,
    html: render(options.view, options.data)
  });
  debugger
  try {
    await sendgrid.send(sendgridConfig.message);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
};

function render(filename, data) {
  return pug.renderFile(`${__dirname}/../views/mailers/${filename}.pug`, data);
};
