import { Aggregations } from './aggregations';
import { Course } from './models/course';
import { CourseReview } from './models/courseReview';
import { CurriculumItem } from './models/curriculumItem';
import {
  CourseDetailField,
  CourseListField,
  CourseReviewListField,
  CurriculumItemField,
} from './parameter/fields';
import { PaginationParams } from './parameter/pagination';

type ListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

//
// TODO: 全ての API で query 未実装
//       wrap して入力しやすくする機能が必要な気がする
//       ※ fields、ページネーション、検索クエリ etc...
//       ref: https://www.udemy.com/developers/affiliate/methods/get-courses-list/
//
//
// API: コース一覧 ( /courses )
//
export type CoursesParameters = {
  queryParams?: Partial<CourseListField> & Partial<PaginationParams>;
};

export type CoursesResponse = {
  aggregations: Aggregations;
  search_tracking_id: string;
} & ListResponse<Course>;

export const getCourses = {
  path: '/courses',
  query: [],
} as const;

//
// API: コース詳細 ( /course/:id/reviews )
//
export type CourseDetailParameters = {
  courseID: number;
  queryParams?: Partial<CourseDetailField>;
};

export type CourseDetailResponse = Course;

export const getCourseDetail = {
  path: (courseID: number) => `/courses/${courseID}`,
  query: [],
} as const;

//
// API: コースのレビュー一覧 ( /course/:id/reviews )
//
export type GetCourseReviewsParams = {
  courseID: number;
  queryParams?: Partial<CourseReviewListField> & Partial<PaginationParams>;
};

export type GetCourseReviewsResponse = ListResponse<CourseReview>;

export const getCourseReviews = {
  path: (courseID: number) => `/courses/${courseID}/reviews`,
  query: [],
} as const;

//
// API: コースのカリキュラム一覧 ( /course/:id/public-curriculum-items )
//
export type GetPublicCurriculumItemsParams = {
  courseID: number;
  queryParams?: Partial<CurriculumItemField> & Partial<PaginationParams>;
};

export type GetPublicCurriculumItemsResponse = ListResponse<CurriculumItem>;

export const getPublicCurriculumItems = {
  path: (courseID: number) => `/courses/${courseID}/public-curriculum-items`,
  query: [],
} as const;
