global.sendmail = () => {
  const email = Session.getActiveUser().getEmail();

  const TUTORIAL = 'https://www.labnol.org/internet/google-apps-script-developers/32305/';

  const htmlBody = `
    <p>This email was sent using the <a href="${TUTORIAL}">Google Apps Script Starter kit</a>.</p>
    <p> The starter kit is used by <a href="https://digitalinspiration.com/">Digital Inspiration</a> for building popular Google Workspace add-on including <a href="https://workspace.google.com/marketplace/app/mail_merge_with_attachments/223404411203">Gmail Mail Merge</a> and <a href="https://workspace.google.com/marketplace/app/document_studio/429444628321">Document Studio</a>. </p>
    <p>For assistance, please contact <a href="https://twitter.com/labnol">@labnol</a></p>`;

  const textBody = htmlBody.replace(/<[^>]+>/g, ' ');

  GmailApp.sendEmail(email, 'Hello from Google Apps Script', textBody, {
    htmlBody,
  });

  Logger.log(`Email message sent to${email}`);
};
