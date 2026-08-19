/**
 * Мини-утилита для склейки классов (без внешних зависимостей).
 * Аналог clsx для простых случаев: принимает строки и falsy-значения.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}