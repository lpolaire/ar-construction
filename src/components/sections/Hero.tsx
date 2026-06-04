import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { homeImages } from '@/lib/home-content'

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-42px)] w-full overflow-hidden">
      <Image
        src={homeImages.heroHouse}
        alt="Maison neuve construite par AR Construction au Saguenay"
        className="absolute inset-0 w-full h-full object-cover object-center"
        priority
        placeholder="blur"
      />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 blueprint-surface opacity-40" />

      <div className="relative z-10 container mx-auto flex min-h-[calc(100dvh-42px)] flex-col justify-center px-4 py-32 md:py-40">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-accent">
            <span className="h-px w-10 bg-accent/60" aria-hidden="true" />
            Depuis 2001 · Saguenay-Lac-Saint-Jean
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[92px] font-heading font-bold text-primary-foreground drop-shadow-lg max-w-4xl leading-[0.88]">
            Bâtissez
            <br />
            votre projet
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-2xl text-primary-foreground/80 font-medium drop-shadow text-pretty">
            Qualité <span className="text-accent font-semibold">|</span> Confiance{' '}
            <span className="text-accent font-semibold">|</span> Clé en main
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-semibold px-8 h-13 shadow-[0_18px_34px_-26px_hsl(var(--accent))]"
            >
              <Link href="/contact">
                DEMANDER UNE SOUMISSION <ArrowRight className="ml-1.5" size={17} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-sm font-semibold px-8 h-13"
            >
              <Link href="/maison-neuve">DÉCOUVRIR NOS SERVICES</Link>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-md border border-primary-foreground/20 bg-primary-foreground/20 text-primary-foreground shadow-[var(--shadow-card)] backdrop-blur-sm">
            {[
              ['RBQ', '8271-8974-17'],
              ['APCHQ', 'Or'],
              ['ACQ', 'Platine'],
            ].map(([label, value]) => (
              <div key={label} className="bg-foreground/60 px-4 py-3">
                <dt className="text-[11px] font-semibold text-accent">{label}</dt>
                <dd className="mt-1 text-xs font-semibold text-primary-foreground/80">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-9 w-px bg-primary-foreground/40" />
      </div>
    </section>
  )
}
