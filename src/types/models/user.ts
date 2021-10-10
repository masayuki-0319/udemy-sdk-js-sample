export type User = BaseKey &
  Partial<MinKey> &
  Partial<DefaultKey> &
  Partial<AllKey>;

export type UserKeys = keyof MinKey | keyof DefaultKey | keyof AllKey;

type BaseKey = {
  _class: 'user';
};

type MinKey = {
  title: string;
  name: string;
  display_name: string;
};

type DefaultKey = {
  job_title: string;
  image_50x50: string;
  image_100x100: string;
  initials: string;
  url: string;
};

type AllKey = {
  (key: typeof notCompatible[number]): any;
};

const notCompatible = [
  '_class',
  'avg_rating',
  'avg_rating_recent',
  'course_list_visible',
  'created',
  'description',
  'has_activated',
  'has_instructor_intent',
  'has_organizations_allow_public_profiles',
  'image_125_H',
  'image_200_H',
  'image_75x75',
  'is_co_instructor',
  'is_co_instructor_with_edit_permission',
  'is_disabled',
  'is_followed',
  'is_scim_managed',
  'is_user_instructor',
  'is_user_premium_instructor',
  'locale',
  'mutable_time_zone',
  'num_course_reviews',
  'num_published_courses',
  'num_subscribed_courses',
  'num_visible_taught_courses',
  'owns_courses_in_ufb_content_collections',
  'owns_courses_with_enrollments',
  'permissions',
  'profile_visible',
  'surname',
  'time_zone',
  'total_num_reviews',
  'total_num_students',
  'total_num_students_performance_permission',
  'total_subscribed_courses',
  'tracking_id',
  'type_label',
  'url_facebook',
  'url_linkedin',
  'url_personal_website',
  'url_title',
  'url_twitter',
  'url_youtube',
] as const;
