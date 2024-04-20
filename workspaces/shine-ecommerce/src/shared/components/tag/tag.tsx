import React from 'react';

interface TagProps extends React.HTMLProps<HTMLSpanElement> {
  title: string;
}

export const Tag: React.FC<TagProps> = ({ title, ...props }) => {
  return (
    <span {...props} className={`bg-white rounded-full px-[10px] py-[6px] text-gray-15 text-[12px] lg:text-[16px] font-medium leading-6 ${props.className}`}>
      {title}
    </span>
  );
};
