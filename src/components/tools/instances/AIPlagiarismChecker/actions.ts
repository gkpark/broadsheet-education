'use server';

export interface AnalysisResult {
  aiScore: number; // 0–100
  plagiarismFlags: string[];
  summary: string;
  status: 'success' | 'error';
  errorMessage?: string;
}

export async function analyzeText(text: string): Promise<AnalysisResult> {
  if (!text || text.trim().length < 50) {
    return {
      aiScore: 0,
      plagiarismFlags: [],
      summary: '',
      status: 'error',
      errorMessage: 'Please enter at least 50 characters to analyze.',
    };
  }

  // STUB: Replace with real API call (e.g., OpenAI, Copyleaks, Winston AI)
  await new Promise((r) => setTimeout(r, 1400));

  return {
    aiScore: 42,
    plagiarismFlags: [
      'Paragraph 2: structural pattern matches common AI output',
      'Sentence 5: phrase appears in multiple online sources',
    ],
    summary:
      'This text shows moderate signals of AI generation. Two phrases were flagged for potential plagiarism. Review the highlighted sections before submitting.',
    status: 'success',
  };
}
