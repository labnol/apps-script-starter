/* Get a list of Gmail labels */
export const getGmailLabels = () => {
  const { labels = [] } = Gmail.Users.Labels.list('me');
  const response = labels.filter(({ type }) => type === 'user').map(({ name }) => name);
  Logger.log('Labels: %s', response);
  return response;
};
