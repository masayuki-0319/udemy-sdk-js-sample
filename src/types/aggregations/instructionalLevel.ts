export type InstructionalLevel = {
  id: 'instructional_level';
  key: 'instructional_level';
  value: typeof instructionalLevel[number]['value'];
  title: typeof instructionalLevel[number]['title'] | string;
};

const instructionalLevel = [
  {
    key: 'instructional_level',
    value: 'all',
    title: 'All Levels',
  },
  {
    key: 'instructional_level',
    value: 'beginner',
    title: 'Beginner',
  },
  {
    key: 'instructional_level',
    value: 'intermediate',
    title: 'Intermediate',
  },
  {
    key: 'instructional_level',
    value: 'expert',
    title: 'Expert',
  },
] as const;
