import { CardProductViewEmphasis } from '@/shared/components/cards/card-product-view'
import { CardsCustomerSatisfaction } from '@/shared/components/cards/cards-customer-satisfaction'
import { Layout } from '@/shared/components/layout'
import { SectionHeader } from '@/shared/components/section-header'

const HomePage = () => {
  return (
    <Layout>
    <section className='flex flex-col justify-center w-full text-start gap-[40px]'>
      <SectionHeader
        tag='Style Redefined.'
        title='Elevate Your Style with Klothink'
        description='Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.'
      />
      <CardsCustomerSatisfaction />
      <CardProductViewEmphasis />
    </section>
    </Layout> 
  )
}

export default HomePage
 