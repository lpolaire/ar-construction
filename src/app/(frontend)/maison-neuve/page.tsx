import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, Home, Layers, Palette, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBand } from '@/components/sections/CtaBand'
import { constructionSubpages } from '@/lib/source-content'
import heroHouse from '@/assets/ar-maison2.jpg'
import constructionSite from '@/assets/ar-real3.jpg'
import designInterieur from '@/assets/ar-real7.jpg'

export const metadata: Metadata = {
  title: 'Maison neuve clé en main',
  description:
    'Construction de maison neuve clé en main au Saguenay. Le prix soumissionné, c’est le prix payé — garanti. Plans 3D et visite virtuelle inclus.',
}

const promesse = [
  'Le prix soumissionné est le prix payé — garanti',
  'Une équipe chevronnée de plus de 50 professionnels',
  'Plans architecturaux en 3D et visite virtuelle avant réalisation',
  'Entrepreneur général spécialisé depuis 2001 au Saguenay-Lac-Saint-Jean',
  'Suivi après-vente garanti en cas de besoin',
]

const included = [
  'Fondations et structure',
  'Isolation et enveloppe thermique',
  'Fenêtres et portes extérieures',
  'Revêtement extérieur',
  'Toiture et soffites',
  'Plomberie complète',
  'Électricité et éclairage',
  'Système de chauffage',
  'Finition intérieure',
  'Cuisine et salles de bain',
  'Escaliers et planchers',
  'Plans 3D et visite virtuelle',
]

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Rencontre initiale et plans 3D',
    desc: 'On discute de votre projet, vos goûts et votre budget. Nos architectes préparent des plans 3D pour vous permettre une visite virtuelle complète avant le début des travaux.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Soumission ferme et garantie',
    desc: 'Vous recevez une soumission détaillée. Le prix soumissionné est le prix payé — aucun surplus, aucune mauvaise surprise.',
  },
  {
    num: '03',
    icon: Layers,
    title: 'Construction par nos équipes',
    desc: 'Nos 50+ professionnels prennent en charge l’ensemble des travaux : fondation, structure, finition, plomberie, électricité.',
  },
  {
    num: '04',
    icon: Home,
    title: 'Remise des clés et suivi',
    desc: 'Votre maison est livrée selon l’échéancier convenu, avec un service après-vente complet pour votre tranquillité d’esprit.',
  },
]

export default function MaisonNeuvePage() {
  return (
    <>
      <PageHero
        image={heroHouse}
        alt="Maison neuve clé en main AR Construction"
        heightClass="h-[65vh] min-h-[500px]"
        eyebrow="Construction résidentielle"
        title={
          <>
            Maison neuve
            <br />
            clé en main
          </>
        }
        subtitle="AR Construction s’occupe de tout, de la conception à la remise des clés."
      />

      {/* Intro */}
      <Section containerClassName="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Notre promesse"
            title="Le prix soumissionné, c’est le prix payé"
          />
          <p className="text-muted-foreground text-base leading-relaxed mt-6 mb-5">
            Depuis 2001, AR Construction construit des maisons neuves de qualité supérieure au
            Saguenay-Lac-Saint-Jean. Notre engagement premier : vous offrir une construction sans
            surprise, au prix convenu dès le départ.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Grâce à notre service de plans architecturaux en 3D, vous pouvez visualiser et
            personnaliser chaque pièce de votre future maison avant même le premier coup de pelle.
          </p>
          <ul className="space-y-3 mb-9">
            {promesse.map((item) => (
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
          alt="Chantier de construction AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      {/* Ce qui est inclus */}
      <Section className="bg-secondary">
        <SectionHeading
          align="center"
          eyebrow="Forfait complet"
          title="Ce qui est inclus"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {included.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-card rounded-md p-4 shadow-sm border border-border/40"
            >
              <CheckCircle2 className="text-primary shrink-0" size={18} />
              <span className="text-foreground text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Processus */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Notre processus"
          title="De l’idée à la réalité"
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              <div className="text-[80px] font-heading font-bold text-border/60 leading-none mb-4 select-none">
                {s.num}
              </div>
              <s.icon className="text-primary mb-4" size={26} />
              <h3 className="font-heading font-bold text-foreground text-base mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Construction" title="Services complémentaires" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ...constructionSubpages,
            {
              href: '/autoconstructeur',
              menuLabel: 'Autoconstructeur',
              eyebrow: 'Forfait',
              description:
                'Construire en kit avec matériaux livrés, prêt d’outils sans frais et accompagnement professionnel.',
            },
          ].map((page) => (
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
                Découvrir <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Design intérieur */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Image
            src={designInterieur}
            alt="Design intérieur AR Construction"
            placeholder="blur"
            className="rounded-lg w-full aspect-[4/3] object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <p className="text-accent font-semibold mb-5 text-xs">Design intérieur</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Personnalisez chaque détail
            </h2>
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-6">
              Notre équipe de design intérieur vous accompagne dans le choix des matériaux, des
              couleurs et des finitions pour créer un intérieur qui vous ressemble. Armoires,
              planchers, carrelages — chaque élément est sélectionné avec soin.
            </p>
            <div className="flex items-center gap-3">
              <Palette className="text-accent" size={20} />
              <span className="text-primary-foreground/80 text-sm">
                Plans 3D inclus dans chaque projet
              </span>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        tone="light"
        title="Commencez votre projet aujourd’hui"
        text="Contactez-nous pour une soumission gratuite et sans engagement."
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
