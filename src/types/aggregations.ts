import { Duration } from './aggregations/duration';
import { Features } from './aggregations/features';
import { InstructionalLevel } from './aggregations/instructionalLevel';
import { Language } from './aggregations/language';
import { Price } from './aggregations/price';
import { Ratings } from './aggregations/ratings';

type Base = {
  id: string;
  key: string;
  value: string;
  title: string;
};

type Aggregation<T extends Base> = {
  id: T['id'];
  title: T['title'];
  options: [
    {
      key: T['key'];
      value: T['value'];
      title: T['title'];
      count: number;
    }
  ];
};

export type Aggregations = [
  Aggregation<Price>,
  Aggregation<InstructionalLevel>,
  Aggregation<Features>,
  Aggregation<Language>,
  Aggregation<Ratings>,
  Aggregation<Duration>
];
