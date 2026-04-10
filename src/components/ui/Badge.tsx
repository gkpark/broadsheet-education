import { cn } from '@/lib/utils';
import { ToolStatus } from '@/lib/types';

const labels: Record<ToolStatus, string> = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
};

export default function Badge({ status }: { status: ToolStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 text-xs font-medium uppercase tracking-wide font-sans',
        {
          'bg-accent-light text-accent': status === 'live' || status === 'beta',
          'bg-paper-rule text-ink-muted': status === 'coming-soon',
        }
      )}
    >
      {labels[status]}
    </span>
  );
}
