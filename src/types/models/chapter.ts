export type Chapter = BaseSet &
  Partial<MinSet> &
  Partial<DefaultSet> &
  Partial<AllSet>;

export type ChapterKeys = keyof MinSet | keyof DefaultSet | keyof AllSet;

type BaseSet = {
  _class: 'chapter';
  id: number;
};

type MinSet = {
  created: string;
};

type DefaultSet = {
  sort_order: number;
  title: string;
  description: string;
  is_published: boolean;
};

type AllSet = {
  (key: typeof notCompatible[number]): any;
};

//
// TODO: 未実装の key ( 全ての設定は面倒だし、必要そうな key から実装していきたい )
//
const notCompatible = [
  'description',
  'gt_assignments',
  'object_index',
  'sort_order',
  'title_cleaned',
] as const;
