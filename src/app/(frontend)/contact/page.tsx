import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { ContactDetailedForm } from '@/components/forms/ContactDetailedForm'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact · Soumission gratuite',
  description:
    'Contactez AR Construction pour une soumission gratuite et sans engagement. 2485 Alexis-le-Trotteur, Jonquière. Réponse sous 24 heures ouvrables.',
}

const mapsHref = 'https://maps.google.com/?q=2485+Alexis-le-Trotteur+Jonquiere+QC'

const infos = [
  {
    icon: MapPin,
    label: 'Adresse',
    lines: ['2485, Alexis-le-Trotteur', 'Jonquière (Québec) G7X 0E4'],
    href: mapsHref,
  },
  { icon: Phone, label: 'Téléphone', lines: [SITE.phone], href: SITE.phoneHref },
  { icon: Mail, label: 'Courriel', lines: [SITE.email], href: SITE.emailHref },
  {
    icon: Clock,
    label: 'Heures d’ouverture',
    lines: ['Lundi - Vendredi : 8 h - 17 h', 'Samedi : Sur rendez-vous'],
  },
]

const certs = ['RBQ 8271-8974-17', 'APCHQ — Certifié Or', 'ACQ — Certifié Platine', 'Novoclimat']

export default function ContactPage() {
  return (
    <>
      {/* Hero compact */}
      <section className="blueprint-surface pt-32 pb-16 bg-primary text-primary-foreground">
        <Container>
          <p className="mb-4 inline-flex items-center gap-3 text-sm font-semibold text-accent">
            <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
            Contact
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-[0.95] max-w-2xl">
            Demandez votre soumission gratuite
          </h1>
          <p className="text-primary-foreground/75 mt-4 text-base max-w-xl text-pretty">
            Notre équipe vous répond sous 24 heures ouvrables. Aucun engagement requis.
          </p>
        </Container>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-background">
        <Container className="grid lg:grid-cols-5 gap-14">
          {/* Infos contact */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Coordonnées</h2>
            <div className="space-y-6">
              {infos.map(({ icon: Icon, label, lines, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {lines[0]}
                      </a>
                    ) : (
                      lines.map((l) => (
                        <div key={l} className="text-muted-foreground text-sm">
                          {l}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-10 bg-secondary rounded-md p-6 border border-border/40">
              <p className="text-sm font-bold text-muted-foreground mb-3">Certifications</p>
              <div className="space-y-1.5">
                {certs.map((c) => (
                  <div key={c} className="text-sm text-foreground font-medium">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <ContactDetailedForm />
        </Container>
      </section>

      {/* Carte */}
      <section className="bg-secondary border-t border-border">
        <div className="h-64 md:h-80 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">2485, Alexis-le-Trotteur, Jonquière (Québec) G7X 0E4</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-semibold hover:underline mt-2 inline-block"
            >
              Ouvrir dans Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
