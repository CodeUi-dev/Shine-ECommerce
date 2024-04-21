import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
  buttonType?: 'shop' | 'all-products' | 'all-testimonials';
  viewContact?: boolean;
}

export const SectionHeader = ({
  tag,
  title,
  description,
  buttonType,
  viewContact,
}: SectionHeaderProps) => {
  const buttonConfigs = {
    shop: { text: 'Shop Now', href: '#shop' },
    'all-products': { text: 'View All Products', href: '#all-products' },
    'all-testimonials': {
      text: 'View All Testimonials',
      href: '#all-testimonials',
    },
  };

  const buttonData = buttonType ? buttonConfigs[buttonType] : null;

  return (
    <section>
      <span className="mb-[4px] text-[14px] font-semibold uppercase text-gray-60">
        {tag}
      </span>
      <h1 className="mb-[10px] text-[28px] font-semibold uppercase text-gray-10">
        {title}
      </h1>
      <p className="font-normal leading-6 text-gray-40">{description}</p>

      <section className="mt-[24px] flex w-full flex-row items-center justify-start gap-[6px]">
        {buttonData && (
          <Button
            variant="secondary"
            className="flex flex-row-reverse gap-[2px]  text-gray-15"
          >
            <Link href={buttonData.href} passHref>
              <span className="text-[14px] font-semibold leading-6">
                {buttonData.text}
              </span>
            </Link>
            {buttonType === 'shop' && <ShoppingBag className="fill-black text-yellow-50" />}
          </Button>
        )}

        {viewContact && (
          <Button
            variant="default"
            className="px-[40px] py-[14px] font-semibold text-gray-15"
          >
            Contact Us
          </Button>
        )}
      </section>
    </section>
  );
};
