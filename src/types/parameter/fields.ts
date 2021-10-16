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

type LectureField = {
  'fields[lecture]': FieldBuiltinSet;
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

export type CurriculumItemField = ReponseField<
  'fields[lecture]' | 'fields[chapter]' | 'fields[quiz]'
>;
