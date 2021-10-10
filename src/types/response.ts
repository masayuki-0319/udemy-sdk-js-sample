import { Aggregations } from './aggregations';
import { Course } from './models/course';
import { CourseReview } from './models/courseReview';

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
