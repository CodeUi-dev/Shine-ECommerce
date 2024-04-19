import { CardsCustomerSatisfaction } from '@/shared/components/cards/cards-customer-satisfaction';
import { CarouselPlugin } from '@/shared/components/carousel/carousel';
import { SectionHeader } from '@/shared/components/section-header';

const HomePage = () => {
  return (
    <section>
      <div className="flex justify-center gap-[3.75rem] text-start w-full flex-col sm:flex-col md:flex-row">
        <section className="flex flex-col gap-[40px]">
          <SectionHeader
            tag="Style Redefined."
            title="Elevate Your Style with Klothink"
            description="Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions."
          />
          <CardsCustomerSatisfaction />
        </section>
        <section>
          <CarouselPlugin />
        </section>
      </div>
    </section>
  );
};

export default HomePage;
