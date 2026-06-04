import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { homeImages } from '@/lib/home-content'

export function CareersCta() {
  return (
    <section id="emploi" className="blueprint-surface py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-accent">
            <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
            Emploi
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-7 leading-[0.95]">
            Vous avez des talents en construction&nbsp;?
          </h2>
          <p className="text-primary-foreground/80 text-base leading-relaxed mb-9 text-pretty">
            Joignez-vous à une équipe de plus de 50 professionnels passionnés. AR Construction
            recrute pour grandir et continuer à bâtir les rêves de ses clients partout au Québec.
            Stabilité, esprit famille et projets stimulants vous attendent.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
          >
            <Link href="/emploi">
              VOIR LES OPPORTUNITÉS <ArrowRight className="ml-1.5" size={16} />
            </Link>
          </Button>
        </div>
        <Image
          src={homeImages.constructionSite}
          alt="Carrières chez AR Construction"
          className="rounded-lg w-full h-auto shadow-[var(--shadow-soft)] aspect-[4/3] object-cover"
          placeholder="blur"
        />
      </div>
    </section>
  )
}
