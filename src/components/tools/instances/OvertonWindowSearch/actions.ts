'use server';

export interface OvertonPosition {
  label: string;
  summary: string;
  sources: { title: string; url: string }[];
  windowPosition: number; // -3 (fringe left) to +3 (fringe right), 0 = mainstream
}

export interface OvertonResult {
  topic: string;
  positions: OvertonPosition[];
  status: 'success' | 'error';
  errorMessage?: string;
}

export async function searchOverton(query: string): Promise<OvertonResult> {
  if (!query || query.trim().length < 3) {
    return {
      topic: query,
      positions: [],
      status: 'error',
      errorMessage: 'Please enter a topic to search.',
    };
  }

  // STUB: Replace with real search/LLM integration
  await new Promise((r) => setTimeout(r, 1600));

  return {
    topic: query,
    positions: [
      {
        label: 'Mainstream Left',
        summary: 'Broadly accepted by center-left mainstream media and policymakers.',
        sources: [],
        windowPosition: -1,
      },
      {
        label: 'Mainstream',
        summary: 'The dominant, widely accepted view held by most major institutions.',
        sources: [],
        windowPosition: 0,
      },
      {
        label: 'Mainstream Right',
        summary: 'Broadly accepted by center-right mainstream media and policymakers.',
        sources: [],
        windowPosition: 1,
      },
    ],
    status: 'success',
  };
}
