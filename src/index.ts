import { AxiosResponse } from 'axios';

import { AffiliateApiConfig, getConfig } from './config.js';
import { AffiliateApiParams } from './types/parameter.js';
import {
  CourseDetailResponse,
  CourseListResponse,
  CourseReviewListResponse,
  CoursePublicCurriculumItemsResponse,
} from './types/response.js';

// /courses
type CoursesRequestParams = {
  query?: AffiliateApiParams;
};
export const getCourseList = async (
  config: AffiliateApiConfig,
  params: CoursesRequestParams
): Promise<AxiosResponse<CourseListResponse>> => {
  const { client, cleintConfig } = config;
  const { query } = params;

  const response = await client.get<CourseListResponse>('/courses', {
    ...cleintConfig,
    params: query,
  });
  return response;
};

// /courses/:id
type CourseDetailRequestParams = {
  course_id: number;
  query?: AffiliateApiParams;
};
export const getCourseDetail = async (
  config: AffiliateApiConfig,
  params: CourseDetailRequestParams
): Promise<AxiosResponse<CourseDetailResponse>> => {
  const { client, cleintConfig } = config;
  const { course_id, query } = params;

  const response = await client.get<CourseDetailResponse>(
    `/courses/${course_id}`,
    {
      ...cleintConfig,
      params: query,
    }
  );
  return response;
};

// /courses/:id/reviews
export const getCourseReviews = async (
  config: AffiliateApiConfig,
  params: CourseDetailRequestParams
): Promise<AxiosResponse<CourseReviewListResponse>> => {
  const { client, cleintConfig } = config;
  const { course_id, query } = params;

  const response = await client.get<CourseReviewListResponse>(
    `/courses/${course_id}/reviews`,
    {
      ...cleintConfig,
      params: query,
    }
  );
  return response;
};

// /courses/:id/public-curriculum-items
export const getCoursePublicCurriculumItems = async (
  config: AffiliateApiConfig,
  params: CourseDetailRequestParams
): Promise<AxiosResponse<CoursePublicCurriculumItemsResponse>> => {
  const { client, cleintConfig } = config;
  const { course_id, query } = params;

  const response = await client.get<CoursePublicCurriculumItemsResponse>(
    `/courses/${course_id}/public-curriculum-items`,
    {
      ...cleintConfig,
      params: query,
    }
  );
  return response;
};
