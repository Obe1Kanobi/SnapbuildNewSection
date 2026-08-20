const METRICS = [
  { value: '5 минут', label: 'до готового сайта вместо 3–5 недель' },
  { value: '100%', label: 'точность соблюдения дизайн-системы' },
  { value: '5 форматов', label: 'сайты, изображения, видео, баннеры, презентации' },
  { value: '1 запрос', label: 'от идеи до полного набора материалов бренда' },
]

/**
 * Metrics-секция (метрики):
 * «5 минут вместо 3 недель», количество генераций и т.п.
 * Компактная секция после hero. Светлый фон, фирменные акценты.
 */
export default function MetricsBlock() {
  return (
    <section id="metrics" className="bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="mx-auto flex max-w-xs flex-col items-center gap-2"
            >
              <span className="order-first text-4xl font-bold tracking-tight text-black sm:text-5xl bg-[linear-gradient(93.09deg,#ff6d3d_1.5%,#ff6ca7_56.4%,#bb6dff_103.9%)] bg-clip-text text-transparent">
                {metric.value}
              </span>
              <dt className="text-base leading-relaxed text-[#5a5b62]">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
