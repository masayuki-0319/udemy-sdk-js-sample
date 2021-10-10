import { Aggregations } from './aggregations';
import { Course } from './models/course';
import { CourseReview } from './models/courseReview';
import { CurriculumItem } from './models/curriculumItem';

type ListResponse<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

export type CourseListResponse = {
  aggregations: Aggregations;
  search_tracking_id: string;
} & ListResponse<Course>;

export type CourseDetailResponse = Course;

export type CourseReviewListResponse = ListResponse<CourseReview>;

export type CoursePublicCurriculumItemsResponse = ListResponse<CurriculumItem>;
