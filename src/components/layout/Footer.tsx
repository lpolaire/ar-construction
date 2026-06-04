import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { FacebookIcon, YoutubeIcon } from '@/components/shared/BrandIcons'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { SITE, FOOTER_SERVICES, FOOTER_COMPANY } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="blueprint-surface bg-foreground text-background">
      <div className="container mx-auto py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block mb-5" aria-label="AR Construction — accueil">
            <BrandLogo />
          </Link>
          <p className="text-sm text-background/70 leading-relaxed mb-5">
            Entrepreneur général reconnu au Saguenay-Lac-Saint-Jean depuis {SITE.foundedYear}.
            Qualité supérieure, prix garanti.
          </p>
          <div className="flex gap-2">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white/10 hover:bg-accent p-2.5 rounded-md transition-colors"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-white/10 hover:bg-accent p-2.5 rounded-md transition-colors"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold mb-5 text-accent">Services</h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm text-background/70 hover:text-accent transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold mb-5 text-accent">Entreprise</h4>
          <ul className="space-y-3">
            {FOOTER_COMPANY.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="text-sm text-background/70 hover:text-accent transition-colors"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold mb-5 text-accent">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-accent" />
              <span className="text-sm text-background/70">{SITE.address}</span>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-accent transition-colors"
              >
                <Phone size={15} className="shrink-0 text-accent" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-accent transition-colors"
              >
                <Mail size={15} className="shrink-0 text-accent" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 text-xs text-background/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </span>
          <span>RBQ {SITE.rbq} · APCHQ Or · ACQ Platine · Novoclimat</span>
        </div>
      </div>
    </footer>
  )
}
