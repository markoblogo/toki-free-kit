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
    title: 'Toki Pona Starter Kit',
    description: 'Базовый комплект для старта: краткие пояснения, учебные тексты и ориентиры для самостоятельной практики.',
    language: 'toki pona / English',
    format: 'PDF',
    link: 'https://toki.abvx.xyz/kit/',
  },
  {
    id: 'parallel-texts',
    title: 'Parallel Reading Texts',
    description: 'Учебные тексты с параллельными строками для практики чтения, сравнения переводов и закрепления словаря.',
    language: 'toki pona / English / Russian',
    format: 'Web / PDF',
    link: 'TODO',
  },
  {
    id: 'sitelen-practice',
    title: 'sitelen pona Practice Pages',
    description: 'Практические страницы для чтения sitelen pona и постепенного запоминания базовых паттернов.',
    language: 'toki pona',
    format: 'PDF',
    link: 'TODO',
  },
  {
    id: 'mini-glossary',
    title: 'Mini Glossary',
    description: 'Краткий словарь частотной лексики и устойчивых шаблонов для более уверенного чтения.',
    language: 'toki pona / English',
    format: 'Web',
    link: 'https://toki.abvx.xyz/kit/',
  },
  {
    id: 'translation-notes',
    title: 'Translation Notes',
    description: 'Комментарий к переводческим решениям: выбор формулировок, неоднозначности и примеры альтернатив.',
    language: 'English / Russian',
    format: 'Markdown / Web',
    link: 'TODO',
  },
  {
    id: 'guided-reading',
    title: 'Guided Reading Checklist',
    description: 'Пошаговый чек-лист для чтения материалов: что делать перед, во время и после короткой учебной сессии.',
    language: 'English / Russian',
    format: 'PDF',
    link: 'TODO',
  },
  {
    id: 'beginner-phrases',
    title: 'Beginner Phrase Sheet',
    description: 'Лист с базовыми конструкциями и частыми формулами для первых недель практики toki pona.',
    language: 'toki pona / English',
    format: 'PDF',
    link: 'https://toki.abvx.xyz/kit/',
  },
  {
    id: 'reading-index',
    title: 'Free Materials Index',
    description: 'Сводный индекс всех бесплатных материалов с быстрыми переходами к стартовым и продвинутым ресурсам.',
    language: 'English / Russian',
    format: 'Web',
    link: 'https://toki.abvx.xyz/kit/',
  },
];
