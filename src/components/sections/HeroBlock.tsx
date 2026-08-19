import heroShot from '../../assets/hero-snapbuild.webp'
import { Button } from '../ui/Button'

/**
 * Hero-секция (.dds-app-preview):
 * pill-бейдж, крупный заголовок (76px), подзаголовок,
 * CTA-кнопки и большое превью-изображение с радиусом 24px сверху.
 */
export function HeroBlock() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-hidden px-4 pt-32 md:px-10 md:pt-36 lg:pt-40"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center">
        {/* Интро-блок */}
        <div className="flex max-w-[984px] flex-col items-center gap-4">
          {/* Пилл-бейдж */}
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-glass">
            <span className="text-sm font-medium leading-relaxed text-black">
              Платформа, где все создается в рамках вашего бренда и дизайн-системы
            </span>
          </span>

          {/* Заголовок */}
          <h1 className="text-center text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-black md:text-[56px] md:leading-[1.1] lg:text-[76px] lg:leading-[1.13]">
            Профессиональные материалы{' '}
            <span className="whitespace-nowrap">в фирменном стиле</span>{' '}
            <span className="bg-[linear-gradient(93.09deg,#ff6d3d_1.5%,#ff6ca7_56.4%,#bb6dff_103.9%)] bg-clip-text text-transparent">
              за минуты
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="max-w-[760px] text-center text-base font-medium leading-6 text-black/60 md:text-lg md:leading-6">
            Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды
            мог создавать профессиональные материалы в фирменном стиле за минуты,
            а не дни.
          </p>

          {/* CTA */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="https://builder.snapbuild.ru/"
              variant="glass"
              size="lg"
              className="rounded-2xl"
            >
              Начать сейчас
            </Button>
            <Button
              href="https://builder.snapbuild.ru/"
              variant="gradient"
              size="lg"
              className="rounded-2xl"
            >
              Смотреть демо
            </Button>
          </div>
        </div>

        {/* Превью */}
        <div className="mt-8 w-full md:mt-12">
          <img
            src={heroShot}
            alt="Интерфейс Снэпбилд"
            className="block aspect-[2632/1386] w-full rounded-t-[24px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}