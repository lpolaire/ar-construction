import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, Users, Heart, TrendingUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { YouTubeGrid } from '@/components/sections/YouTubeGrid'
import { SITE } from '@/lib/constants'
import constructionSite from '@/assets/ar-real8.jpg'
import heroHouse from '@/assets/ar-real9.jpg'

export const metadata: Metadata = {
  title: 'Emploi · Carrières',
  description:
    'Carrières chez AR Construction au Saguenay : charpentier-menuisier, contremaître, électricien, plombier, peintre. Stabilité, esprit famille et développement professionnel.',
}

const avantages = [
  {
    icon: Shield,
    title: 'Stabilité et sécurité',
    desc: 'AR Construction offre une stabilité d’emploi rare dans l’industrie. Avec plus de 25 ans d’expertise et un carnet de commandes solide, votre avenir est assuré.',
  },
  {
    icon: Heart,
    title: 'Esprit famille',
    desc: 'Notre culture d’entreprise est fondée sur le respect, la collaboration et la fierté du travail bien fait. Vous êtes accueilli comme membre de la famille AR.',
  },
  {
    icon: TrendingUp,
    title: 'Développement professionnel',
    desc: 'Formations continues, certifications et opportunités d’avancement. Nous investissons dans le développement de chacun de nos employés.',
  },
  {
    icon: Users,
    title: 'Équipe expérimentée',
    desc: 'Travaillez aux côtés de 50+ professionnels chevronnés dans tous les corps de métier de la construction résidentielle et commerciale.',
  },
]

const postes = [
  { titre: 'Charpentier-menuisier', type: 'Temps plein', secteur: 'Jonquière / Saguenay' },
  { titre: 'Contremaître de chantier', type: 'Temps plein', secteur: 'Saguenay-Lac-Saint-Jean' },
  { titre: 'Électricien', type: 'Temps plein', secteur: 'Jonquière' },
  { titre: 'Plombier', type: 'Temps plein', secteur: 'Saguenay' },
  { titre: 'Peintre en bâtiment', type: 'Temps plein / partiel', secteur: 'Saguenay' },
  { titre: 'Aide-charpentier', type: 'Saisonnier', secteur: 'Saguenay-Lac-Saint-Jean' },
]

const culture = [
  {
    title: 'Employabilité et stabilité',
    desc: 'Découvrez pourquoi nos employés restent des années.',
  },
  { title: 'Esprit famille', desc: 'Une culture d’entreprise fondée sur la fierté et le respect.' },
  { title: 'Profil Raphaël', desc: 'Témoignage d’un de nos charpentiers-menuisiers.' },
]

const emploiVideos = [
  {
    id: 'Hf_u4vF8CI8',
    title: 'Ici, ce sera chez nous',
    person: 'AR Construction',
    description: 'Vidéo officielle AR Construction issue de la chaîne YouTube de l’entreprise.',
  },
  {
    id: 'dWl1snVejLQ',
    title: 'Construis-moi un chez-moi',
    person: 'AR Construction',
    description: 'Vidéo promotionnelle officielle de la série AR Construction.',
  },
  {
    id: 'GISSTzODxnA',
    title: 'Les héros de la réno',
    person: 'AR Construction',
    description: 'Vidéo officielle liée à la rénovation et aux métiers de chantier.',
  },
]

export default function EmploiPage() {
  return (
    <>
      <PageHero
        image={constructionSite}
        alt="Carrières AR Construction"
        heightClass="h-[65vh] min-h-[480px]"
        eyebrow="Rejoignez l’équipe"
        title={
          <>
            Bâtissez votre
            <br />
            carrière avec nous
          </>
        }
        subtitle="Plus de 50 professionnels passionnés vous attendent au sein d’AR Construction."
      />

      {/* Intro */}
      <Section containerClassName="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Pourquoi AR Construction"
            title="Une carrière qui vous ressemble"
          />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-5">
            AR Construction est bien plus qu’un employeur — c’est une famille. Depuis 2001, nous
            cultivons un environnement de travail où chaque employé est valorisé, respecté et
            outillé pour exceller.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Que vous soyez charpentier, plombier, électricien ou gestionnaire, vous trouverez chez
            nous des projets stimulants, une équipe soudée et de vraies perspectives d’avancement.
          </p>
          <Button asChild size="lg">
            <a href={`${SITE.emailHref}?subject=Candidature`}>
              ENVOYER MA CANDIDATURE <ArrowRight className="ml-1.5" size={16} />
            </a>
          </Button>
        </div>
        <Image
          src={heroHouse}
          alt="Équipe AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      {/* Avantages */}
      <Section className="bg-secondary">
        <SectionHeading
          align="center"
          eyebrow="Ce qu’on vous offre"
          title="Les avantages AR"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {avantages.map((a) => (
            <div
              key={a.title}
              className="bg-card rounded-lg p-7 shadow-[var(--shadow-card)] border border-border/40"
            >
              <a.icon className="text-primary mb-4" size={26} />
              <h3 className="font-heading font-bold text-foreground text-base mb-3">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Vidéos"
          title="Culture, équipe et métiers"
          description="L’ancien site présentait plusieurs vidéos d’entreprise. Les vidéos officielles disponibles sur la chaîne AR Construction sont intégrées ici."
          className="mb-12"
        />
        <YouTubeGrid videos={emploiVideos} />
      </Section>

      {/* Postes */}
      <Section containerClassName="max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="Opportunités"
          title="Postes disponibles"
          className="mb-14"
        />
        <div className="space-y-3">
          {postes.map((p) => (
            <div
              key={p.titre}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card rounded-md px-6 py-5 shadow-sm border border-border/40 hover:border-primary/30 transition-colors"
            >
              <div>
                <div className="font-heading font-bold text-foreground text-base">{p.titre}</div>
                <div className="text-muted-foreground text-sm mt-1">{p.secteur}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs bg-primary/10 text-primary font-semibold px-3 py-1 rounded-md shrink-0">
                  {p.type}
                </span>
                <a
                  href={`${SITE.emailHref}?subject=Candidature — ${p.titre}`}
                  className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all shrink-0"
                >
                  Postuler <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-secondary rounded-lg p-8 border border-border/40 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Vous ne trouvez pas le poste qui vous correspond&nbsp;? Envoyez-nous votre candidature
            spontanée&nbsp;!
          </p>
          <Button asChild size="lg">
            <a href={`${SITE.emailHref}?subject=Candidature spontanée`}>
              CANDIDATURE SPONTANÉE <ArrowRight className="ml-1.5" size={16} />
            </a>
          </Button>
        </div>
      </Section>

      {/* Culture */}
      <section className="py-20 bg-primary text-primary-foreground">
        <Container className="grid md:grid-cols-3 gap-6 text-center">
          {culture.map((v) => (
            <div key={v.title} className="bg-white/[0.08] rounded-lg p-8">
              <div className="w-14 h-14 rounded-md bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-base mb-2">{v.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{v.desc}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  )
}
