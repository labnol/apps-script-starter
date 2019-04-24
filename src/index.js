import doGet from './server/webapp';
import './es6';

global.doGet = doGet;

global.sendmail = (email = 'amit@labnol.org') => {
  GmailApp.sendEmail(email, 'Apps Script Starter', 'Hello Google Apps Script');
};
