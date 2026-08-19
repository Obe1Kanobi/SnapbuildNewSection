import logo from '../../assets/snapbuild-logo.svg'

const LINK_COLUMNS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Сравнение', href: '#compare' },
      { label: 'Тарифы', href: '#pricing' },
      { label: 'Дорожная карта', href: '#roadmap' },
    ],
  },
  {
    title: 'Ресурсы',
    links: [
      { label: 'Кейсы', href: '#use-cases' },
      { label: 'Отзывы', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Блог', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'Контакты', href: 'mailto:hey@snapbuild.ru' },
      { label: 'Политика конфиденциальности', href: 'https://snapbuild.ru/privacy' },
      { label: 'Соглашение', href: 'https://snapbuild.ru/agreement' },
    ],
  },
]

/**
 * Футер (.dds-footer): фон #f2f2f4, чёрный текст, верх — бренд +
 * колонки ссылок, низ — legal (копирайт + email) с верхней границей.
 */
export function FooterBlock() {
  return (
    <footer className="flex flex-col gap-10 bg-[#f2f2f4] px-4 py-6 text-black md:gap-10 md:px-10 md:py-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
        {/* Бренд-блок */}
        <div className="flex flex-col gap-4 md:flex-initial">
          <a href="#" className="inline-flex">
            <img
              src={logo}
              alt="Снэпбилд"
              className="h-[22px] w-[153px] object-contain"
            />
          </a>
          <a
            href="mailto:hey@snapbuild.ru"
            className="text-sm font-medium leading-relaxed text-[#5a5b62] transition-opacity hover:opacity-70"
          >
            hey@snapbuild.ru
          </a>
          <p className="max-w-[297px] text-sm font-medium leading-relaxed text-[#5a5b62]">
            Платформа для создания маркетинговых материалов на основе дизайн-системы
          </p>
        </div>

        {/* Колонки ссылок */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {LINK_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-base font-semibold leading-normal text-black">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base font-medium leading-normal text-[#5a5b62] transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium leading-relaxed text-black">
          © Сгенерировано в Снэпбилде. Все права защищены.
        </p>
        <a
          href="mailto:hey@snapbuild.ru"
          className="text-sm font-medium leading-relaxed text-black transition-opacity hover:opacity-70"
        >
          hey@snapbuild.ru
        </a>
      </div>
    </footer>
  )
}