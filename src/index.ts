import axios, { AxiosResponse } from 'axios';
import base64 from 'base-64';
import {
  getCourses,
  CoursesParameters,
  CoursesResponse,
  getCourseDetail,
  CourseDetailParameters,
  CourseDetailResponse,
  getCourseReviews,
  GetCourseReviewsParams,
  GetCourseReviewsResponse,
  getPublicCurriculumItems,
  GetPublicCurriculumItemsParams,
  GetPublicCurriculumItemsResponse,
} from './types/index.js';

type ClientOptions = {
  auth: {
    clientID: string;
    clientPassword: string;
  };
};

type RequestParameters = {
  path: string;
  queryParams?: {
    [k: string]: any;
  };
};

export default class Client {
  readonly auth: string;
  readonly prefixUrl: string;

  public constructor(options: ClientOptions) {
    const authToken = base64.encode(
      `${options.auth.clientID}:${options.auth.clientPassword}`
    );

    this.auth = `Basic ${authToken}`;
    this.prefixUrl = 'https://www.udemy.com/api-2.0';
  }

  private async request<ResponseBody>({
    path,
    queryParams,
  }: RequestParameters): Promise<AxiosResponse<ResponseBody>> {
    const endpoint = `${this.prefixUrl}/${path}`;
    const clientConfig = {
      headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: this.auth,
        'Content-Type': 'application/json;charset=utf-8',
      },
      params: queryParams,
    };

    return await axios.get<ResponseBody>(endpoint, clientConfig);
  }

  async getCourses(
    args?: CoursesParameters
  ): Promise<AxiosResponse<CoursesResponse>> {
    return await this.request<CoursesResponse>({
      path: getCourses.path,
      queryParams: args?.queryParams,
    });
  }

  async getCourseDetail(
    args: CourseDetailParameters
  ): Promise<AxiosResponse<CourseDetailResponse>> {
    return await this.request<CourseDetailResponse>({
      path: getCourseDetail.path(args.courseID),
      queryParams: args.queryParams,
    });
  }

  async getCourseReviews(
    args: GetCourseReviewsParams
  ): Promise<AxiosResponse<GetCourseReviewsResponse>> {
    return await this.request<GetCourseReviewsResponse>({
      path: getCourseReviews.path(args.courseID),
      queryParams: args.queryParams,
    });
  }

  async getPublicCurriculumItems(
    args: GetPublicCurriculumItemsParams
  ): Promise<AxiosResponse<GetPublicCurriculumItemsResponse>> {
    return await this.request<GetPublicCurriculumItemsResponse>({
      path: getPublicCurriculumItems.path(args.courseID),
      queryParams: args.queryParams,
    });
  }
}
