import Link from 'next/link';
import { ToolDefinition } from '@/lib/types';
import PageWrapper from '@/components/layout/PageWrapper';
import Divider from '@/components/ui/Divider';
import Badge from '@/components/ui/Badge';
import HowToUse from './HowToUse';

interface ToolPageLayoutProps {
  tool: ToolDefinition;
  children: React.ReactNode;
}

export default function ToolPageLayout({ tool, children }: ToolPageLayoutProps) {
  return (
    <div className="py-10 md:py-14">
      <PageWrapper narrow>
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-1.5 font-sans text-xs text-ink-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#tools" className="hover:text-ink transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-ink">{tool.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 space-y-1">
            <div className="h-px bg-ink" />
            <div className="h-0.5 bg-ink" />
          </div>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h1 className="font-serif text-3xl md:text-4xl font-black text-ink leading-tight">
              {tool.title}
            </h1>
            <Badge status={tool.status} />
          </div>
          <p className="font-sans text-base text-ink-light leading-relaxed">
            {tool.description}
          </p>
          <div className="mt-4 space-y-1">
            <div className="h-0.5 bg-ink" />
            <div className="h-px bg-ink" />
          </div>
        </div>

        {/* Tool UI */}
        <div className="mb-10">
          {children}
        </div>

        <Divider className="mb-10" />

        {/* How to use */}
        <HowToUse steps={tool.howToUse} />
      </PageWrapper>
    </div>
  );
}
