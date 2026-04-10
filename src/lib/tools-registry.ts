import { ToolDefinition } from './types';

export const TOOLS: ToolDefinition[] = [
  {
    slug: 'ai-plagiarism-checker',
    url: 'https://student-work-analyzer.vercel.app',
    title: 'AI & Plagiarism Checker',
    tagline: 'Analyze student writing for AI generation and originality.',
    description:
      'Paste any piece of student writing to check for signs of AI-generated content. The tool runs a self-contained analysis out of the box, no account needed. For deeper insights, students and teachers can enable advanced mode using their own API key.',
    icon: 'ScanText',
    status: 'beta',
    category: 'writing',
    howToUse: [
      {
        step: 1,
        heading: 'Paste the text',
        body: 'Copy and paste any student writing into the input field.',
      },
      {
        step: 2,
        heading: 'Run the analysis',
        body: 'The tool analyzes the text instantly. For a deeper report, enable advanced mode with your own API key.',
      },
      {
        step: 3,
        heading: 'Review the findings',
        body: 'See a breakdown of AI generation signals and originality flags to inform your next steps.',
      },
    ],
    metadata: {
      og_title: 'AI & Plagiarism Checker | Broadsheet Education',
      og_description: 'Analyze student writing for AI generation signals and originality.',
    },
  },
  {
    slug: 'overton-window-search',
    url: 'https://overton-window-hazel.vercel.app/',
    title: 'Overton Window Search',
    tagline: 'Spectrum-aware source discovery for students and educators.',
    description:
      'Find sources across the full political spectrum on any topic: current events, historical research, or scholarly articles. Built on the principle that perspective shapes information. This tool names that limitation rather than hiding it, helping students encounter a range of viewpoints before forming their own.',
    icon: 'BarChart2',
    status: 'beta',
    category: 'civics',
    howToUse: [
      {
        step: 1,
        heading: 'Search a topic',
        body: 'Enter any topic: a current event, policy question, or historical issue.',
      },
      {
        step: 2,
        heading: 'Browse across the spectrum',
        body: 'Results surface sources from across the political spectrum, not just the mainstream center.',
      },
      {
        step: 3,
        heading: 'Read before you conclude',
        body: 'Explore multiple perspectives and primary sources before drawing your own conclusions.',
      },
    ],
    metadata: {
      og_title: 'Overton Window Search | Broadsheet Education',
      og_description: 'Spectrum-aware source discovery for students and educators.',
    },
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getAllToolSlugs() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}
