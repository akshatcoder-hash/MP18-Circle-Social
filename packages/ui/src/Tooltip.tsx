import type { FC, ReactNode } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: ReactNode;
  className?: string;
  content: ReactNode;
  placement?: 'bottom' | 'left' | 'right' | 'top';
  withDelay?: boolean;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  className = '',
  content,
  placement = 'right',
  withDelay = false
}) => {
  return (
    <RadixTooltip.Provider delayDuration={withDelay ? 400 : 0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <span>{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="hidden !rounded-lg !text-xs !leading-6 tracking-wide sm:block bg-gray-700 text-white px-3 py-0.5 z-10"
            side={placement}
            sideOffset={5}
          >
            <span className={className}>{content}</span>
            <RadixTooltip.Arrow className="fill-gray-700" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};