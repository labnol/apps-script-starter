import queryString from 'query-string';

export const makeQueryString = () => {
  const baseUrl = "https://example.com"
  const data = { name: "amit", location: "india",  interests: ["workspace", "apps script"] };
  const params = queryString.stringify(data, { sort: false, arrayFormat: 'bracket' });
  const url = `${baseUrl}?${params}`;
  Logger.log(`URL: ${url}`);
};


