import config from './config';
import { buildQueryString } from './utils';

const callApi = (method, endpoint) => fetch(`${config.clinvitae.baseUrl}${endpoint}`, {
  method,
}).then((response) => {
  if (response.ok) {
    return response.json();
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
});

export const autocomplete = prefix => callApi(
  'GET',
  `${config.clinvitae.autocompletePath}?${buildQueryString({
    prefix,
  })}`,
);

export const search = gene => callApi(
  'GET',
  `${config.clinvitae.searchPath}?${buildQueryString({
    gene,
  })}`,
);
