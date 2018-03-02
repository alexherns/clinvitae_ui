export const buildQueryString = params => Object.keys(params).map(k =>
  `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`).join('&');

export const flattenStrings = (strings) => {
  const flattened = [].concat(...strings);
  const unique = new Set(flattened);
  const filtered = [...unique].filter(text => !!text);
  return filtered;
};
