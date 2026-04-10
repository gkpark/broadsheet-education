import { cn } from '@/lib/utils';

export default function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-t border-paper-rule', className)} />;
}
