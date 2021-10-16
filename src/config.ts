import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import base64 from 'base-64';

const UDEMY_AFFILIATE_CLIENT_ID = '';
const UDEMY_AFFILIATE_CLIENT_PASSWORD = '';

const authorizationToken = base64.encode(
  `${UDEMY_AFFILIATE_CLIENT_ID}:${UDEMY_AFFILIATE_CLIENT_PASSWORD}`
);

export type AffiliateApiConfig = {
  client: AxiosStatic;
  cleintConfig: AxiosRequestConfig;
};
export const getConfig = (): AffiliateApiConfig => {
  return {
    client: axios,
    cleintConfig: {
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Basic ${authorizationToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      baseURL: 'https://www.udemy.com/api-2.0',
    },
  };
};
