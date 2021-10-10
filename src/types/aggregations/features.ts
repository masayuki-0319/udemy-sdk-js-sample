export type Features = {
  id: 'features';
  key: typeof features[number]['key'];
  value: 'true' | 'false';
  title: typeof features[number]['title'] | string;
};

const features = [
  {
    key: 'has_closed_caption',
    value: 'true',
    title: 'Captions',
  },
  {
    key: 'has_simple_quiz',
    value: 'true',
    title: 'Quizzes',
  },
  {
    key: 'has_coding_exercises',
    value: 'true',
    title: 'Coding Exercises',
  },
] as const;
