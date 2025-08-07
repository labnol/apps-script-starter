import queryString from 'query-string';
import { createQueryString } from './http.js';

describe('createQueryString', () => {
  it('should create a query string from an object', () => {
    const baseUrl = 'https://example.com';
    const data = {
      name: 'amit',
      location: 'india',
      interests: ['workspace', 'apps script'],
    };
    const url = createQueryString(baseUrl, data);
    const parsed = queryString.parse(url.split('?')[1], { arrayFormat: 'bracket' });
    expect(parsed).toEqual(data);
  });
});
