'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const transparent = pathname === '/' && !scrolled
  const closeMenus = () => {
    setOpen(false)
    setOpenMenu(null)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
        transparent
          ? 'border-white/10 bg-foreground/70 backdrop-blur-md'
          : 'border-white/10 bg-foreground/95 shadow-[0_18px_42px_-30px_hsl(var(--foreground))]',
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-3 lg:py-4">
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center"
          aria-label="AR Construction - accueil"
        >
          <BrandLogo className="drop-shadow-md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) =>
            link.sub ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={cn(
                    'flex items-center gap-1 text-sm font-semibold transition-colors drop-shadow',
                    pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? 'text-accent'
                      : 'text-primary-foreground/90 hover:text-accent',
                  )}
                  aria-expanded={openMenu === link.href}
                >
                  {link.label}
                  <ChevronDown size={14} className="opacity-70" />
                </button>
                <div
                  className={cn(
                    'absolute top-full left-0 pt-2 transition-all duration-200',
                    openMenu === link.href
                      ? 'opacity-100 pointer-events-auto translate-y-0'
                      : 'opacity-0 pointer-events-none -translate-y-1',
                  )}
                >
                  <div className="rounded-md border border-white/10 bg-foreground/95 py-2 shadow-[var(--shadow-soft)] min-w-[240px]">
                    {link.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={closeMenus}
                        className="block px-5 py-3 text-sm text-primary-foreground/80 hover:text-accent hover:bg-white/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className={cn(
                  'text-sm font-semibold transition-colors drop-shadow',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-primary-foreground/90 hover:text-accent',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-11 border border-primary-foreground/20 bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-none hover:bg-accent/90"
          >
            <Link href="/contact" onClick={closeMenus}>
              DEMANDER UNE SOUMISSION
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-1"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-foreground border-t border-white/10">
          <div className="container mx-auto py-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.sub ? (
                <div key={link.href}>
                  <div className="text-sm font-bold text-accent/80 py-2 px-1">{link.label}</div>
                  {link.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMenus}
                      className="block text-sm font-medium text-primary-foreground/80 py-2.5 pl-4 hover:text-accent"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="text-sm font-semibold text-primary-foreground/90 py-3 hover:text-accent border-b border-white/5 last:border-0"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button
              asChild
              className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact" onClick={closeMenus}>
                DEMANDER UNE SOUMISSION
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
