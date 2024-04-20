import { MoveRight } from 'lucide-react';

import { Tag } from '../../tag';
import { TooltipComponent } from '../../tooltip/tooltip';
import { Button } from '../../ui/button';

interface ItemDetailsProps {
  size: string[];
  color: string[];
  view: string[];
  linkView: string;
}

interface FooterProductViewProps {
  productViewDetails: ItemDetailsProps;
}

export const FooterProductView = ({
  productViewDetails,
}: FooterProductViewProps) => {
  return (
    <>
      <div className="relative h-full w-full bg-red-500">
        <Tag
          title={productViewDetails.view[0]}
          className="absolute bottom-48 left-4"
        />
        <Tag
          title={productViewDetails.view[1]}
          className="absolute bottom-36 right-10"
        />
        <Tag
          title={productViewDetails.view[2]}
          className="absolute bottom-56 left-[50%] sm:bottom-80"
        />
      </div>

      <footer className="flex max-w-[330px] items-center justify-between gap-4  pl-4 md:max-w-[405px]">
        <div className="flex  w-full flex-col gap-[10px]">
          <section className="flex flex-row items-center justify-center gap-[0.37rem] rounded-full bg-white py-1">
            <h3 className="ml-4 rounded-full bg-white text-[14px] font-medium sm:text-[18px]">
              Sizes
            </h3>
            <div className="mr-2 flex w-full max-w-[250px] items-center justify-between gap-[4px] rounded-full bg-white  p-[0.37rem] md:max-w-none">
              {productViewDetails.size.map((size, index) => (
                <span
                  key={index}
                  className="flex h-6 w-16 items-center justify-center rounded-full border bg-white-97"
                >
                  {size}
                </span>
              ))}
            </div>
          </section>

          <div className="flex w-full flex-row justify-between gap-2">
            <section className="flex items-center justify-start gap-[0.37rem] rounded-full bg-white px-[.5rem] py-[0.2rem]">
              <h3 className="ml-2 rounded-full bg-white text-[14px] font-medium sm:text-[18px]">
                Color
              </h3>
              <div className="flex gap-2 rounded-full border bg-white p-[5px]">
                {productViewDetails.color.map((color, index) => (
                  <TooltipComponent
                    key={index}
                    tooltip={
                      <span
                        style={{ backgroundColor: `#${color}` }}
                        key={index}
                        className={`inline-block h-4 w-4 rounded-full bg-${color} hover:brightness-90 sm:h-5 sm:w-5`}
                      ></span>
                    }
                    tooltipContent={`#${color}`}
                  />
                ))}
              </div>
            </section>

            <Button className="w-full text-[14px] font-medium sm:text-[18px]">
              <a
                href={productViewDetails.linkView}
                className="flex flex-row items-center justify-center gap-2"
              >
                View Similar <MoveRight size={14} />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};
