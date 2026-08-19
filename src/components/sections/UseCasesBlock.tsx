const USE_CASES = [
  {
    category: 'Маркетинг',
    title: 'Кампания под площадку за один день',
    description:
      'Баннеры и креативы в фирменном стиле разворачиваются под все плейсменты автоматически — без ручной пересборки.',
    result: '+40%',
    resultLabel: 'скорость запуска кампаний',
  },
  {
    category: 'Продажи',
    title: 'Питч-деки и презентации в бренде',
    description:
      'Презентация собирается из запроса за минуты: структура, черновик слайдов и фирменная типографика применяются автоматически.',
    result: '2x',
    resultLabel: 'быстрее подготовка к переговорам',
  },
  {
    category: 'Дизайн',
    title: 'Единая дизайн-система для всей команды',
    description:
      'Компоненты, цвета и шрифты — единственный источник стиля. Каждый участник создаёт материалы строго по правилам бренда.',
    result: '100%',
    resultLabel: 'соответствие брендбуку',
  },
]

/**
 * UseCases-секция (Кейсы использования):
 * сценарии для маркетинга, продаж и дизайна с цифрами результата.
 * После вкладок «Возможности». Светлый фон #f2f2f4, белые карточки.
 */
export default function UseCasesBlock() {
  return (
    <section id="use-cases" className="bg-[#f2f2f4] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-medium text-brand-500">Кейсы</span>
          <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Кейсы использования
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#5a5b62]">
            Сценарии для маркетинга, продаж и дизайна — с измеримым результатом.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-3xl bg-white p-8"
            >
              <div>
                <span className="inline-flex rounded-full bg-[#f5f5f7] px-3 py-1 text-sm font-medium text-black">
                  {item.category}
                </span>
                <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5a5b62]">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 border-t border-black/5 pt-6">
                <div className="bg-[linear-gradient(90deg,#ff6d3c,#ff6ba7_46%,#bb6dff)] bg-clip-text text-3xl font-bold text-transparent">
                  {item.result}
                </div>
                <p className="mt-1 text-sm text-[#5a5b62]">{item.resultLabel}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
