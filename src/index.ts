import { AxiosResponse } from 'axios';

import { AffiliateApiConfig, getConfig } from './config.js';
import {
  CourseDetailParameters,
  CoursePublicCurriculumItemsParameters,
  CourseReviewListParameters,
  CoursesParameters,
} from './types/parameter.js';
import {
  CourseDetailResponse,
  CourseListResponse,
  CourseReviewListResponse,
  CoursePublicCurriculumItemsResponse,
} from './types/response.js';

// /courses
export const getCourseList = async (
  config: AffiliateApiConfig,
  params: CoursesParameters
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
export const getCourseDetail = async (
  config: AffiliateApiConfig,
  params: CourseDetailParameters
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
  params: CourseReviewListParameters
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
  params: CoursePublicCurriculumItemsParameters
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

//
// デバッグ実行用関数
// yarn node--loader ts - node / esm./ src / index.ts
//
(async () => {
  const auth = getConfig();
  const { status, statusText, data } = await getCoursePublicCurriculumItems(
    auth,
    {
      course_id: 3197760,
      query: {
        'fields[chapter]': '@min',
      },
    }
  );

  console.log('status: ', status);
  console.log('statusText: ', statusText);
  console.log('data: ', data.results[0]);
  console.log('-----------------');
})();
//
//
//
