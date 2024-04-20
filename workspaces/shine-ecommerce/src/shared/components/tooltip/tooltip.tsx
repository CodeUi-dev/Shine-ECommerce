import { ReactNode } from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TooltipComponentType {
    tooltip: ReactNode;
    tooltipContent: string
}

export const TooltipComponent = ({ tooltip, tooltipContent }: TooltipComponentType) => {
    return (
        <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className='button'>{tooltip}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltipContent}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
}