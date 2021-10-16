// 課題
// フィールド毎に key が設定可能
// course は、courseList と courseDetail では @min の取得データが異なる
// user は、講師 or 受講生で取得データが異なる
// course_category 等の一部　key は、course fields で明示的に取得しないと設定しても意味なし
type FieldKey =
  | 'fields[course]'
  | 'fields[user]'
  | 'fields[course_review]'
  | 'fields[course_category]'
  | 'fields[course_subcategory]'
  | 'fields[lecture]'
  | 'fields[chapter]'
  | 'fields[quiz]';

type FieldBuiltinSet = '@min' | '@default' | '@all';

type LectureFiedld = {
  'fields[lecture]': any
};
type ReponseField<T extends FieldKey> = {
  [K in T]: FieldBuiltinSet;
};

export type CourseListField = ReponseField<
  | 'fields[course]'
  | 'fields[user]'
  | 'fields[course_category]'
  | 'fields[course_subcategory]'
>;

export type CourseDetailField = ReponseField<
  | 'fields[course]'
  | 'fields[user]'
  | 'fields[course_category]'
  | 'fields[course_subcategory]'
>;

export type CourseReviewListField = ReponseField<
  'fields[course_review]' | 'fields[course]' | 'fields[user]'
>;

// 課題
// course と user も指定可能
export type CurriculumItemField = ReponseField<
  'fields[lecture]' | 'fields[chapter]' | 'fields[quiz]'
>;
