export type Ratings = {
  id: 'ratings';
  key: 'ratings';
  value: typeof ratings[number]['value'];
  title: typeof ratings[number]['title'] | string;
};

const ratings = [
  {
    value: '4.5',
    title: '4.5 & up',
  },
  {
    value: '4.0',
    title: '4.0 & up',
  },
  {
    value: '3.5',
    title: '3.5 & up',
  },
  {
    value: '3.0',
    title: '3.0 & up',
  },
] as const;
