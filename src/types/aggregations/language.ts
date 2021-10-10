export type Language = {
  id: 'language';
  key: 'language';
  value: typeof languages[number]['value'];
  title: typeof languages[number]['title'] | string;
};

const languages = [
  {
    value: 'en',
    title: 'English',
  },
  {
    value: 'pt',
    title: 'Português',
  },
  {
    value: 'es',
    title: 'Español',
  },
  {
    value: 'tr',
    title: 'Türkçe',
  },
  {
    value: 'ja',
    title: '日本語',
  },
  {
    value: 'de',
    title: 'Deutsch',
  },
  {
    value: 'fr',
    title: 'Français',
  },
  {
    value: 'ar',
    title: 'العربية',
  },
  {
    value: 'it',
    title: 'Italiano',
  },
  {
    value: 'ru',
    title: 'Русский',
  },
  {
    value: 'zh',
    title: '中文',
  },
  {
    value: 'hi',
    title: 'हिन्दी',
  },
  {
    value: 'pl',
    title: 'Polski',
  },
  {
    value: 'id',
    title: 'Bahasa Indonesia',
  },
  {
    value: 'ko',
    title: '한국어',
  },
  {
    value: 'ur',
    title: 'اردو',
  },
  {
    value: 'th',
    title: 'ภาษาไทย',
  },
  {
    value: 'ro',
    title: 'Română',
  },
  {
    value: 'ta',
    title: 'தமிழ்',
  },
  {
    value: 'nl',
    title: 'Nederlands',
  },
  {
    value: 'he',
    title: '‏עברית‏',
  },
  {
    value: 'vi',
    title: 'Tiếng Việt',
  },
  {
    value: 'hu',
    title: 'Magyar',
  },
  {
    value: 'el',
    title: 'Ελληνικά',
  },
  {
    value: 'te',
    title: 'Telugu',
  },
  {
    value: 'bn',
    title: 'Bangla',
  },
  {
    value: 'az',
    title: 'Azərbaycan dili',
  },
  {
    value: 'mr',
    title: 'मराठी',
  },
  {
    value: 'ml',
    title: 'Malayāḷam',
  },
  {
    value: 'fa',
    title: 'فارسی',
  },
  {
    value: 'af',
    title: 'Afrikaans',
  },
  {
    value: 'hr',
    title: 'Hrvatski',
  },
  {
    value: 'uk',
    title: 'Українська',
  },
  {
    value: 'sv',
    title: 'Svenska',
  },
  {
    value: 'cs',
    title: 'Čeština',
  },
  {
    value: 'gu',
    title: 'ગુજરાતી',
  },
  {
    value: 'sr',
    title: 'Српски',
  },
  {
    value: 'bg',
    title: 'Български',
  },
  {
    value: 'nb',
    title: 'Norsk',
  },
  {
    value: 'my',
    title: 'မြန်မာဘာသာ',
  },
  {
    value: 'fi',
    title: 'Suomi',
  },
  {
    value: 'et',
    title: 'Eesti',
  },
  {
    value: 'kn',
    title: 'Kannaḍa',
  },
  {
    value: 'ms',
    title: 'Bahasa Melayu',
  },
  {
    value: 'ne',
    title: 'नेपाली',
  },
  {
    value: 'da',
    title: 'Dansk',
  },
  {
    value: 'sq',
    title: 'Shqip',
  },
  {
    value: 'so',
    title: 'Soomaaliga',
  },
  {
    value: 'tl',
    title: 'Filipino',
  },
  {
    value: 'uz',
    title: "O'zbek",
  },
  {
    value: 'ca',
    title: 'Català',
  },
  {
    value: 'ka',
    title: 'ქართული',
  },
  {
    value: 'lv',
    title: 'Latviešu',
  },
  {
    value: 'kk',
    title: 'Қазақша',
  },
  {
    value: 'lt',
    title: 'Lietuvių',
  },
  {
    value: 'ga',
    title: 'Gaeilge',
  },
  {
    value: 'pa',
    title: 'ਪੰਜਾਬੀ',
  },
  {
    value: 'ps',
    title: 'پښتو',
  },
  {
    value: 'sw',
    title: 'Kiswahili',
  },
  {
    value: 'mk',
    title: 'Македонски',
  },
  {
    value: 'mn',
    title: 'Монгол',
  },
  {
    value: 'sk',
    title: 'Slovenčina',
  },
  {
    value: 'hy',
    title: 'Հայերեն',
  },
  {
    value: 'ku',
    title: 'Kurdî',
  },
  {
    value: 'sl',
    title: 'Slovenščina',
  },
  {
    value: 'ay',
    title: 'Aymar aru',
  },
  {
    value: 'cy',
    title: 'Cymraeg',
  },
  {
    value: 'eu',
    title: 'Euskara',
  },
  {
    value: 'fo',
    title: 'Føroyskt',
  },
  {
    value: 'gn',
    title: "Avañe'ẽ",
  },
  {
    value: 'ht',
    title: 'Ayisyen',
  },
  {
    value: 'km',
    title: 'Khmer',
  },
  {
    value: 'qu',
    title: 'Qhichwa',
  },
  {
    value: 'tg',
    title: 'тоҷикӣ, تاجیکی‎, tojikī',
  },
  {
    value: 'tt',
    title: 'татарча / Tatarça / تاتارچا',
  },
  {
    value: 'zu',
    title: 'isiZulu',
  },
] as const;
