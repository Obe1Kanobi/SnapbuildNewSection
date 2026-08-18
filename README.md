План по шагам:

1) Анализ стиля (40–60 мин, сегодня). Открой сайт в DevTools и выпиши: цвета фона/текста/акцентов (фон у них светлый,  #f2f2f4), шрифт (посмотри font-family в computed styles), радиусы скруглений карточек, тени, ширину контейнера, вертикальные отступы между секциями, стиль кнопок и hover-состояния. Всё это сразу занеси в tailwind.config как токены (colors.brand, borderRadius, fontFamily). Это же станет пунктом README «как анализировалась стилистика». Скачай их логотипы клиентов и картинки прямо с сайта (URL ассетов открытые) — или замени на нейтральные плейсхолдеры в том же стиле.
2) Каркас проекта (30 мин). npm create vite@latest, Tailwind, структура: components/sections/ (по компоненту на секцию), components/ui/ (Button, Card, SectionTitle, Accordion, Tabs). Общие UI-примитивы — это плюс к «качеству кода» и гарантия визуальной консистентности между старыми и новыми секциями.
3) Воспроизведение существующих секций (сегодня вечер + завтра утро, ~4–5 ч). Порядок: шапка + hero + футер (задают тон) → простые секции (логотипы, продуктовые карточки, безопасность, CTA) → интерактивные (вкладки возможностей, FAQ-аккордеон, роадмап, таблица сравнения). Тексты бери их же — это воспроизведение, так можно.
4) Пять новых секций (завтра день, ~3–4 ч). Мой набор с учётом требования «разные по структуре и назначению»:
- Тарифы — 3 карточки + переключатель месяц/год (интерактив). Логично перед FAQ.
- Отзывы — слайдер или сетка цитат с должностью и компанией. После таблицы сравнения или безопасности.
- Кейсы использования — сценарии для маркетинга/продаж/дизайна, можно с цифрами результата. После вкладок «Возможности».
- Метрики/цифры — «5 минут вместо 3 недель», количество генераций и т.п. Компактная секция после hero или сравнения.
- Форма обратной связи — RHF, валидация (имя, email, компания), понятные ошибки, success-состояние вместо формы после отправки. Перед финальным CTA.
- Контент пиши под их продукт (дизайн-системы, бренд, генерация) — никакого Lorem Ipsum, это явно в требованиях.
5) Адаптив (1–1.5 ч). Проверяй на 375 / 768 / 1280. Особое внимание: таблица сравнения (на мобиле её придётся превратить в карточки или горизонтальный скролл внутри контейнера), вкладки, роадмап. Проверь отсутствие горизонтального скролла страницы — частая ошибка из-за марки логотипов или отрицательных отступов.
6) Деплой на GitHub Pages (30 мин, не оставляй на последний момент). В vite.config.ts обязательно base: '/snapbuild-test-task/' (имя репо), иначе на Pages отвалятся все ассеты — это самая частая причина «белого экрана». Деплой через пакет gh-pages (npm run build && gh-pages -d dist) или GitHub Actions. Проверь ссылку в инкогнито.
7) README (40 мин). В задании 10 обязательных пунктов — пройдись по списку буквально, включая «что не удалось и почему», «что бы улучшил» и «какие AI-инструменты использовал». Честность тут плюс, они прямо пишут, что AI разрешён — важно лишь понимать код.
Финальная проверка. Консоль без ошибок, hover-состояния на всех кликабельных элементах, npm run build без ворнингов, ссылка открывается без авторизации.

Тайминг: сегодня — шаги 1–2 и начало 3. Завтра до обеда — добить существующие секции, день — новые секции, вечер — адаптив, деплой, README. Если увидишь, что не успеваешь воспроизвести всё, — режь роадмап и таблицу сравнения (они самые трудоёмкие), упрости до ближайшего аналога и честно опиши это в README: пункт «что не удалось реализовать» там есть не случайно.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```


