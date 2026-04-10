'use client';

import { useState, useTransition } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { searchOverton, type OvertonResult } from './actions';
import { cn } from '@/lib/utils';

const POSITION_LABELS: Record<number, string> = {
  [-3]: 'Far Left',
  [-2]: 'Radical Left',
  [-1]: 'Mainstream Left',
  [0]: 'Mainstream',
  [1]: 'Mainstream Right',
  [2]: 'Radical Right',
  [3]: 'Far Right',
};

const POSITION_COLORS: Record<number, string> = {
  [-3]: 'bg-blue-600',
  [-2]: 'bg-blue-400',
  [-1]: 'bg-blue-200',
  [0]: 'bg-paper-rule',
  [1]: 'bg-red-200',
  [2]: 'bg-red-400',
  [3]: 'bg-red-600',
};

export default function OvertonWindowSearch() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<OvertonResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const r = await searchOverton(query);
      setResult(r);
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <Input
          id="overton-search"
          label="Topic or Policy Idea"
          placeholder='e.g., "universal basic income" or "school vouchers"'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <Button type="submit" loading={isPending} size="md">
            {isPending ? 'Searching...' : 'Search Spectrum'}
          </Button>
        </div>
      </form>

      {result && (
        <div className="border border-paper-rule bg-white p-6 flex flex-col gap-6">
          {result.status === 'error' ? (
            <p className="font-sans text-sm text-red-600">{result.errorMessage}</p>
          ) : (
            <>
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-1">
                  Results for
                </p>
                <p className="font-serif text-lg font-bold text-ink">&ldquo;{result.topic}&rdquo;</p>
              </div>

              {/* Spectrum bar */}
              <div>
                <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-3">
                  Overton Window Spectrum
                </p>
                <div className="flex h-3 overflow-hidden border border-paper-rule">
                  {[-3, -2, -1, 0, 1, 2, 3].map((pos) => {
                    const hasResult = result.positions.some((p) => p.windowPosition === pos);
                    return (
                      <div
                        key={pos}
                        title={POSITION_LABELS[pos]}
                        className={cn(
                          'flex-1 transition-opacity',
                          POSITION_COLORS[pos],
                          hasResult ? 'opacity-100' : 'opacity-20'
                        )}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-sans text-xs text-ink-muted">Far Left</span>
                  <span className="font-sans text-xs text-ink-muted">Far Right</span>
                </div>
              </div>

              {/* Position cards */}
              <div className="flex flex-col gap-4">
                {result.positions.map((pos) => (
                  <div key={pos.label} className="border-l-2 border-paper-rule pl-4">
                    <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink-muted mb-1">
                      {pos.label}
                    </p>
                    <p className="font-sans text-sm text-ink leading-relaxed">{pos.summary}</p>
                  </div>
                ))}
              </div>

              <p className="font-sans text-xs text-ink-muted border-t border-paper-rule pt-4">
                This is a placeholder result. Real spectrum analysis coming soon.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
