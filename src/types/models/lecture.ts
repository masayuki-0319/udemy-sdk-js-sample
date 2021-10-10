export type Lecture = BaseKey &
  Partial<MinKey> &
  Partial<DefaultKey> &
  Partial<AllKey>;

export type LectureKeys = keyof MinKey | keyof DefaultKey | keyof AllKey;

type BaseKey = {
  _class: 'lecture';
  id: number;
};

type MinKey = {
  title: string;
  created: string;
};

type DefaultKey = {
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

type AllKey = {
  (key: typeof containKeys[number]): any;
};

const containKeys = [
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
