import { CardsCustomerSatisfaction } from '@/shared/components/cards/cards-customer-satisfaction';
import { CarouselViewProduct } from '@/shared/components/carousel/carousel';
import { SectionHeader } from '@/shared/components/section-header';
import { SectionProductView } from '@/shared/components/section-product-view/section-product-view';

const HomePage = () => {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex w-full flex-col justify-center gap-[40px] text-start sm:flex-col md:mt-[60px] md:flex-col lg:flex-row">
        <section className="flex flex-col gap-[40px]">
          <SectionHeader
            buttonType="shop"
            viewContact={true}
            tag="Style Redefined."
            title="Elevate Your Style with Klothink"
            description="Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions."
          />
          <CardsCustomerSatisfaction />
        </section>
        <CarouselViewProduct />
      </div>
      <SectionHeader
        buttonType="all-products"
        tag="Products"
        title="Discover Fashion."
        description="Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion."
      />
      <SectionProductView />
    </section>
  );
};

export default HomePage;
