import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { aboutPoints, homeImages } from '@/lib/home-content'

export function AboutSection() {
  return (
    <Section id="apropos" containerClassName="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div>
        <SectionHeading
          eyebrow="Ce qui nous différencie"
          title="Une entreprise reconnue, une équipe spécialisée"
        />
        <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-7 text-pretty">
          Entrepreneur général reconnu au Saguenay-Lac-Saint-Jean comme un leader dans son domaine,
          AR Construction a comme mission première de construire des maisons neuves de qualité
          supérieure. Un service de plans architecturaux en 3D permet à nos clients d&apos;effectuer
          une visite virtuelle de leur demeure avant même sa réalisation.
        </p>
        <ul className="space-y-3.5 mb-9">
          {aboutPoints.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={19} />
              <span className="text-foreground text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild size="lg">
          <Link href="/a-propos">
            EN SAVOIR PLUS <ArrowRight className="ml-1.5" size={16} />
          </Link>
        </Button>
      </div>

      <div className="relative">
        <Image
          src={homeImages.constructionSite}
          alt="Équipe AR Construction sur un chantier au Saguenay"
          className="rounded-lg shadow-[var(--shadow-soft)] w-full h-auto aspect-[4/3] object-cover"
          placeholder="blur"
        />
        <div className="absolute -bottom-7 -left-7 hidden rounded-md border border-primary-foreground/10 bg-primary p-6 text-primary-foreground shadow-[var(--shadow-card)] md:block">
          <div className="font-heading text-4xl font-bold">25+</div>
          <div className="mt-1 text-xs font-semibold text-primary-foreground/80">
            Années d&apos;expertise
          </div>
        </div>
      </div>
    </Section>
  )
}
