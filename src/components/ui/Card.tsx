import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardVariant = 'default' | 'elevated' | 'filled'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: CardVariant
}

const baseStyles = 'rounded-card'

const variants: Record<CardVariant, string> = {
  // Обычная: светлый фон #fdfdfd, тонкая рамка neutral-200
  default: 'bg-[#fdfdfd] border border-neutral-200',
  // Приподнятая: без рамки, с тенью (--card-elevated-shadow = shadow-md)
  elevated: 'bg-white shadow-md border-0',
  // Залитая: фон neutral-100, без рамки
  filled: 'bg-neutral-100 border-0',
}

/**
 * Карточка дизайн-системы Снэпбилд.
 * Токены: радиус --card-radius (radius-lg), фон #fdfdfd,
 * рамка 1px neutral-200, внутренние отступы 1.25rem (padding 5).
 */
export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(baseStyles, variants[variant], 'p-5', className)}
      {...props}
    >
      {children}
    </div>
  )
}