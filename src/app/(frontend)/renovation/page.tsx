import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, Hammer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBand } from '@/components/sections/CtaBand'
import { SourceImageGrid } from '@/components/shared/SourceImageGrid'
import { renovationSubpages, sourceImages } from '@/lib/source-content'
import renovation from '@/assets/ar-real5.jpg'
import constructionSite from '@/assets/ar-real8.jpg'
import gallery1 from '@/assets/ar-real4.jpg'
import commercial from '@/assets/ar-maison2.jpg'

export const metadata: Metadata = {
  title: 'Rénovation résidentielle et commerciale',
  description:
    'Certifié Or APCHQ. Rénovation résidentielle et commerciale au Saguenay : cuisine, salle de bain, agrandissement, revêtement, toiture. Plus de 1 000 projets réalisés.',
}

const services = [
  {
    title: 'Rénovation résidentielle',
    desc: 'Cuisine, salle de bain, sous-sol, agrandissement — nos équipes réalisent tous types de rénovations pour votre demeure.',
    items: [
      'Cuisine et salle de bain',
      'Sous-sols et caves',
      'Agrandissements',
      'Revêtements de sol',
      'Peinture et finition',
    ],
  },
  {
    title: 'Rénovation commerciale',
    desc: 'Bureaux, commerces, entrepôts — AR Construction réalise vos projets commerciaux avec rigueur et professionnalisme.',
    items: [
      'Aménagement commercial',
      'Bureaux et espaces de travail',
      'Rénovation d’entrepôts',
      'Revêtements extérieurs',
      'Toitures commerciales',
    ],
  },
  {
    title: 'Revêtement et toiture',
    desc: 'Parement, bardage, toiture — nous protégeons et embellissons l’enveloppe extérieure de votre bâtiment.',
    items: [
      'Parement vinyle ou bois',
      'Bardeaux et toiture plate',
      'Soffites et fascias',
      'Isolation thermique',
      'Fenêtres et portes',
    ],
  },
]

const commercialPoints = [
  'Immeubles à revenus et multilogements',
  'Aménagement de locaux commerciaux',
  'Mise aux normes et rénovation énergétique',
  'Suivi de chantier dédié',
  'Respect strict des échéanciers',
]

export default function RenovationPage() {
  const renovationGallery = sourceImages('renovation-quelques-realisations')

  return (
    <>
      <PageHero
        image={renovation}
        alt="Rénovation AR Construction"
        heightClass="h-[65vh] min-h-[480px]"
        eyebrow="Rénovation"
        title={
          <>
            Rénovation
            <br />
            résidentielle
            <br />
            &amp; commerciale
          </>
        }
      />

      {/* Intro */}
      <Section containerClassName="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading eyebrow="Certifié Or APCHQ" title="L’expertise rénovation au Saguenay" />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-5">
            AR Construction est certifié Or par l’APCHQ pour ses travaux de rénovation résidentielle
            et commerciale. Notre équipe de spécialistes prend en charge votre projet du début à la
            fin, avec un suivi rigoureux et un service après-vente complet.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Que ce soit pour une petite rénovation de salle de bain ou un agrandissement majeur,
            nous abordons chaque projet avec le même souci du détail et le même engagement envers la
            qualité.
          </p>
          <ul className="space-y-3 mb-9">
            {[
              'Certification Or APCHQ en rénovation',
              'Plus de 1 000 projets de rénovation réalisés',
              'Devis détaillé avant le début des travaux',
              'Équipe certifiée et assurée',
              'Garantie sur tous les travaux',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact">
              OBTENIR UNE SOUMISSION <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
        <Image
          src={constructionSite}
          alt="Travaux de rénovation AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      {/* Services */}
      <Section className="bg-secondary">
        <SectionHeading
          align="center"
          eyebrow="Nos spécialités"
          title="Domaines d’expertise"
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border border-border/40"
            >
              <Hammer className="text-primary mb-5" size={28} />
              <h3 className="font-heading font-bold text-foreground text-lg mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-md bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Sous-pages rénovation"
          title="Détails et réalisations par type de travaux"
          className="mb-12"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renovationSubpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg bg-card p-6 shadow-sm ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:ring-primary/30"
            >
              <div className="text-xs font-semibold text-accent">{page.eyebrow}</div>
              <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
                {page.menuLabel}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Voir la page <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Commercial feature */}
      <Section containerClassName="grid md:grid-cols-2 gap-14 items-center">
        <Image
          src={commercial}
          alt="Rénovation commerciale multilogement AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover order-last md:order-first"
        />
        <div>
          <SectionHeading
            eyebrow="Rénovation commerciale"
            title={
              <>
                Projets commerciaux
                <br />
                &amp; multilogements
              </>
            }
          />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-5">
            AR Construction maîtrise les rénovations à grande échelle : immeubles à logements,
            bâtiments commerciaux et espaces multifonctionnels. Nos équipes assurent une exécution
            sans faille, dans les délais et selon les normes en vigueur.
          </p>
          <ul className="space-y-3 mb-9">
            {commercialPoints.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact">
              DISCUTER DE MON PROJET <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Photo gallery */}
      <section className="py-10 pb-24 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Image
              src={gallery1}
              alt="Réalisation rénovation résidentielle"
              placeholder="blur"
              className="rounded-lg w-full aspect-[4/3] object-cover"
            />
            <Image
              src={renovation}
              alt="Réalisation rénovation intérieure"
              placeholder="blur"
              className="rounded-lg w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
            >
              <Link href="/realisations">
                VOIR TOUTES NOS RÉALISATIONS <ArrowRight className="ml-1.5" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section className="bg-secondary">
        <SectionHeading
          eyebrow="Images récupérées"
          title="Archives rénovation du site initial"
          description="Photos publiques récupérées des pages rénovation, agrandissement, revêtement extérieur et toiture."
          className="mb-12"
        />
        <SourceImageGrid images={renovationGallery} limit={24} />
      </Section>

      <CtaBand
        tone="primary"
        title={<>Un projet de rénovation&nbsp;?</>}
        text="Contactez-nous pour discuter de votre projet et obtenir une soumission gratuite."
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
