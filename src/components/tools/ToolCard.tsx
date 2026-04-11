import Link from 'next/link';
import { ToolDefinition } from '@/lib/types';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

export default function ToolCard({ tool }: { tool: ToolDefinition }) {
  const isAvailable = tool.status !== 'coming-soon';
  const href = isAvailable ? (tool.url ?? `/tools/${tool.slug}`) : '#';
  const isExternal = isAvailable && !!tool.url;

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'group flex flex-col p-6 border border-paper-rule bg-white transition-all duration-150',
        isAvailable
          ? 'hover:border-accent hover:shadow-sm cursor-pointer'
          : 'opacity-60 cursor-default pointer-events-none'
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center border border-paper-rule text-ink-light group-hover:border-accent group-hover:text-accent transition-colors">
          <ToolIcon name={tool.icon} />
        </div>
        <Badge status={tool.status} />
      </div>

      <h3 className="font-serif text-lg font-bold text-ink mb-2 leading-snug">
        {tool.title}
      </h3>
      <p className="font-sans text-sm text-ink-light leading-relaxed flex-1">
        {tool.tagline}
      </p>

      {isAvailable && (
        <div className="mt-5 flex items-center gap-1 font-sans text-xs font-medium text-accent uppercase tracking-wide">
          Open Tool
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      )}
    </Link>
  );
}

function ToolIcon({ name }: { name: string }) {
  switch (name) {
    case 'ScanText':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
          <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
          <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
          <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
          <line x1="7" y1="12" x2="17" y2="12"/>
          <line x1="7" y1="8" x2="13" y2="8"/>
          <line x1="7" y1="16" x2="11" y2="16"/>
        </svg>
      );
    case 'BarChart2':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      );
    case 'Landmark':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="22" x2="21" y2="22"/>
          <line x1="6" y1="18" x2="6" y2="11"/>
          <line x1="10" y1="18" x2="10" y2="11"/>
          <line x1="14" y1="18" x2="14" y2="11"/>
          <line x1="18" y1="18" x2="18" y2="11"/>
          <polygon points="12 2 20 7 4 7"/>
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
}
