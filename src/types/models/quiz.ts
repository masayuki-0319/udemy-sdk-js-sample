export type Quiz = BaseKey &
  Partial<MinKey> &
  Partial<DefaultKey> &
  Partial<AllKey>;

export type QuizKeys = keyof MinKey | keyof DefaultKey | keyof AllKey;

type BaseKey = {
  _class: 'quiz';
  id: number;
};

type MinKey = {
  title: string;
  type: 'coding-exercise' | string;
  created: string;
};

type DefaultKey = {
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

type AllKey = {
  (key: typeof containKeys[number]): any;
};

const containKeys = [
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
