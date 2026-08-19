import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Align = 'left' | 'center'

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Маленький надзаголовок (label/overline), цвет brand-500 */
  eyebrow?: ReactNode
  /** Основной заголовок секции */
  heading: ReactNode
  /** Подзаголовок-описание */
  description?: ReactNode
  align?: Align
}

/**
 * Заголовок секции по токенам дизайн-системы Снэпбилд:
 * - eyebrow: --text-label (font-size .875rem, weight 500, цвет primary-500)
 * - title:   --text-display-l (font-size 3.5rem, weight 700, neutral-800)
 * - description: --text-lead (font-size 1.125rem, neutral-500)
 */
export function SectionTitle({
  eyebrow,
  heading,
  description,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium text-brand-500">{eyebrow}</span>
      ) : null}
      <h2 className="font-primary text-4xl font-bold leading-tight tracking-tight text-neutral-800 md:text-5xl">
        {heading}
      </h2>
      {description ? (
        <p className="max-w-2xl text-lg leading-relaxed text-neutral-500">
          {description}
        </p>
      ) : null}
    </div>
  )
}