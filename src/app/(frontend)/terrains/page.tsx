import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SourceImageGrid } from '@/components/shared/SourceImageGrid'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBand } from '@/components/sections/CtaBand'
import { SITE } from '@/lib/constants'
import { sourceImages, terrainSubpages } from '@/lib/source-content'
import constructionSite from '@/assets/ar-maison1.jpg'
import comboImg from '@/assets/ar-maison2.jpg'

export const metadata: Metadata = {
  title: 'Terrains à vendre',
  description:
    '250 terrains disponibles à Ville de Saguenay. Quartier des Élus phases 5 et 6, secteurs résidentiels et terrains commerciaux. Formule terrain + maison neuve clé en main.',
}

const secteurs = [
  {
    name: 'Quartier des Élus — Phases 5 & 6',
    location: 'Entre Chicoutimi et Jonquière',
    status: 'Disponible',
    desc: 'Le développement résidentiel phare d’AR Construction. Les phases 2, 3 et 4 sont complètement vendues. Phases 5 et 6 maintenant disponibles avec de nouveaux lots résidentiels et commerciaux.',
    features: [
      'Lots résidentiels et commerciaux',
      'Secteur stratégique à Ville de Saguenay',
      'Services municipaux inclus',
      'Accès rapide aux grands axes',
    ],
  },
  {
    name: 'Secteurs résidentiels',
    location: 'Saguenay et environs',
    status: 'Disponible',
    desc: 'AR Construction dispose de terrains dans plusieurs secteurs résidentiels prisés de Ville de Saguenay, offrant un cadre de vie idéal pour votre future maison.',
    features: [
      'Quartiers établis',
      'Proximité des services',
      'Terrains viabilisés',
      'Zonage résidentiel confirmé',
    ],
  },
  {
    name: 'Terrains commerciaux',
    location: 'Zones commerciales stratégiques',
    status: 'Disponible',
    desc: 'Des terrains commerciaux bien situés pour votre projet d’entreprise ou d’investissement immobilier dans la région du Saguenay-Lac-Saint-Jean.',
    features: [
      'Zonage commercial',
      'Accès grande route',
      'Infrastructure en place',
      'Superficie variable',
    ],
  },
]

const terrainStats = [
  { num: '250', label: 'Terrains disponibles' },
  { num: '6', label: 'Phases développées' },
  { num: '25+', label: 'Ans d’expérience foncière' },
]

export default function TerrainsPage() {
  const terrainMaps = [
    ...sourceImages('terrains-completes'),
    ...sourceImages('terrains-disponibles'),
    ...sourceImages('terrains-villegiature'),
  ]

  return (
    <>
      <PageHero
        image={constructionSite}
        alt="Terrains à vendre Saguenay AR Construction"
        heightClass="h-[65vh] min-h-[480px]"
        eyebrow="Terrains à vendre"
        title={
          <>
            Trouvez votre
            <br />
            terrain idéal
          </>
        }
        subtitle="250 terrains disponibles à Ville de Saguenay et dans la région."
      />

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-14">
        <Container className="grid grid-cols-3 gap-8 text-center">
          {terrainStats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent">{s.num}</div>
              <div className="mt-2 text-xs text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Développements */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Nos développements"
          title="Secteurs disponibles"
          className="mb-14"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {secteurs.map((s) => (
            <div
              key={s.name}
              className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] border border-border/40"
            >
              <div className="bg-primary/[0.08] px-7 py-5 border-b border-border/40">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-base">{s.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <MapPin size={12} className="text-muted-foreground" />
                      <span className="text-muted-foreground text-xs">{s.location}</span>
                    </div>
                  </div>
                  <span className="shrink-0 bg-primary/20 text-primary text-xs font-bold px-2.5 py-1 rounded-md">
                    {s.status}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="text-primary shrink-0" size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary">
        <SectionHeading
          eyebrow="Cartes et inventaires"
          title="Terrains complétés, disponibles et villégiature"
          className="mb-12"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {terrainSubpages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg bg-card p-7 shadow-sm ring-1 ring-border/50 transition-all hover:-translate-y-1 hover:ring-primary/30"
            >
              <div className="text-xs font-semibold text-accent">{page.eyebrow}</div>
              <h2 className="mt-3 font-heading text-xl font-bold text-foreground">
                {page.menuLabel}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {page.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                Voir les détails <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Cartes du site initial"
          title="Plans et emplacements"
          description="Plans publics récupérés des pages terrains complétés, terrains disponibles et villégiature."
          className="mb-12"
        />
        <SourceImageGrid images={terrainMaps} />
      </Section>

      {/* Combo terrain + maison */}
      <Section
        className="bg-secondary"
        containerClassName="grid md:grid-cols-2 gap-14 items-center"
      >
        <div>
          <SectionHeading
            eyebrow="Formule complète"
            title={
              <>
                Terrain + maison neuve
                <br />
                clé en main
              </>
            }
          />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-7">
            Profitez d’une offre complète : achetez votre terrain chez AR Construction et faites
            construire votre maison neuve par nos équipes. Une seule entreprise, un seul
            interlocuteur, une seule garantie.
          </p>
          <ul className="space-y-3 mb-9">
            {[
              'Sélection du terrain avec nos conseillers',
              'Plans 3D personnalisés',
              'Construction clé en main',
              'Le prix soumissionné est le prix payé — garanti',
              'Financement disponible',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact">
              NOUS CONTACTER <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
        <Image
          src={comboImg}
          alt="Terrain et maison neuve AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      <CtaBand
        tone="primary"
        title={<>Intéressé par un terrain&nbsp;?</>}
        text="Contactez notre équipe pour obtenir la liste complète des terrains disponibles et leur prix."
      >
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
        >
          <Link href="/contact">DEMANDER L’INVENTAIRE</Link>
        </Button>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href={SITE.phoneHref}>
            <Phone size={16} className="mr-1.5" /> {SITE.phone}
          </a>
        </Button>
      </CtaBand>
    </>
  )
}
