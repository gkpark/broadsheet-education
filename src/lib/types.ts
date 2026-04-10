export type ToolStatus = 'live' | 'beta' | 'coming-soon';

export type ToolCategory = 'writing' | 'research' | 'media-literacy' | 'civics';

export interface HowToUseStep {
  step: number;
  heading: string;
  body: string;
}

export interface ToolDefinition {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  status: ToolStatus;
  category: ToolCategory;
  howToUse: HowToUseStep[];
  metadata: {
    og_title?: string;
    og_description?: string;
  };
}
