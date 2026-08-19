import onePlatform from '../../assets/one-platform.webp'
import processFlexible from '../../assets/process-flexible.webp'
import processDefault from '../../assets/process-default.webp'
import { LogoBlock } from './LogoBlock'

const PRODUCT_CARDS = [
  {
    eyebrow: 'Дизайн-система',
    title: 'Дизайн-система — ядро платформы',
    description:
      'Ваши компоненты, цвета и шрифты — единственный источник стиля. Каждая генерация строится строго по правилам вашего бренда.',
    image: onePlatform,
  },
  {
    eyebrow: 'Гибкая конфигурация',
    title: 'Гибкая конфигурация',
    description:
      'Правила бренда задаются один раз — работают в каждой генерации. Настройте один раз и используйте во всех форматах.',
    image: processFlexible,
  },
  {
    eyebrow: 'Соответствие по умолчанию',
    title: 'Соответствие по умолчанию',
    description:
      'AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам.',
    image: processDefault,
  },
]

/**
 * Секция "Продукт": лента логотипов партнёров + три продуктовые карточки.
 * Фон секции #f2f2f4, карточки белые с радиусом 24px.
 */
export function ProductBlock() {
  return (
    <section id="product" className="bg-[#f2f2f4] py-6">
        <LogoBlock />
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
            {/* Заголовок секции */}
            <div className="mb-12 flex flex-col items-left text-center">
              <h2 className="max-w-3xl text-left text-4xl font-semibold leading-tight tracking-tight text-black">
                Одна платформа — <span className="whitespace-nowrap">весь маркетинг</span>
              </h2>
              <p className="mt-4 max-w-2xl text-left leading-relaxed text-[#5a5b62]">
                Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле
              </p>
            </div>

            {/* Продуктовые карточки */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white"
                >
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="block aspect-[16/10] w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-8">
                    <span className="text-sm font-medium text-brand-500">
                      {card.eyebrow}
                    </span>
                    <h3 className="text-2xl font-medium leading-snug tracking-tight text-black">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#5a5b62]">
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
      </div>
    </section>
  )
}