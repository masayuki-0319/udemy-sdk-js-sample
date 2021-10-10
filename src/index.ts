import axios, { AxiosRequestConfig } from 'axios';

import { authorizationToken } from './config.js';
import { CourseDetailResponse, CourseListResponse } from './types/response.js';

const DOMAIN = 'https://www.udemy.com/';
const VERSION = 'api-2.0';
const BASE_URL = DOMAIN + VERSION;

const baseRequestConfig: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json, text/plain, */*',
    Authorization: `Basic ${authorizationToken}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  baseURL: BASE_URL,
};

const COURSE_LIST_ENDPOINT = '/courses/?page_size=1' as const;
const COURSE_DETAIL_ENDPOINT = '/courses/3197760' as const;

const apiRequest = async <T extends CourseListResponse | CourseDetailResponse>(
  endpoint: typeof COURSE_LIST_ENDPOINT | typeof COURSE_DETAIL_ENDPOINT
) => {
  const response = await axios.get<T>(endpoint, baseRequestConfig);

  return response;
};

const main = async () => {
  const { status, statusText, data } = await apiRequest<CourseDetailResponse>(
    COURSE_DETAIL_ENDPOINT
  );
  console.log('status: ', status);
  console.log('statusText: ', statusText);
  console.log('data: ', data);
  console.log('-----------------');
};

main();
