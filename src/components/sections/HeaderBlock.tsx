import { useState } from 'react'
import logo from '../../assets/snapbuild-logo.svg'
import { Button } from '../ui/Button'

const NAV_LINKS = [
  { href: '#product', label: 'Продукт' },
  { href: '#features', label: 'Возможности' },
  { href: '#use-cases', label: 'Кейсы' },
  { href: '#metrics', label: 'Метрики' },
  { href: '#pricing', label: 'Тарифы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#feedback', label: 'Контакты' },
  { href: '#faq', label: 'FAQ' },
]

/**
 * Шапка по токенам Снэпбилд (.dds-header):
 * sticky — прилипает к верху при скролле, полупрозрачный белый фон
 * с blur, логотип 153px слева, навигация по центру, кнопки справа.
 * До 1023px — бургер-меню.
 */
export function HeaderBlock() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-6 z-50 mx-auto mt-6 w-full max-w-[1440px] rounded-2xl bg-white/85 text-neutral-900 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-4 py-4 md:px-10">
        {/* Логотип */}
        <a href="#" className="inline-flex shrink-0">
          <img
            src={logo}
            alt="Снэпбилд"
            className="h-[22px] w-[153px] object-contain md:h-auto md:w-[153px]"
          />
        </a>

        {/* Навигация (desktop) */}
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base leading-relaxed text-neutral-700 transition-colors hover:text-brand-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Кнопки (desktop) */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://builder.snapbuild.ru/" variant="dark" size="sm">
            Начать сейчас
          </Button>
        </div>

        {/* Бургер (mobile) */}
        <Button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          variant="glass"
          className="flex h-10 w-10 flex-col gap-1.5 p-0 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-neutral-900 transition-transform ${
              open ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-900 transition-opacity ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-900 transition-transform ${
              open ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </Button>
      </div>

      {/* Мобильное меню */}
      {open ? (
        <div className="lg:hidden">
          <div className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-stroke-tertiary bg-white p-3 shadow-menu">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-neutral-800 transition-colors hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-stroke-tertiary pt-3">
              <Button
                href="https://builder.snapbuild.ru/"
                variant="dark"
                className="w-full"
              >
                Начать сейчас
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}