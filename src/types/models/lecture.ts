export type Lecture = BaseSet &
  Partial<MinSet> &
  Partial<DefaultSet> &
  Partial<AllSet>;

export type LectureKeys = keyof MinSet | keyof DefaultSet | keyof AllSet;

type BaseSet = {
  _class: 'lecture';
  id: number;
};

type MinSet = {
  title: string;
  created: string;
};

type DefaultSet = {
  description: string;
  title_cleaned: string;
  is_published: boolean;
  transcript: string;
  is_downloadable: boolean;
  is_free: boolean;
  asset: {
    _class: 'asset';
    id: number;
    asset_type: string;
    title: string;
    created: string;
  };
  sort_order: number;
  can_be_previewed: boolean;
};

type AllSet = {
  (key: typeof notCompatible[number]): any;
};

//
// TODO: 未実装の key ( 全ての設定は面倒だし、必要そうな key から実装していきたい )
//
const notCompatible = [
  'content_summary',
  'course',
  'curriculum_url',
  'has_caption',
  'num_supplementary_assets',
  'object_index',
  'preview_url',
  'supplementary_assets',
  'url',
  'user',
] as const;
