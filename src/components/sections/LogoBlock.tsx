import ozonLogo from '../../assets/logo-ozon.svg'
import tele2 from '../../assets/logo-t2.svg'
import avitoLogo from '../../assets/logo-avito.svg'
import cianLogo from '../../assets/logo-cian.svg'
import lentaLogo from '../../assets/logo-lenta.svg'

const PARTNERS = [
  { name: 'Озон', src: ozonLogo },
  { name: 'Т2', src: tele2 },
  { name: 'Avito', src: avitoLogo },
  { name: 'Циан', src: cianLogo },
  { name: 'Лента', src: lentaLogo },
]


export function LogoBlock() {
  return (
    <section id="logoBlock" className="bg-[#f2f2f4] py-3">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-10">
            {/* Логотипы партнёров */}
            <div className="mb-3 flex flex-col items-center gap-6">
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
                {PARTNERS.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="h-9 w-auto opacity-70 grayscale transition-opacity hover:opacity-100"
                  />
                ))}
              </div>
              <p className="text-center text-base leading-relaxed text-[#5a5b62]">
                С платформой работают команды, для которых бренд — закон
              </p>
            </div>
        </div>
    </section>
  )
}