'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Section } from '@/components/layout/Section'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { Lightbox } from '@/components/shared/Lightbox'
import { gallery } from '@/lib/home-content'

export function RealisationsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)

  return (
    <Section id="realisations">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-accent">
            <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
            Réalisations
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[0.95] text-foreground max-w-lg">
            Des projets qui parlent d&apos;eux-mêmes
          </h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-sm leading-relaxed text-pretty">
          Plus de 700 maisons construites et 1 000 projets de rénovation au Saguenay-Lac-Saint-Jean.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((item, i) => (
          <ProjectCard
            key={item.alt}
            img={item.img}
            alt={item.alt}
            onClick={() => setLightboxIndex(i)}
            className={i === 0 ? 'col-span-2 row-span-2' : ''}
            aspect={i === 0 ? '16/10' : '4/3'}
          />
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={gallery.map((item) => ({
            src: item.img,
            alt: item.alt,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onChangeIndex={setLightboxIndex}
        />
      )}

      <div className="text-center mt-12">
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
    </Section>
  )
}
