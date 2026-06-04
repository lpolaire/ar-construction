import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { BeforeAfterShowcase } from '@/components/sections/BeforeAfterShowcase'
import { CtaBand } from '@/components/sections/CtaBand'
import { PageHero } from '@/components/sections/PageHero'
import { SourceImageGrid } from '@/components/shared/SourceImageGrid'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Button } from '@/components/ui/button'
import { sourceImages, type DetailPageContent } from '@/lib/source-content'

type DetailContentPageProps = {
  page: DetailPageContent
  galleryLimit?: number
}

export function DetailContentPage({ page, galleryLimit }: DetailContentPageProps) {
  const gallery = page.gallerySlug ? sourceImages(page.gallerySlug) : []

  return (
    <>
      <PageHero
        image={page.heroImage}
        alt={page.title}
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
      />

      <Section containerClassName="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Informations" title={page.description} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-md bg-card p-4 shadow-sm ring-1 ring-border/50"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {page.sections.map((section) => (
            <article key={section.title} className="border-l-2 border-accent pl-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {page.beforeAfterSlug && <BeforeAfterShowcase slug={page.beforeAfterSlug} />}

      {!!gallery.length && (
        <Section className={page.beforeAfterSlug ? undefined : 'bg-secondary'}>
          <SectionHeading
            eyebrow="Images du site initial"
            title="Galerie du projet"
            className="mb-12"
          />
          <SourceImageGrid images={gallery} limit={galleryLimit} />
        </Section>
      )}

      <CtaBand
        tone="primary"
        title="Parler de votre projet"
        text="L’équipe AR Construction peut confirmer les détails, disponibilités et prochaines étapes."
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
        >
          <Link href="/contact">
            Demander une soumission <ArrowRight className="ml-1.5" size={16} />
          </Link>
        </Button>
      </CtaBand>
    </>
  )
}
