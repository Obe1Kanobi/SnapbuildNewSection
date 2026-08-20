import { useState } from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

type Billing = 'monthly' | 'yearly'

const TIERS = [
  {
    name: 'Старт',
    monthly: 15000,
    description: 'Для небольших команд и первых кампаний',
    features: [
      'Сайты в вашей дизайн-системе',
      'Изображения и баннеры',
      'Базовые шаблоны',
      'Поддержка по email',
    ],
    featured: false,
  },
  {
    name: 'Бизнес',
    monthly: 40000,
    description: 'Для растущих маркетинговых команд',
    features: [
      'Все форматы: сайты, изображения, видео, баннеры, презентации',
      'Видео и ресайзы изображений',
      'Командные пространства',
      'Приоритетная поддержка',
      'Кастомные компоненты',
    ],
    featured: true,
  },
  {
    name: 'Корпорация',
    monthly: 100000,
    description: 'Для крупных компаний с жёсткими требованиями ИБ',
    features: [
      'Всё из тарифа «Бизнес»',
      'Развёртывание в вашем контуре',
      'Собственный AI-стек',
      'Соответствие 152-ФЗ',
      'Выделенный менеджер',
    ],
    featured: false,
  },
]

function formatPrice(monthly: number, billing: Billing): string {
  if (billing === 'yearly') {
    return String(Math.round((monthly * 12 * 0.8) / 12))
  }
  return String(monthly)
}

/**
 * PricingPlans-секция (Тарифы):
 * три карточки + переключатель месяц/год (год — со скидкой 20%).
 * Светлый фон, выделенная карточка «Бизнес» с градиентной рамкой.
 */
export default function PricingPlansBlock() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Выберите подходящий план
          </h2>

          {/* Переключатель месяц/год */}
          <div className="mt-8 inline-flex items-center rounded-full bg-[#f2f2f4] p-1">
            <Button
              type="button"
              onClick={() => setBilling('monthly')}
              variant="light"
              size="sm"
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                billing === 'monthly'
                  ? 'bg-white text-black shadow-glass'
                  : 'bg-transparent text-[#5a5b62] hover:text-black',
              )}
            >
              Помесячно
            </Button>
            <Button
              type="button"
              onClick={() => setBilling('yearly')}
              variant="light"
              size="sm"
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                billing === 'yearly'
                  ? 'bg-white text-black shadow-glass'
                  : 'bg-transparent text-[#5a5b62] hover:text-black',
              )}
            >
              На год −20%
            </Button>
          </div>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-3xl p-8',
                tier.featured
                  ? 'border border-transparent bg-[linear-gradient(135deg,#ff6d3d,#ff6ba7_52%,#bb6dff)] p-[2px]'
                  : 'border border-black/5 bg-[#f2f2f4]',
              )}
            >
              <div
                className={cn(
                  'flex h-full flex-col rounded-[calc(1.5rem-2px)] bg-white p-8',
                  !tier.featured && 'bg-transparent p-0',
                )}
              >
                <h3 className="text-base font-semibold text-black">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a5b62]">
                  {tier.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight text-black">
                    {formatPrice(tier.monthly, billing)}
                  </span>
                  <span className="text-base text-[#5a5b62]">₽/мес</span>
                </div>

                <ul className="mt-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-brand-500">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                          <path
                            d="M3 7l3 3 5-6"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  type="button"
                  variant={tier.featured ? 'primary' : 'outline'}
                  size="md"
                  className="mt-8 w-full"
                >
                  Начать сейчас
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
