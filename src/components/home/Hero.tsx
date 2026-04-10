import Link from 'next/link';
import PageWrapper from '@/components/layout/PageWrapper';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="border-b border-paper-rule py-16 md:py-24">
      <PageWrapper>
        {/* Masthead rules */}
        <div className="mb-6 space-y-1">
          <div className="h-px bg-ink" />
          <div className="h-0.5 bg-ink" />
        </div>

        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-ink-muted mb-5">
          Broadsheet Education
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-ink leading-tight max-w-3xl mb-6">
          Built for the Classroom. Useful Beyond It.
        </h1>

        <p className="font-sans text-lg text-ink-light leading-relaxed max-w-xl mb-8">
          A growing suite of tools for K&#8211;12 students and educators, built by a teacher to
          support critical thinking, honest writing, and informed research.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="#tools">
            <Button size="lg">Explore Tools &darr;</Button>
          </Link>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 space-y-1">
          <div className="h-0.5 bg-ink" />
          <div className="h-px bg-ink" />
        </div>
      </PageWrapper>
    </section>
  );
}
