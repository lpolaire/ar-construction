import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, Package, Truck, Wrench, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBand } from '@/components/sections/CtaBand'
import kit from '@/assets/ar-real7.jpg'
import constructionSite from '@/assets/ar-real9.jpg'

export const metadata: Metadata = {
  title: 'Forfait autoconstructeur',
  description:
    'Construisez votre maison en kit avec AR Construction. Matériaux livrés, prêt d’outils sans frais, accompagnement professionnel et économies importantes sur la main-d’œuvre.',
}

const avantages = [
  {
    icon: DollarSign,
    title: 'Économies importantes',
    desc: 'En prenant en charge une partie des travaux, vous réduisez significativement les coûts de main-d’œuvre tout en gardant le contrôle de votre budget.',
  },
  {
    icon: Truck,
    title: 'Matériaux livrés sur place',
    desc: 'AR Construction s’occupe de la commande et de la livraison de tous les matériaux directement sur votre chantier, selon l’échéancier convenu.',
  },
  {
    icon: Wrench,
    title: 'Prêt d’outils sans frais',
    desc: 'Bénéficiez d’une panoplie complète d’outils et d’équipements professionnels mis à votre disposition gratuitement pour réaliser votre chantier (échafaudages, compresseur, cloueuses, etc.).',
  },
  {
    icon: Package,
    title: 'Accompagnement professionnel',
    desc: 'Nos contremaîtres expérimentés vous guident tout au long du projet, garantissant qualité et conformité aux normes du bâtiment.',
  },
]

const etapes = [
  {
    num: '01',
    title: 'Choix du modèle et plans 3D',
    desc: 'Sélectionnez parmi nos modèles ou personnalisez votre plan. Nos plans 3D vous permettent de visualiser chaque détail avant le début.',
  },
  {
    num: '02',
    title: 'Soumission détaillée',
    desc: 'Vous recevez une liste complète des matériaux, des coûts et de l’échéancier. La transparence totale dès le départ.',
  },
  {
    num: '03',
    title: 'Livraison des matériaux',
    desc: 'AR Construction commande et livre tous les matériaux sur votre terrain selon les phases de construction.',
  },
  {
    num: '04',
    title: 'Construction accompagnée',
    desc: 'Vous réalisez les travaux avec l’accompagnement de nos professionnels. Nous effectuons les inspections à chaque étape.',
  },
]

export default function AutoconstructeurPage() {
  return (
    <>
      <PageHero
        image={kit}
        alt="Forfait autoconstructeur AR Construction"
        heightClass="h-[65vh] min-h-[480px]"
        eyebrow="Forfait autoconstructeur"
        title={
          <>
            Construisez
            <br />
            votre maison
            <br />
            en kit
          </>
        }
        subtitle="Économisez sur la main-d’œuvre tout en bénéficiant de notre expertise et de nos matériaux."
      />

      {/* Intro */}
      <Section containerClassName="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading eyebrow="Le concept" title="La solution pour construire à moindre coût" />
          <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-5">
            Le forfait autoconstructeur d’AR Construction vous permet de participer activement à la
            construction de votre maison tout en bénéficiant de notre expertise, de nos matériaux et
            de notre encadrement professionnel.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Vous réalisez une partie des travaux vous-même (ou avec l’aide de proches), ce qui vous
            permet de réaliser des économies substantielles. AR Construction s’occupe de la
            livraison des matériaux, du prêt d’outils sans frais et du suivi professionnel à chaque
            étape.
          </p>
          <ul className="space-y-3 mb-9">
            {[
              'Économies importantes sur la main-d’œuvre',
              'Matériaux de qualité livrés sur votre terrain',
              'Prêt d’outils spécialisés sans frais',
              'Accompagnement de nos contremaîtres',
              'Respect des normes du bâtiment garanti',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href="/contact">
              EN SAVOIR PLUS <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
        <Image
          src={constructionSite}
          alt="Autoconstructeur AR Construction"
          placeholder="blur"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full aspect-[4/3] object-cover"
        />
      </Section>

      {/* Forfaits */}
      <Section className="bg-secondary/40 border-t border-b border-border/40">
        <SectionHeading
          align="center"
          eyebrow="Nos Formules"
          title="Choisissez votre niveau d’implication"
          className="mb-14"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Forfait Maison en kit */}
          <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border border-border/40 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs mb-4">
                Option 1
              </div>
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                FORFAIT MAISON EN KIT
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                En optant pour ce forfait, vous êtes assuré de la livraison sur place de
                l&apos;ensemble des matériaux requis. La livraison se fait par étape selon
                l&apos;avancement des travaux afin d&apos;éviter que le chantier de construction
                soit encombré, tout en prévenant l&apos;altération des matériaux par les
                intempéries.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Quantité de matériaux calculée précisément (évite le gaspillage)',
                  'Livraison phasée selon l’avancement des travaux',
                  'Prêt de notre flotte d’outils sans frais supplémentaires',
                  'Montant crédité dès la signature du contrat pour des économies maximales',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact">CHOISIR CE FORFAIT</Link>
            </Button>
          </div>

          {/* Forfait Charpente montée */}
          <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] border border-border/40 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs mb-4">
                Option 2
              </div>
              <h3 className="font-heading font-bold text-foreground text-2xl mb-4">
                FORFAIT CHARPENTE MONTÉE (COQUILLE)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Bénéficiez du meilleur des deux mondes : tirez avantage de notre savoir-faire pour
                la construction de l’ossature extérieure (coquille étanche), puis prenez la relève
                pour la finition.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Ossature extérieure (coquille fermée) bâtie par nos experts',
                  'Finition intérieure sous votre entière gestion',
                  'Combinez rigueur professionnelle et économies de main-d’œuvre',
                  'Accompagnement et supervision d’un gestionnaire de chantier dédié',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact">CHOISIR CE FORFAIT</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Avantages */}
      <Section className="bg-secondary">
        <SectionHeading
          align="center"
          eyebrow="Pourquoi choisir ce forfait"
          title="Les avantages"
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

      {/* Processus */}
      <Section>
        <SectionHeading
          align="center"
          eyebrow="Comment ça fonctionne"
          title="Le processus"
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapes.map((e) => (
            <div key={e.num}>
              <div className="text-[80px] font-heading font-bold text-border/60 leading-none mb-4 select-none">
                {e.num}
              </div>
              <h3 className="font-heading font-bold text-foreground text-base mb-3">{e.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        tone="primary"
        title={<>Prêt à construire vous-même&nbsp;?</>}
        text="Discutez avec notre équipe pour voir si le forfait autoconstructeur est la bonne option pour vous."
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
