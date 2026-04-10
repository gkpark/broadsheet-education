import { TOOLS } from '@/lib/tools-registry';
import PageWrapper from '@/components/layout/PageWrapper';
import ToolCard from '@/components/tools/ToolCard';

export default function ToolGrid() {
  return (
    <section id="tools" className="py-16">
      <PageWrapper>
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-8">
          Our Tools
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </PageWrapper>
    </section>
  );
}
