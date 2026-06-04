import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { YouTubeGrid } from '@/components/sections/YouTubeGrid'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { heroFrom, testimonialVideos } from '@/lib/source-content'

export const metadata: Metadata = {
  title: 'Témoignages',
  description:
    'Témoignages vidéo de clients AR Construction: maison neuve, rénovation et autoconstruction.',
}

const quotes = [
  {
    label: 'Maison neuve',
    text: "Des clients racontent leur expérience d'accompagnement pour l'acquisition d'une maison neuve à Saguenay.",
  },
  {
    label: 'Rénovation',
    text: 'Les témoignages rénovation montrent le suivi, la qualité des travaux et la prise en charge du chantier.',
  },
  {
    label: 'Autoconstruction',
    text: "Le forfait autoconstructeur est présenté avec un retour d'expérience client sur l'accompagnement AR Construction.",
  },
]

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        image={heroFrom('realisations')}
        alt="Témoignages AR Construction"
        eyebrow="Clients"
        title="Témoignages"
        subtitle="Vidéos officielles issues de la chaîne YouTube AR Construction."
      />

      <Section>
        <SectionHeading
          eyebrow="Vidéos"
          title="Maison neuve, rénovation et autoconstruction"
          description="Le site initial pointait vers la chaîne YouTube officielle d’AR Construction. Les témoignages clients exploitables y ont été intégrés en lecteurs vidéo."
          className="mb-12"
        />
        <YouTubeGrid videos={testimonialVideos} />
      </Section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto grid gap-5 md:grid-cols-3">
          {quotes.map((quote) => (
            <article key={quote.label} className="rounded-lg bg-card p-7 shadow-sm">
              <Quote className="mb-5 text-primary" size={26} />
              <h2 className="font-heading text-xl font-bold text-foreground">{quote.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{quote.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        tone="primary"
        title="Vous voulez vivre la même expérience?"
        text="Parlez-nous de votre projet de construction, de rénovation ou d’autoconstruction."
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
        >
          <Link href="/contact">
            Nous contacter <ArrowRight className="ml-1.5" size={16} />
          </Link>
        </Button>
      </CtaBand>
    </>
  )
}
