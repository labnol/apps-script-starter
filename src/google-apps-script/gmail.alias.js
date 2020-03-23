/* Returns the Gmail Aliases of the authenticated user */
const getGmailAliases = () => {
  try {
    const { sendAs = [] } = Gmail.Users.Settings.SendAs.list('me');
    if (sendAs.length) {
      return sendAs.map((alias) => alias.sendAsEmail);
    }
  } catch (f) {
    console.error(f);
  }
  return [Session.getActiveUser().getEmail()];
};

export default getGmailAliases;
