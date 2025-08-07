import queryString from 'query-string';

export const createQueryString = (baseUrl, data) => {
  const params = queryString.stringify(data, { sort: false, arrayFormat: 'bracket' });
  return `${baseUrl}?${params}`;
};

export const makeQueryString = () => {
  const baseUrl = 'https://example.com';
  const data = { name: 'amit', location: 'india', interests: ['workspace', 'apps script'] };
  const url = createQueryString(baseUrl, data);
  Logger.log(`URL: ${url}`);
};
