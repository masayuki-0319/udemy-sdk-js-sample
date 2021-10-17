export type Quiz = BaseSet &
  Partial<MinSet> &
  Partial<DefaultSet> &
  Partial<AllSet>;

export type QuizKeys = keyof MinSet | keyof DefaultSet | keyof AllSet;

type BaseSet = {
  _class: 'quiz';
  id: number;
};

type MinSet = {
  title: string;
  type: 'coding-exercise' | string;
  created: string;
};

type DefaultSet = {
  description: string;
  title_cleaned: string;
  is_published: boolean;
  sort_order: number;
  object_index: number;
  is_draft: boolean;
  version: number;
  duration: number;
  pass_percent: number;
};

type AllSet = {
  (key: typeof notCompatible[number]): any;
};

//
// TODO: 未実装の key ( 全ての設定は面倒だし、必要そうな key から実装していきたい )
//
const notCompatible = [
  'changelog',
  'content_details',
  'content_summary',
  'course',
  'is_randomized',
  'num_assessments',
  'requires_draft',
  'url',
  'user',
] as const;
