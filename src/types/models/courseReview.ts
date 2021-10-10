import { CourseCategory } from './courseCategory';
import { User } from './user';

export type CourseReview = BaseKey &
  Partial<MinKey> &
  Partial<DefaultKey> &
  Partial<AllKey>;

export type CourseReviewKeys = keyof MinKey | keyof DefaultKey | keyof AllKey;

// MEMO: Time は ISO 8601 ( e.g. '2021-09-28T08:24:03Z' )
type BaseKey = {
  _class: 'course_review';
  id: number;
};

type MinKey = {
  content: string;
  rating: number;
  created: string;
  modified: string;
  user_modified: string;
};

type DefaultKey = {
  user: User;
};

type AllKey = {
  course: CourseCategory;
  response: any;
  location: any;
  survey_answers: SurveyAnswer[];
  content_html: any;
  created_formatted_with_time_since: string;
};

//
// TODO: 謎オブジェクト
//
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
  'id',
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
