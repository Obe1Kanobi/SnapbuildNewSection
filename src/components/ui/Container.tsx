import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Максимальная ширина контейнера (по умолчанию 1440px — брейкпоинт xl сайта) */
  maxWidth?: string
  /** Горизонтальные отступы */
  px?: string
}

/**
 * Контейнер-обёртка: центрирует контент, задаёт максимальную ширину
 * и горизонтальные отступы в стиле дизайн-системы Снэпбилд.
 * Ширина контента = брейкпоинт xl (1440px), отступы 60px (desktop) / 40px (mobile).
 */
export function Container({
  children,
  className,
  maxWidth = 'max-w-[1440px]',
  px = 'px-10 md:px-5',
  ...props
}: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full', maxWidth, px, className)} {...props}>
      {children}
    </div>
  )
}