const REVIEWS = [
  {
    quote:
      'Раньше на сайт уходило три недели и целая команда. Теперь страница в фирменном стиле готова за несколько минут — без разработчиков.',
    name: 'Анна Смирнова',
    role: 'Руководитель маркетинга',
    company: 'Крупный ритейл',
  },
  {
    quote:
      'Каждая генерация попадает в брендбук на 100%. Это сняло огромный пласт ручных проверок и ревью дизайнеров.',
    name: 'Дмитрий Ковалёв',
    role: 'Продукт-менеджер',
    company: 'Финтех-сервис',
  },
  {
    quote:
      'Сайты, баннеры и презентации в едином стиле. Команда создаёт материалы сама, не дожидаясь дизайна.',
    name: 'Елена Орлова',
    role: 'CMO',
    company: 'IT-компания',
  },
]

/**
 * Reviews-секция (отзывы):
 * сетка карточек-цитат с именем, должностью и компанией.
 * После секции безопасности. Светлый фон, белые карточки.
 */
export default function ReviewsBlock() {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <div className="mb-12 max-w-2xl">
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Отзывы любимых клиентов
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between rounded-3xl border border-black/5 bg-[#f2f2f4] p-8"
            >
              <blockquote>
                <p className="text-base leading-relaxed text-black">
                  «{review.quote}»
                </p>
              </blockquote>
              <figcaption className="mt-8 flex flex-col gap-1 border-t border-black/5 pt-6">
                <span className="font-semibold text-black">{review.name}</span>
                <span className="text-sm text-[#5a5b62]">
                  {review.role} · {review.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
