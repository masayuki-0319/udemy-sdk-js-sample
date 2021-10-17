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

//
// TODO: FieldBuiltinSet で固定化してるが、実際は key 毎に取捨選択できる
//       そのため、fields 毎に model の key を設定可能にすべき
//       しかし、key の取捨選択機能を鑑みると単純に key の literal 設定だけでは解決できない ( ラップする必要あるかも )
//
type ReponseField<T extends FieldKey> = {
  [K in T]: FieldBuiltinSet;
};

//
// TODO: user, course_category, course_subcategory の query 指定に課題あり
//       course の key として、 primary_category 等の key が存在しないと query 指定しても意味がない
//       fields[course] に特定の key が存在しない時に警告を出したい ( type チェック？、ログ？ )
//       ※ この問題は API 全体の課題でもある
//
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

//
// TODO: CourseReview における user は、講師ではなく受講生を示す
//       そして、fields[user] で示す key は講師を示すため、実際と異なる
//       そのため、受講生ユーザとして key を限定したいところ
//
export type CourseReviewListField = ReponseField<
  'fields[course_review]' | 'fields[course]' | 'fields[user]'
>;

export type CurriculumItemField = ReponseField<
  'fields[lecture]' | 'fields[chapter]' | 'fields[quiz]'
>;
