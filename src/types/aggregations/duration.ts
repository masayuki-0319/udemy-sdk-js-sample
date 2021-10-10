export type Duration = {
  id: 'duration';
  key: 'duration';
  value: typeof durations[number]['value'];
  title: typeof durations[number]['title'] | string;
};

const durations = [
  {
    value: 'all',
    title: 'All Levels',
  },
  {
    title: 'Beginner',
    value: 'beginner',
  },
  {
    title: 'Intermediate',
    value: 'intermediate',
  },
  {
    title: 'Expert',
    value: 'expert',
  },
] as const;
