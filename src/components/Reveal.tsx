import { type ReactNode, type ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: ElementType;
};

export default function Reveal({
  children,
  className = '',
  delay,
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
