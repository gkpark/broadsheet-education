import { ToolDefinition } from './types';

export const TOOLS: ToolDefinition[] = [
  {
    slug: 'ai-plagiarism-checker',
    title: 'AI & Plagiarism Checker',
    tagline: 'Detect AI-generated content and plagiarism signals in any text.',
    description:
      'Paste any piece of writing to analyze it for signs of AI generation and potential plagiarism. Designed to help students understand the difference between original thought and machine-assisted text.',
    icon: 'ScanText',
    status: 'beta',
    category: 'writing',
    howToUse: [
      {
        step: 1,
        heading: 'Paste your text',
        body: 'Copy and paste any text sample into the input field below.',
      },
      {
        step: 2,
        heading: 'Run the analysis',
        body: 'Click "Analyze" and wait a few seconds for the results to load.',
      },
      {
        step: 3,
        heading: 'Review the report',
        body: 'Read the highlighted breakdown and confidence scores to understand the findings.',
      },
    ],
    metadata: {
      og_title: 'AI & Plagiarism Checker — Broadsheet Education',
      og_description: 'Check any text for AI-generation signals and plagiarism.',
    },
  },
  {
    slug: 'overton-window-search',
    title: 'Overton Window Search',
    tagline: 'Explore where any policy idea sits on the political spectrum.',
    description:
      'Search any political topic or policy idea and see how it maps across the Overton Window — from fringe to mainstream. Understand the range of perspectives before forming your own view.',
    icon: 'BarChart2',
    status: 'beta',
    category: 'civics',
    howToUse: [
      {
        step: 1,
        heading: 'Enter a topic',
        body: 'Type a policy topic or question into the search bar.',
      },
      {
        step: 2,
        heading: 'Explore the spectrum',
        body: 'Browse results mapped across the political spectrum, from radical to popular to unthinkable.',
      },
      {
        step: 3,
        heading: 'Click through',
        body: 'Follow sources to read the actual arguments from each perspective and form your own view.',
      },
    ],
    metadata: {
      og_title: 'Overton Window Search — Broadsheet Education',
      og_description: 'Discover where any policy idea sits across the political spectrum.',
    },
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getAllToolSlugs() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}
