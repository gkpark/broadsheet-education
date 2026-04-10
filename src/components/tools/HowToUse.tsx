import { HowToUseStep } from '@/lib/types';

export default function HowToUse({ steps }: { steps: HowToUseStep[] }) {
  return (
    <div>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-6">
        How to Use This Tool
      </p>
      <ol className="flex flex-col gap-6">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-5">
            <span className="font-serif text-3xl font-black text-paper-rule leading-none select-none shrink-0 w-8">
              {s.step}
            </span>
            <div>
              <p className="font-sans text-sm font-semibold text-ink mb-1">{s.heading}</p>
              <p className="font-sans text-sm text-ink-light leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
