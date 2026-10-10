'use client';

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export default function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: RevealProps<T>) {
  const [visible, setVisible] = useState(false);
  const Component = (as ?? 'div') as ElementType;
  const ref = useIntersectionObserver(
    () => setVisible(true),
    {
      threshold: 0.12,
      rootMargin: '0px 0px -5% 0px',
    }
  );

  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

