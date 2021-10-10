import axios, { AxiosRequestConfig } from 'axios';

import { authorizationToken } from './config.js';
import {
  CourseDetailResponse,
  CourseListResponse,
  CourseReviewListResponse,
} from './types/response.js';

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

type UdemyResponse =
  | CourseListResponse
  | CourseDetailResponse
  | CourseReviewListResponse;

const COURSE_LIST_ENDPOINT = '/courses/?page_size=1' as const;
const COURSE_DETAIL_ENDPOINT = '/courses/3197760' as const;
const COURSE_REVIEW_LIST_ENDPOINT = '/courses/3197760/reviews' as const;

type ENDPOINT =
  | typeof COURSE_LIST_ENDPOINT
  | typeof COURSE_DETAIL_ENDPOINT
  | typeof COURSE_REVIEW_LIST_ENDPOINT;

const apiRequest = async <T extends UdemyResponse>(endpoint: ENDPOINT) => {
  const response = await axios.get<T>(endpoint, baseRequestConfig);

  return response;
};

const main = async () => {
  const { status, statusText, data } =
    await apiRequest<CourseReviewListResponse>(COURSE_REVIEW_LIST_ENDPOINT);
  console.log('status: ', status);
  console.log('statusText: ', statusText);
  console.log('data: ', data);
  console.log('-----------------');
};

main();
