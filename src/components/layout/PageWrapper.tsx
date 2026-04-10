import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}

export default function PageWrapper({ children, narrow, className }: PageWrapperProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-3xl' : 'max-w-6xl',
        className
      )}
    >
      {children}
    </div>
  );
}
