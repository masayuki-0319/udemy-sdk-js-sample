import { PaginationParams } from './parameter/pagination';
import {
  CourseDetailField,
  CourseListField,
  CourseReviewListField,
  CurriculumItemField,
} from './parameter/field';

export type CoursesParameters = {
  query?: Partial<CourseListField> & Partial<PaginationParams>;
};

export type CourseDetailParameters = {
  course_id: number;
  query?: Partial<CourseDetailField>;
};

export type CourseReviewListParameters = {
  course_id: number;
  query?: Partial<CourseReviewListField> & Partial<PaginationParams>;
};

export type CoursePublicCurriculumItemsParameters = {
  course_id: number;
  query?: Partial<CurriculumItemField> & Partial<PaginationParams>;
};
