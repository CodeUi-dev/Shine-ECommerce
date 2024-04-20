import { CardsBase } from '../cards-base';
import { CustomerOptions } from './cards-customer-options';

interface BaseCardsComponentProps {
  title: string;
  differentialone: string; //arrumar dps p/ outro nome melhor
  differentialtwo: string;
}

const BaseCardsComponent = ({
  title,
  differentialone,
  differentialtwo,
}: BaseCardsComponentProps) => {
  return (
    <div className="flex flex-col gap-[4px] rounded-[1rem]">
      <div>
        <div className="rounded-[1rem] h-[9rem] border border-white-95 bg-white p-[20px]">
          <h1 className="text-[20px] font-semibold uppercase text-gray-10">
            {title}
          </h1>
          <ul className="text-[14px] leading-6 text-gray-40">
            <li>{differentialone}</li>
            <li>{differentialtwo}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CardsCustomerSatisfaction = () => {
  return (
    <CardsBase>
      <div className=" rounded-[1rem] bg-white p-1">
        <div className="grid grid-cols-2 gap-2 rounded-[1rem] bg-white-97 p-[10px]">
          {CustomerOptions.map((item) => (
            <div key={item.title}>
              <BaseCardsComponent
                title={item.title}
                differentialone={item.differentialone}
                differentialtwo={item.differentialtwo}
              />
            </div>
          ))}
        </div>
      </div>
    </CardsBase>
  );
};
