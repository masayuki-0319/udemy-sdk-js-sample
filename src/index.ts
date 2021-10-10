import axios from 'axios';

import { authorizationToken } from './config.js';

const BASE_URL = 'https://www.udemy.com/api-2.0/courses/?page_size=1';

type CourseListResponse = {
  [k: string]: any;
};

const response = async () => {
  const response = await axios.get<CourseListResponse>(BASE_URL, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      Authorization: `Basic ${authorizationToken}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  return response;
};

const main = async () => {
  const { status, statusText, data } = await response();
  console.log('status: ', status);
  console.log('statusText: ', statusText);
  console.log('data: ', data);
};
main();
