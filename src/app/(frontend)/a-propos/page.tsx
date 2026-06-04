import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Award, Users, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBand } from '@/components/sections/CtaBand'
import { companySubpages } from '@/lib/source-content'
import constructionSite from '@/assets/ar-maison1.jpg'
import heroHouse from '@/assets/ar-real6.jpg'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'AR Construction, entrepreneur général au Saguenay-Lac-Saint-Jean depuis 2001. Notre histoire, nos valeurs et notre équipe de plus de 50 professionnels.',
}

const values = [
  {
    title: 'Qualité supérieure',
    desc: 'Chaque projet est réalisé avec des matériaux de premier choix et une main-d’œuvre spécialisée.',
  },
  {
    title: 'Prix garanti',
    desc: 'Le prix soumissionné, c’est le prix payé. Aucun surplus, aucune mauvaise surprise — c’est notre engagement.',
  },
  {
    title: 'Expertise locale',
    desc: 'Enracinés au Saguenay-Lac-Saint-Jean depuis plus de 25 ans, nous connaissons chaque détail du territoire.',
  },
  {
    title: 'Service complet',
    desc: 'Des plans 3D à la visite virtuelle, en passant par le suivi de chantier et l’après-vente.',
  },
]

const milestones = [
  { year: '2001', event: 'Fondation d’AR Construction à Jonquière' },
  { year: '2005', event: 'Obtention de la certification APCHQ Or' },
  { year: '2010', event: 'Dépassement des 200 maisons construites' },
  { year: '2015', event: 'Certification ACQ Platine obtenue' },
  { year: '2018', event: 'Lancement du programme Novoclimat' },
  { year: '2024', event: 'Plus de 700 maisons et 1 000 projets de rénovation' },
]

const aboutStats = [
  { icon: Calendar, num: '25+', label: 'Années d’expertise' },
  { icon: Users, num: '50+', label: 'Professionnels qualifiés' },
  { icon: Award, num: '700', label: 'Maisons construites' },
  { icon: Award, num: '4', label: 'Certifications majeures' },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        image={constructionSite}
        alt="Équipe AR Construction"
        eyebrow="À propos"
        title={
          <>
            Notre histoire,
            <br />
            notre passion
          </>
        }
      />

      {/* Intro */}
      <Section containerClassName="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Qui sommes-nous"
            title="Leader en construction au Saguenay depuis 2001"
          />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-5">
            AR Construction est un entrepreneur général reconnu au Saguenay-Lac-Saint-Jean. Depuis
            sa fondation en 2001, l’entreprise a comme mission première de construire des maisons
            neuves de qualité supérieure tout en offrant un service irréprochable.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Avec une équipe chevronnée de plus de 50 professionnels et un service de plans
            architecturaux en 3D, nos clients peuvent effectuer une visite virtuelle de leur future
            demeure avant même le début des travaux. Nous couvrons tous les secteurs de la région :
            Jonquière, Chicoutimi, La Baie et les municipalités environnantes.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              NOUS CONTACTER <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
        <Image
          src={heroHouse}
          alt="Maison construite par AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      {/* Valeurs */}
      <Section className="bg-secondary">
        <SectionHeading
          align="center"
          eyebrow="Nos valeurs"
          title="Ce qui nous définit"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-lg p-7 shadow-[var(--shadow-card)] border border-border/40"
            >
              <CheckCircle2 className="text-primary mb-4" size={26} />
              <h3 className="font-heading font-bold text-foreground text-base mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeading eyebrow="Entreprise" title="Documents et informations" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {companySubpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg bg-card p-6 shadow-sm ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:ring-primary/30"
            >
              <div className="text-xs font-semibold text-accent">{page.eyebrow}</div>
              <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                {page.menuLabel}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Consulter <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <Container className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutStats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="text-accent mx-auto mb-3" size={28} />
              <div className="font-heading text-5xl font-bold text-accent">{s.num}</div>
              <div className="mt-2 text-xs text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Timeline */}
      <Section containerClassName="max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Notre parcours"
          title="Jalons clés"
          className="mb-14"
        />
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex gap-6 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card rounded-md p-5 shadow-sm border border-border/40">
                    <div className="font-heading font-bold text-accent text-lg">{m.year}</div>
                    <div className="text-foreground text-sm mt-1">{m.event}</div>
                  </div>
                </div>
                <div className="hidden md:flex w-4 h-4 rounded-md bg-primary border-4 border-background shrink-0 mt-5 relative z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        tone="secondary"
        title={<>Prêt à démarrer votre projet&nbsp;?</>}
        text="Obtenez une soumission gratuite et sans engagement dès aujourd’hui."
      >
        <Button asChild size="lg" className="px-10">
          <Link href="/contact">
            DEMANDER UNE SOUMISSION <ArrowRight className="ml-1.5" size={16} />
          </Link>
        </Button>
      </CtaBand>
    </>
  )
}
