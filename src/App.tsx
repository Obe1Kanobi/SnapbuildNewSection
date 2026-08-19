import { Header } from './components/sections/Header'
import { Hero } from './components/sections/Hero'
import { Product } from './components/sections/Product'
import { Features } from './components/sections/Features'
import { Security } from './components/sections/Security'
import { FAQ } from './components/sections/FAQ'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Product />
        <Features />
        <Security />
        <FAQ />
        {/* Здесь будут следующие секции:
            таблица сравнения, роадмап, CTA + 5 новых секций */}
      </main>
      <Footer />
    </>
  )
}

export default App
