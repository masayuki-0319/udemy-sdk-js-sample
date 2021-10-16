type PageParams = {
  page_size: number;
  page: number;
};

// 課題
// フィールド毎に key が設定可能
// course は、courseList と courseDetail では @min の取得データが異なる
// user は、講師 or 受講生で取得データが異なる
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

type FieldParams = {
  [K in FieldKey]: FieldBuiltinSet;
};

export type AffiliateApiParams = Partial<PageParams> & Partial<FieldParams>;
