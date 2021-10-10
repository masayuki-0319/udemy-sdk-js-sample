export type Chapter = BaseKey &
  Partial<MinimumKey> &
  Partial<DefaultKey> &
  Partial<AllKey>;

export type ChapterKeys = keyof MinimumKey | keyof DefaultKey | keyof AllKey;

type BaseKey = {
  _class: 'chapter';
  id: number;
};

type MinimumKey = {
  created: string;
};

type DefaultKey = {
  sort_order: number;
  title: string;
  description: string;
  is_published: boolean;
};

type AllKey = {
  (key: typeof containKeys[number]): any;
};

const containKeys = [
  'description',
  'gt_assignments',
  'object_index',
  'sort_order',
  'title_cleaned',
] as const;
