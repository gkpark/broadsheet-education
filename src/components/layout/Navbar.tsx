'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { TOOLS } from '@/lib/tools-registry';
import PageWrapper from './PageWrapper';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-paper-rule bg-paper/90 backdrop-blur-sm">
      <PageWrapper>
        <nav className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 group">
            <span className="font-serif text-lg font-bold text-ink tracking-tight group-hover:text-accent transition-colors">
              Broadsheet
            </span>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-ink-muted">
              Education
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className={cn(
                  'font-sans text-sm transition-colors',
                  pathname === `/tools/${tool.slug}`
                    ? 'text-accent font-medium'
                    : 'text-ink-light hover:text-ink'
                )}
              >
                {tool.title}
              </Link>
            ))}
            <Link
              href="/about"
              className={cn(
                'font-sans text-sm transition-colors',
                pathname === '/about' ? 'text-accent font-medium' : 'text-ink-light hover:text-ink'
              )}
            >
              About
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ink-light hover:text-ink transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={cn('block h-px bg-current transition-all', mobileOpen && 'rotate-45 translate-y-2')} />
              <span className={cn('block h-px bg-current transition-all', mobileOpen && 'opacity-0')} />
              <span className={cn('block h-px bg-current transition-all', mobileOpen && '-rotate-45 -translate-y-2')} />
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-paper-rule py-4 flex flex-col gap-3">
            {TOOLS.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="font-sans text-sm text-ink-light hover:text-ink transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {tool.title}
              </Link>
            ))}
            <Link
              href="/about"
              className="font-sans text-sm text-ink-light hover:text-ink transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </PageWrapper>
    </header>
  );
}
