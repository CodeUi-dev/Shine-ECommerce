import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export const SectionHeader = ({
  tag,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <section>
      <span className="mb-[4px] text-[14px] font-semibold uppercase text-gray-60">
        {tag}
      </span>
      <h1 className="mb-[10px] text-[28px] font-semibold uppercase text-gray-10">
        {title}
      </h1>
      <p className="font-normal leading-6 text-gray-40">{description}</p>

      {/* btn-actions
           1- change icon 
           2 - 
      */}

      <section className="mt-[24px] flex flex-row gap-[10px]">
        <Button
          variant="secondary"
          className="flex flex-row-reverse gap-[2px] px-[40px] py-[14px] text-gray-15"
        >
          <span className="text-[14px] font-semibold leading-6">Shop Now</span>
          <ShoppingBag className="fill-black text-yellow-50 " />
        </Button>

        <Button
          variant="default"
          className="px-[40px] py-[14px] font-semibold text-gray-15"
        >
          Contact Us
        </Button>
      </section>
    </section>
  );
};
