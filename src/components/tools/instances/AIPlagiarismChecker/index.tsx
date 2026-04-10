'use client';

import { useState, useTransition } from 'react';
import Button from '@/components/ui/Button';
import Textarea from '@/components/ui/Textarea';
import { analyzeText, type AnalysisResult } from './actions';

export default function AIPlagiarismChecker() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleAnalyze() {
    startTransition(async () => {
      const r = await analyzeText(text);
      setResult(r);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <Textarea
        id="text-input"
        label="Text to Analyze"
        placeholder="Paste your text here (minimum 50 characters)..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
      />

      <div>
        <Button onClick={handleAnalyze} loading={isPending} size="md">
          {isPending ? 'Analyzing...' : 'Analyze Text'}
        </Button>
      </div>

      {result && (
        <div className="border border-paper-rule bg-white p-6 flex flex-col gap-5">
          {result.status === 'error' ? (
            <p className="font-sans text-sm text-red-600">{result.errorMessage}</p>
          ) : (
            <>
              {/* AI Score */}
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-2">
                  AI Generation Score
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-paper-rule overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-700"
                      style={{ width: `${result.aiScore}%` }}
                    />
                  </div>
                  <span className="font-sans text-sm font-semibold text-ink w-10 text-right">
                    {result.aiScore}%
                  </span>
                </div>
                <p className="font-sans text-xs text-ink-muted mt-1">
                  {result.aiScore < 30
                    ? 'Low: likely human-written'
                    : result.aiScore < 60
                    ? 'Moderate: some AI signals detected'
                    : 'High: strong AI generation signals'}
                </p>
              </div>

              {/* Plagiarism flags */}
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-2">
                  Plagiarism Flags ({result.plagiarismFlags.length})
                </p>
                {result.plagiarismFlags.length === 0 ? (
                  <p className="font-sans text-sm text-ink-light">No flags found.</p>
                ) : (
                  <ul className="flex flex-col gap-1.5">
                    {result.plagiarismFlags.map((flag, i) => (
                      <li key={i} className="flex items-start gap-2 font-sans text-sm text-ink-light">
                        <span className="text-amber-500 mt-0.5">⚠</span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Summary */}
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-2">
                  Summary
                </p>
                <p className="font-sans text-sm text-ink leading-relaxed">{result.summary}</p>
              </div>

              <p className="font-sans text-xs text-ink-muted border-t border-paper-rule pt-4">
                This is a placeholder result. Real analysis coming soon.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
