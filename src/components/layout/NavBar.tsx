'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NumeralToggle } from '@/components/ui/NumeralToggle';
import { navVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function NavBar() {
  const pathname = usePathname();

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-nav)] backdrop-blur-md transition-colors duration-[420ms]"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2.5 group">
          <span className="font-display text-2xl text-[var(--text-primary)] leading-none transition-opacity duration-150 group-hover:opacity-70">
            حروف
          </span>
          <span className="font-body text-sm font-medium text-[var(--text-muted)] transition-opacity duration-150 group-hover:opacity-70">
            Ḥurūf
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-0.5" aria-label="Main navigation">
          {[
            { href: '/', en: 'Calculate', fa: 'حساب‌گر' },
            { href: '/learn', en: 'Learn', fa: 'آموزش' },
          ].map(({ href, en, fa }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'relative px-3 py-2 text-sm font-body font-medium rounded-md transition-colors duration-150',
                  active
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                )}
              >
                <span className="hidden sm:flex items-center gap-1.5">
                  {en}
                  <span className="font-persian text-xs text-[var(--text-muted)]" lang="fa">{fa}</span>
                </span>
                <span className="font-persian sm:hidden" lang="fa">{fa}</span>
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-px h-px rounded-full bg-[var(--text-primary)]"
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <NumeralToggle />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
