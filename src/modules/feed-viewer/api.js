import { parseURL } from 'blindparser';

export function fetchFeed(url) { // eslint-disable-line import/prefer-default-export
  return new Promise((resolve, reject) => {
    parseURL(url, {
      followRedirect: false,
      timeout: 5000,
    }, (err, out) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(out);
    });
  });
}
