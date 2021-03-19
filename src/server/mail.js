global.sendmail = () => {
  const email = Session.getActiveUser().getEmail();

  const TUTORIAL =
    'https://www.labnol.org/internet/google-apps-script-developers/32305/';

  const htmlBody = `
    <p>This email was sent using the <a href="${TUTORIAL}">Apps Script Starter</a></p>
    <p>For assistance, please contact <a href="https://twitter.com/labnol">@labnol</a></p>
  `;

  const textBody = htmlBody.replace(/<[^>]+>/g, ' ');

  GmailApp.sendEmail(email, 'Hello from Google Apps Script', textBody, {
    htmlBody,
  });

  // eslint-disable-next-line no-console
  console.log('Email message sent to', email);
};
