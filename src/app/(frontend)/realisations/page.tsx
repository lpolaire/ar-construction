import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/sections/PageHero'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { CtaBand } from '@/components/sections/CtaBand'
import { SourceImageGrid } from '@/components/shared/SourceImageGrid'
import { realisationSubpages, sourceImages } from '@/lib/source-content'
import proj2308 from '@/assets/proj-2308.jpg'

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description:
    'Portfolio AR Construction : 700+ maisons construites et 1 000+ projets de rénovation au Saguenay-Lac-Saint-Jean. Plain-pied, deux étages, jumelés, rénovation et commercial.',
}

const galleryStats = [
  { num: '700+', label: 'Maisons construites' },
  { num: '1 000+', label: 'Projets de rénovation' },
  { num: '22+', label: 'Modèles disponibles' },
]

export default function RealisationsPage() {
  const sourceGallery = sourceImages('realisations')

  return (
    <>
      <PageHero
        image={proj2308}
        alt="Réalisations AR Construction"
        heightClass="h-[60vh] min-h-[420px]"
        eyebrow="Portfolio"
        title="Nos réalisations"
        subtitle="700+ maisons construites · 1 000+ projets de rénovation au Saguenay-Lac-Saint-Jean."
      />

      <Section>
        <div className="mb-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {realisationSubpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg bg-card p-5 shadow-sm ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:ring-primary/30"
            >
              <div className="text-xs font-semibold text-accent">{page.eyebrow}</div>
              <h2 className="mt-3 font-heading text-lg font-bold text-foreground">
                {page.menuLabel}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Ouvrir <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>

        <ProjectsGrid />

        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border/60 bg-border/70 text-left sm:grid-cols-3">
          {galleryStats.map((s) => (
            <div key={s.label} className="bg-secondary/90 p-8">
              <div className="font-heading text-4xl font-bold text-primary">{s.num}</div>
              <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="mb-12">
          <h2 className="font-heading text-4xl font-bold leading-[0.95] text-foreground">
            Images récupérées du site initial
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Galerie issue des visuels publics de l’ancien site AR Construction.
          </p>
        </div>
        <SourceImageGrid images={sourceGallery} limit={24} />
      </Section>

      <CtaBand
        tone="primary"
        title="Votre future maison nous attend"
        text="Parcourez nos modèles, personnalisez-les en 3D et démarrez votre projet dès aujourd’hui."
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground px-10"
        >
          <Link href="/contact">
            DEMANDER UNE SOUMISSION <ArrowRight className="ml-1.5" size={16} />
          </Link>
        </Button>
      </CtaBand>
    </>
  )
}
