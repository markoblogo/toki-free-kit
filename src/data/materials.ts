export type Material = {
  id: string;
  title: string;
  description: string;
  language: string;
  format: string;
  link: string;
};

export const materials: Material[] = [
  {
    id: 'starter-kit',
    title: 'Starter Reader Kit',
    description: 'Базовый бесплатный комплект для старта: короткие тексты, подсказки по чтению и навигация по ресурсам.',
    language: 'toki pona / English',
    format: 'PDF',
    link: 'https://toki.abvx.xyz/kit/',
  },
  {
    id: 'parallel-texts',
    title: 'Parallel Texts (Draft)',
    description: 'Набор учебных переводов с параллельными строками для практики чтения и словаря.',
    language: 'toki pona / English / Russian',
    format: 'Web / PDF',
    link: '#',
  },
  {
    id: 'sitelen-practice',
    title: 'sitelen pona Practice Pages',
    description: 'Листы для практики чтения sitelen pona и закрепления базовых конструкций.',
    language: 'toki pona',
    format: 'PDF',
    link: '#',
  },
  {
    id: 'mini-glossary',
    title: 'Mini Glossary',
    description: 'Краткий словарь частых слов и шаблонов, чтобы быстрее читать свободные тексты.',
    language: 'toki pona / English',
    format: 'Web',
    link: 'https://toki.abvx.xyz/kit/',
  },
  {
    id: 'translation-notes',
    title: 'Translation Notes',
    description: 'Черновые заметки по переводам и комментарии к выбору формулировок.',
    language: 'English / Russian',
    format: 'Markdown',
    link: '#',
  },
];
