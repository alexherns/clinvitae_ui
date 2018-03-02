import merge from 'lodash.merge';

const settings = {
  global: {
    clinvitae: {
      baseUrl: 'https://clinvitae.invitae.com/',
      searchPath: 'v0/variants',
      autocompletePath: 'v0/genes/suggestions',
    },
  },
  development: {
    clinvitae: {
      baseUrl: 'http://localhost:5000/',
    },
  },
  production: {},
};

const env = typeof window !== 'undefined' && window.location.hostname.includes('localhost')
  ? 'development'
  : 'production';

const config = merge(settings.global, settings[env]);

export default config;
