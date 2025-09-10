/* Returns the Gmail Aliases of the authenticated user */
export const getGmailAliases = () => {
  try {
    const { sendAs = [] } = Gmail.Users.Settings.SendAs.list('me');
    if (sendAs && sendAs.length) {
      const emails = sendAs
        .map((alias) => alias && alias.sendAsEmail)
        .filter(Boolean);
      if (emails.length) {
        return Array.from(new Set(emails));
      }
    }
  } catch (err) {
    const message = (err && err.message) || String(err);
    Logger.log('getGmailAliases error: ' + message);
  }
  try {
    const fallbackAliases = (typeof GmailApp !== 'undefined' && GmailApp.getAliases)
      ? GmailApp.getAliases()
      : [];
    const primary = Session.getActiveUser().getEmail();
    const all = [primary].concat(fallbackAliases || []);
    return Array.from(new Set(all.filter(Boolean)));
  } catch (e) {
    const msg = (e && e.message) || String(e);
    Logger.log('getGmailAliases fallback error: ' + msg);
    return [Session.getActiveUser().getEmail()];
  }
};
