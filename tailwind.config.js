/** @type {import('tailwindcss').Config} */
/**
 * Токены дизайн-системы Снэпбилд (https://snapbuild.ru/)
 * Собраны автоматически из CSS-токенов платформы.
 *
 * ВНИМАНИЕ: проект использует Tailwind CSS v4.
 * Чтобы этот конфиг работал в v4, он подключён из CSS через `@config "../tailwind.config.js"`
 * в файле src/index.css. Значения токенов продублированы и в @theme (v4-нативный путь).
 */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // ===== Шрифты =====
    fontFamily: {
      // Фирменный шрифт Снэпбилд — TT Commons Pro
      sans: [
        '"TT Commons Pro"',
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "sans-serif",
      ],
      primary: ['"TT Commons Pro"', "ui-sans-serif", "system-ui", "sans-serif"],
      // Акцентный вариант (используется в hero/banner как display)
      secondary: [
        '"TT Commons Pro"',
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "monospace",
      ],
    },

    // ===== Брейкпоинты (как у Снэпбилд) =====
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },

    // ===== Радиусы скруглений =====
    // Базовая шкала Tailwind v4-токенов сайта:
    //   sm .25rem | md .5rem | lg .75rem | xl 1rem | 2xl 1.5rem | full 9999px
    // Плюс фиксированные радиусы карточек из кастомных dds-классов (20px/24px/32px).
    borderRadius: {
      none: "0",
      sm: "0.25rem", // 4px
      md: "0.5rem", // 8px — радиус кнопок/инпутов/чипов
      lg: "0.75rem", // 12px — радиус карточек по умолчанию
      xl: "1rem", // 16px
      "2xl": "1.5rem", // 24px — большие карточки, превью
      "3xl": "2rem", // 32px — CTA-блок / launch
      card: "1.25rem", // 20px — радиус большинства dds-карточек (tabs, accordion, why-safe)
      full: "9999px", // пилюли / кнопки-табы
    },

    // ===== Тени =====
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.08)",
      // --shadow-md из токенов: карточки elevated
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -2px rgba(0, 0, 0, 0.10)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      // Стеклянная "кнопочная" тень (dds-btn / pill)
      glass: "0 4px 16px rgba(0, 0, 0, 0.04)",
      // Тень под карточками hero (из .dds-... :hover)
      card: "0 8px 32px -4px rgba(0, 0, 0, 0.15)",
      // Тень мобильного меню
      menu: "0 16px 40px rgba(0, 0, 0, 0.12)",
      none: "none",
    },

    // ===== Цвета бренда =====
    colors: {
      // Основная фирменная (primary) палитра Снэпбилд — синяя
      brand: {
        50: "#eff3ff",
        100: "#dae2ff",
        200: "#becdff",
        300: "#91aeff",
        400: "#5e84fc",
        500: "#3758f9", // основной акцент
        600: "#2237ee", // hover
        700: "#1a25db",
        800: "#1c20b1",
        900: "#1c228c",
        950: "#161755",
        DEFAULT: "#3758f9",
      },

      // Первичная палитра (алиас к brand)
      primary: {
        50: "#eff3ff",
        100: "#dae2ff",
        200: "#becdff",
        300: "#91aeff",
        400: "#5e84fc",
        500: "#3758f9",
        600: "#2237ee",
        700: "#1a25db",
        800: "#1c20b1",
        900: "#1c228c",
        950: "#161755",
        DEFAULT: "#3758f9",
      },

      // Нейтральные (из :root дизайн-системы + oklch-токены сайта)
      neutral: {
        white: "#ffffff",
        50: "#ffffff",
        100: "#f2f2f4", // --background-primary
        200: "#ececee",
        300: "#dcdde0",
        400: "#adafb4",
        500: "#5a5b62", // --text-secondary / muted
        600: "#71747d",
        700: "#4e515a",
        800: "#2c2d34",
        900: "#1c1c1f", // --fill-0 / text-primary
        950: "#141414",
        DEFAULT: "#5a5b62",
      },

      // Поверхности / фоны (как в :root)
      background: {
        DEFAULT: "#f2f2f4", // --background-primary (серый фон секций)
        primary: "#f2f2f4",
        secondary: "#ffffff",
      },
      foreground: {
        primary: "#ffffff",
        secondary: "#fafafa",
        tertiary: "#f5f5f7", // фоновые табы/плитки
        contrast: "#ffffff",
      },

      // Текстовые
      text: {
        primary: "#000000",
        secondary: "#5a5b62",
        tertiary: "rgba(0, 0, 0, 0.60)",
        contrast: "#ffffff",
      },

      // Акцентные градиентные цвета фирменной растяжки
      accent: {
        orange: "#ff6d3d", // #ff6d3c
        pink: "#ff6ba7", // #ff6ca7
        purple: "#bb6dff",
        peach: "#ffcdb3",
        rose: "#ffa4b6",
        blush: "#ffb2e9",
        lavender: "#d4d6ff",
      },

      // Полупрозрачные разделители (из токенов --divider / stroke)
      divider: "rgba(0, 0, 0, 0.08)",
      stroke: {
        primary: "rgba(0, 0, 0, 0.05)",
        secondary: "rgba(0, 0, 0, 0.40)",
        tertiary: "rgba(0, 0, 0, 0.10)",
      },

      // Overlay / затемнения (banner)
      overlay: {
        dark: "rgba(0, 0, 0, 0.50)",
      },
    },

    // ===== Отступы / spacing (шкала v4: base 0.25rem) =====
    spacing: {
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },

    // ===== Контейнер / ширина страницы =====
    maxWidth: {
      // Дефолтная ширина контента = брейкпоинт xl (1440px), отступы 60px
      container: "1440px",
      content: "48rem", // banner-content-max-width
      hero: "64rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      "screen-xl": "1440px",
      prose: "65ch",
      none: "none",
      full: "100%",
    },

    // ===== Анимации =====
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inout: "cubic-bezier(0.4, 0, 0.2, 1)",
      "smooth-out": "cubic-bezier(0.16, 1, 0.3, 1)", // dds-accordion easing
    },
    transitionDuration: {
      DEFAULT: "150ms",
      fast: "200ms", // --transition-duration-fast
      slow: "367ms", // dds-accordion open
    },

    // ===== Компоненты =====
    extend: {
      // Высоты/минимальные высоты ключевых секций
      minHeight: {
        banner: "650px", // --banner-min-height
        section: "100vh",
      },
      // Ширины иконок-плиток
      width: {
        logo: "153px",
        icon: "56px",
      },
      height: {
        icon: "56px",
        tile: "3rem",
      },
    },
  },

  plugins: [],
};
