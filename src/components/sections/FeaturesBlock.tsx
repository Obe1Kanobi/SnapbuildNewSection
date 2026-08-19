import { useState } from 'react'
import { cn } from '../../lib/cn'
import useCasesSites from '../../assets/use-cases-sites.webp'
import useCasesImages from '../../assets/use-cases-images.webp'
import useCasesVideo from '../../assets/use-cases-video.webp'
import useCasesBanners from '../../assets/use-cases-banners.webp'
import useCasesPresentations from '../../assets/use-cases-presentations.jpg'

interface Tab {
  id: string
  label: string
  image: string
  features: Array<{ title: string; description: string }>
}

const TABS: Tab[] = [
  {
    id: 'sites',
    label: 'Сайты',
    image: useCasesSites,
    features: [
      {
        title: 'Результат за один запрос',
        description: 'Отправляйте документ или ссылку — платформа собирает структуру',
      },
      {
        title: 'Страница за минуту',
        description: 'В вашей дизайн-системе, с вашими шрифтами, сеткой и компонентами',
      },
      {
        title: 'AI или визуальный редактор',
        description: 'Меняйте контент через чат или редактируйте вручную',
      },
      {
        title: 'Адаптация под ЦА за один клик',
        description: 'Версия сайта под новый сегмент без работы дизайнеров и копирайтеров',
      },
    ],
  },
  {
    id: 'images',
    label: 'Изображения',
    image: useCasesImages,
    features: [
      {
        title: 'В стиле и цвете бренда',
        description: 'Изображения по композиционным правилам вашей дизайн-системы',
      },
      {
        title: 'Попадание с первой генерации',
        description: 'Без часов промптинга и поиска на стоках',
      },
      {
        title: 'Редактирование объектов',
        description: 'Меняйте композицию и удаляйте элементы прямо на изображении',
      },
      {
        title: 'Любой стиль и формат',
        description: 'Портреты, иллюстрации, обложки — в нужном соотношении, до 4K',
      },
    ],
  },
  {
    id: 'video',
    label: 'Видео',
    image: useCasesVideo,
    features: [
      {
        title: 'Изображения как ключевые кадры',
        description: 'Используйте графику из модуля изображений напрямую',
      },
      {
        title: 'Контроль качества и формата',
        description: 'Длительность, соотношение, качество — под площадку',
      },
      {
        title: 'Сохранение стиля и композиции',
        description: 'AI удерживает визуальную целостность ролика',
      },
      {
        title: 'Один сценарий — десятки адаптаций',
        description: 'Версии под популярные форматы соцсетей и рекламные площадки',
      },
    ],
  },
  {
    id: 'banners',
    label: 'Баннеры',
    image: useCasesBanners,
    features: [
      {
        title: 'Креативы из одной идеи',
        description: 'Готовые баннеры в фирменном стиле для любой кампании',
      },
      {
        title: 'Все размеры автоматически',
        description: 'Выбирайте готовые размеры или задавайте собственные',
      },
      {
        title: 'Текст и графика под контролем',
        description: 'Редактируйте оффер, композицию и визуальные акценты',
      },
      {
        title: 'Экспорт под площадку',
        description: 'Форматы и вес файлов соответствуют требованиям размещения',
      },
    ],
  },
  {
    id: 'presentations',
    label: 'Презентации',
    image: useCasesPresentations,
    features: [
      {
        title: 'Презентация из запроса',
        description: 'Платформа собирает структуру и черновик слайдов',
      },
      {
        title: 'В вашей дизайн-системе',
        description: 'Шрифты, сетки и компоненты применяются автоматически',
      },
      {
        title: 'Редактирование через AI',
        description: 'Меняйте отдельный слайд или всю историю через чат',
      },
      {
        title: 'Экспорт в нужном формате',
        description: 'Собирайте презентации для встречи, рассылки или публикации',
      },
    ],
  },
]

/**
 * Секция "Возможности" (интерактивные вкладки, .dds-tabs):
 * пилюли-табы (активная — чёрная) + панель с изображением слева
 * и карточками функций справа. Фон секции #f2f2f4.
 */
export function FeaturesBlock() {
  const [activeId, setActiveId] = useState<string>(TABS[0].id)
  const activeTab = TABS.find((t) => t.id === activeId) ?? TABS[0]

  return (
    <section id="features" className="bg-[#f2f2f4] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        {/* Заголовок + табы */}
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Любой контент в фирменном стиле за считанные минуты
          </h2>

          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  'inline-flex items-center justify-center rounded-full px-4 py-2 text-base font-medium transition-colors',
                  activeId === tab.id
                    ? 'bg-black text-white'
                    : 'bg-[#f5f5f7] text-black hover:bg-neutral-200',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Панель с активной вкладкой */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,432px)_1fr]">
          {/* Изображение */}
          <div className="overflow-hidden rounded-2xl">
            <img
              key={activeTab.id}
              src={activeTab.image}
              alt={activeTab.label}
              className="block aspect-[896/756] w-full object-cover"
            />
          </div>

          {/* Карточки функций */}
          <div className="grid gap-3 sm:grid-cols-2">
            {activeTab.features.map((feature, index) => (
              <article
                key={feature.title}
                className="relative flex flex-col justify-center gap-2 overflow-hidden rounded-2xl border border-transparent bg-white p-6 pr-16"
              >
                <span className="absolute right-0 top-0 flex h-[47px] min-w-[52px] items-center justify-center rounded-bl-2xl border-l border-b border-black/10 px-2 text-sm font-medium text-[#5a5b62]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-medium leading-snug tracking-tight text-black">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a5b62]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}