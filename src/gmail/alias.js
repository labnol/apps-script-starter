/* Returns the Gmail Aliases of the authenticated user */
export const getGmailAliases = () => {
  try {
    const { sendAs = [] } = Gmail.Users.Settings.SendAs.list('me');
    if (sendAs.length) {
      return sendAs.map((alias) => alias.sendAsEmail);
    }
  } catch (f) {
    Logger.log(f.message);
  }
  return [Session.getActiveUser().getEmail()];
};
