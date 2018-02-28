export const buildQueryString = params => Object.keys(params).map(k =>
  `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');
