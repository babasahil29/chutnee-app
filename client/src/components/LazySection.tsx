import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
}

export default function LazySection({
  children,
  className = '',
  animationClass = 'animate-fade-in',
}: LazySectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref as any}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{
        transition: 'opacity 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
}

