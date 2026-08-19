import securityModels from '../../assets/security-models.webp'
import securityCloud from '../../assets/security-cloud.webp'
import securityStack from '../../assets/security-stack.webp'

const SECURITY_POINTS = [
  {
    title: 'Только одобренные модели',
    description:
      'Работаем только с российскими и локализованными моделями, без экспортных ограничений',
    image: securityModels,
  },
  {
    title: 'Ваш контур, ваша юрисдикция',
    description:
      'Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями',
    image: securityCloud,
  },
  {
    title: 'Собственный AI-стек',
    description:
      'Вы сами определяете модели, хранилища, доступы и цепочки валидации',
    image: securityStack,
  },
]

/**
 * Секция "Безопасность без компромиссов" (.dds-why-safe):
 * крупный заголовок с градиентным акцентом + три пункта с иконками.
 */
export function Security() {
  return (
    <section id="security" className="bg-[#f2f2f4] py-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
        {/* Заголовок-герой */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
            Безопасность{' '}
            <span className="bg-[linear-gradient(93.09deg,#ff6d3d_1.5%,#ff6ca7_56.4%,#bb6dff_103.9%)] bg-clip-text text-transparent">
              без компромиссов
            </span>
          </h2>
          <p className="max-w-2xl text-center text-base font-medium leading-relaxed text-black">
            Ваши данные и вычисления остаются в защищённом контуре — на всех этапах
          </p>
        </div>

        {/* Пункты безопасности */}
        <div className="grid gap-8 md:grid-cols-3">
          {SECURITY_POINTS.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-5 text-center"
            >
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#f5f5f7] p-4">
                <img
                  src={point.image}
                  alt={point.title}
                  className="relative z-10 h-6 w-6 object-contain"
                />
                <span
                  aria-hidden
                  className="absolute inset-1 rounded-[15px] bg-[radial-gradient(circle_at_50%_100%,rgba(255,109,61,0.35),rgba(255,108,167,0.2)_45%,rgba(187,109,255,0.08)_72%,transparent_100%)]"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-base font-semibold leading-relaxed tracking-tight text-black">
                  {point.title}
                </h3>
                <p className="max-w-xs text-base font-medium leading-relaxed text-black">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}