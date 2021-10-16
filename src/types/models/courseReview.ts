import { CourseCategory } from './courseCategory';
import { User } from './user';

export type CourseReview = BaseSet &
  Partial<MinSet> &
  Partial<DefaultSet> &
  Partial<AllSet>;

export type CourseReviewKeys = keyof MinSet | keyof DefaultSet | keyof AllSet;

type BaseSet = {
  _class: 'course_review';
  id: number;
};

type MinSet = {
  content: string;
  rating: number;
  created: string;
  modified: string;
  user_modified: string;
};

type DefaultSet = {
  user: User;
};

type AllSet = {
  course: CourseCategory;
  response: any;
  location: any;
  survey_answers: SurveyAnswer[];
  content_html: any;
  created_formatted_with_time_since: string;
};

type SurveyAnswer = {
  _class: 'survey_user_answer';
  (k: typeof notCompatible[number]): any;
};
const notCompatible = [
  'answer_freeform',
  'answer_option_id',
  'answer_option_text',
  'answer_option_text_code',
  'data',
  'organization_id',
  'question_id',
  'question_order',
  'question_text_code',
  'question_text_short',
  'related_object_id',
  'related_object_type',
  'user_id',
  'visitor_uuid',
] as const;
