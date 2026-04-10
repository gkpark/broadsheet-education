import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllToolSlugs, getToolBySlug } from '@/lib/tools-registry';
import ToolPageLayout from '@/components/tools/ToolPageLayout';
import AIPlagiarismChecker from '@/components/tools/instances/AIPlagiarismChecker';
import OvertonWindowSearch from '@/components/tools/instances/OvertonWindowSearch';

// Wires slug → tool UI component. Add one line here when adding a new tool.
const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  'ai-plagiarism-checker': AIPlagiarismChecker,
  'overton-window-search': OvertonWindowSearch,
};

export async function generateStaticParams() {
  return getAllToolSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: tool.metadata.og_title ?? tool.title,
    description: tool.metadata.og_description ?? tool.tagline,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const ToolUI = TOOL_COMPONENTS[slug];

  return (
    <ToolPageLayout tool={tool}>
      {ToolUI ? (
        <ToolUI />
      ) : (
        <div className="border border-paper-rule bg-paper p-8 text-center">
          <p className="font-sans text-sm text-ink-muted">This tool is coming soon.</p>
        </div>
      )}
    </ToolPageLayout>
  );
}
