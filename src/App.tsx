import { HeaderBlock } from './components/sections/HeaderBlock'
import { HeroBlock } from './components/sections/HeroBlock'
import { ProductBlock } from './components/sections/ProductBlock'
import { FeaturesBlock } from './components/sections/FeaturesBlock'
import { SecurityBlock } from './components/sections/SecurityBlock'
import { FAQBlock } from './components/sections/FAQBlock'
import { FooterBlock } from './components/sections/FooterBlock'
import PricingPlansBlock from './components/sections/PricingPlansBlock'
import FeedbackFormBlock from './components/sections/FeedbackFormBlock'
import ReviewsBlock from './components/sections/ReviewsBlock'
import MetricsBlock from './components/sections/MetricsBlock'
import UseCasesBlock from './components/sections/UseCasesBlock'

function App() {
  return (
    <>
      <HeaderBlock />
      <main>
        <HeroBlock />
        <MetricsBlock />
        <ProductBlock />
        <FeaturesBlock />
        <UseCasesBlock  />
        <SecurityBlock />
        <ReviewsBlock />
        <FeedbackFormBlock />
        <PricingPlansBlock />
        <FAQBlock />
        
        {/* Здесь будут следующие секции:
            таблица сравнения, роадмап, CTA + 5 новых секций */}
      </main>
      <FooterBlock />
    </>
  )
}

export default App
