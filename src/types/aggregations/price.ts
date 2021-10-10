export type Price = {
  id: 'price';
  key: 'price';
  value: typeof price[number]['value'];
  title: typeof price[number]['title'] | string;
};

const price = [
  {
    value: 'price-paid',
    title: 'Paid',
  },
  {
    value: 'price-free',
    title: 'Free',
  },
] as const;
