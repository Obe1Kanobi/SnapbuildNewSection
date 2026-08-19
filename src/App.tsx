import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Здесь будут остальные секции сайта Снэпбилд
            (логотипы, продуктовые карточки, вкладки, сравнение,
            безопасность, роадмап, FAQ, CTA) + 5 новых секций */}
      </main>
      <Footer />
    </>
  )
}

export default App
