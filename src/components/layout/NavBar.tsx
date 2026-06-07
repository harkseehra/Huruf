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
      className={cn(
        'sticky top-0 z-50 w-full',
        'bg-[var(--bg-nav)] backdrop-blur-md',
        'border-b border-[var(--border-default)]',
        'transition-colors duration-[420ms] ease-smooth'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl italic text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors duration-150"
        >
          حروف
          <span className="ml-2 hidden font-body text-sm not-italic text-[var(--text-muted)] sm:inline">
            Ḥurūf
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {[
            { href: '/', label: 'Calculate', arLabel: 'حساب' },
            { href: '/learn', label: 'Learn', arLabel: 'تعلّم' },
          ].map(({ href, label, arLabel }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'relative px-4 py-2 text-sm font-body font-medium rounded-md',
                  'transition-colors duration-150',
                  active
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                )}
              >
                <span className="hidden sm:inline">{label}</span>
                <span className="font-arabic sm:hidden">{arLabel}</span>
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[var(--accent-primary)]"
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
