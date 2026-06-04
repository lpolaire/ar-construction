import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { homeImages } from '@/lib/home-content'

export function TerrainsCta() {
  return (
    <section id="terrains" className="relative py-36 overflow-hidden">
      <Image
        src={homeImages.constructionSite}
        alt="Terrains à vendre au Saguenay — AR Construction"
        className="absolute inset-0 w-full h-full object-cover"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-foreground/80" />
      <div className="absolute inset-0 blueprint-surface opacity-30" />
      <div className="relative container mx-auto text-background max-w-3xl px-4">
        <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-accent">
          <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
          Terrains à vendre
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-7 leading-[0.95]">
          250 terrains disponibles à Ville de Saguenay
        </h2>
        <p className="text-base text-background/75 mb-10 leading-relaxed text-pretty">
          Plusieurs secteurs stratégiques disponibles pour votre prochain projet de construction.
          Phases 5 et 6 du Quartier des Élus — entre Chicoutimi et Jonquière.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-13"
        >
          <Link href="/terrains">
            VOIR LES TERRAINS DISPONIBLES <ArrowRight className="ml-1.5" size={17} />
          </Link>
        </Button>
      </div>
    </section>
  )
}
