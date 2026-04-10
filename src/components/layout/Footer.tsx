import Link from 'next/link';
import { TOOLS } from '@/lib/tools-registry';
import PageWrapper from './PageWrapper';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-auto">
      <PageWrapper>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="font-serif text-lg font-bold tracking-tight">Broadsheet</span>
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-paper/50">
                Education
              </span>
            </div>
            <p className="font-sans text-sm text-paper/60 max-w-xs leading-relaxed">
              A growing suite of tools for K&#8211;12 students and educators, built by a teacher
              to support critical thinking and honest research.
            </p>
          </div>

          {/* Tool links */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-paper/40 mb-3">
              Tools
            </p>
            <ul className="flex flex-col gap-2">
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="font-sans text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {tool.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-paper/10 py-4">
          <p className="font-sans text-xs text-paper/30">
            &copy; {new Date().getFullYear()} Broadsheet Education. All Rights Reserved. Unauthorized use or reproduction is prohibited.
          </p>
        </div>
      </PageWrapper>
    </footer>
  );
}
