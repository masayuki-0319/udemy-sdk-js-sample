import base64 from 'base-64';

const UDEMY_AFFILIATE_CLIENT_ID = '';
const UDEMY_AFFILIATE_CLIENT_PASSWORD = '';

export const authorizationToken = base64.encode(
  `${UDEMY_AFFILIATE_CLIENT_ID}:${UDEMY_AFFILIATE_CLIENT_PASSWORD}`
);
