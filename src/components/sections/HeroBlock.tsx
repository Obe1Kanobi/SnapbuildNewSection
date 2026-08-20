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
      className="relative flex flex-col items-center overflow-hidden bg-[linear-gradient(135deg,white_0%,#ffcdb3_40%,#ff6ba7_80%,#bb6dff_100%)] px-4 pt-32 md:px-10 md:pt-36 lg:pt-40"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center">
        {/* Интро-блок */}
        <div className="flex max-w-[984px] flex-col items-center gap-4">
          {/* Заголовок */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl md:text-6xl text-center">
            Платформа, где все создается в рамках вашего бренда и дизайн-системы
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
              variant="primary"
              size="lg"
              className="rounded-2xl"
            >
              Начать сейчас
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