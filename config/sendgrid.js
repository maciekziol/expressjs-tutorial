const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  from: 'test@example.com', 
  mail_settings: {
    sandbox_mode: {
      enable: process.env.NODE_ENV !== 'production'
    }
  }
};

exports.message = message;


