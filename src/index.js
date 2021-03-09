import './es6';
import './server/menu';
import doGet from './server/webapp';

global.doGet = doGet;

global.sendmail = (email = Session.getActiveUser().getEmail()) => {
  const htmlBody = `
    <p>This email was sent using the <a href="https://www.labnol.org/internet/google-apps-script-developers/32305/">Apps Script Starter</a></p>
    <p>For assistance, please contact <a href="https://twitter.com/labnol">@labnol</a></p>
  `;

  const textBody = htmlBody.replace(/<[^>]+>/g, ' ');

  GmailApp.sendEmail(email, 'Hello from Google Apps Script', textBody, {
    htmlBody,
  });

  console.log('Email message sent to', email);
};
