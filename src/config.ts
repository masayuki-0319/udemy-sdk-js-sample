import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import base64 from 'base-64';

export type AffiliateApiConfig = {
  client: AxiosStatic;
  cleintConfig: AxiosRequestConfig;
};

export const getConfig = (
  clientID: string,
  clientPassword: string
): AffiliateApiConfig => {
  const authorization = base64.encode(`${clientID}:${clientPassword}`);
  return {
    client: axios,
    cleintConfig: {
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Basic ${authorization}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      baseURL: 'https://www.udemy.com/api-2.0',
    },
  };
};
