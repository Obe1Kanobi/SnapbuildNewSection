import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'dark' | 'outline' | 'light' | 'glass' | 'gradient'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  href?: string
  children: ReactNode
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-primary font-medium transition-colors duration-200 ease-out cursor-pointer select-none disabled:pointer-events-none disabled:opacity-60'

const variants: Record<ButtonVariant, string> = {
  // Основная фирменная (primary-500 → hover primary-600)
  primary: 'bg-brand-500 text-white hover:bg-brand-600 focus:bg-brand-500',
  // Тёмная (neutral-800 → hover neutral-900)
  dark: 'bg-neutral-800 text-neutral-200 hover:bg-neutral-900 hover:text-neutral-100',
  // Контурная (border neutral-300 1.5px → hover bg neutral-100)
  outline:
    'border-[1.5px] border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900',
  // Светлая фирменная (primary-100 → hover primary-200)
  light: 'bg-primary-100 text-brand-500 hover:bg-primary-200 hover:text-brand-600',
  // Стеклянная белая (для тёмного фона hero)
  glass: 'bg-white text-black hover:bg-[#f5f5f7] shadow-glass',
  // Градиентный текст (фирменная растяжка) на прозрачном
  gradient:
    'bg-transparent text-transparent bg-clip-text bg-[linear-gradient(90deg,#ff6d3c,#ff6ba7_46%,#bb6dff)]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-6 py-3.5 text-base',
}

/**
 * Универсальная кнопка дизайн-системы Снэпбилд.
 * При передаче `href` рендерит ссылку, иначе — кнопку.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}