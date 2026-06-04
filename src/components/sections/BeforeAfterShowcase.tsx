'use client'

import { useState } from 'react'
import { BeforeAfterSlider } from '@/components/shared/BeforeAfterSlider'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Lightbox } from '@/components/shared/Lightbox'
import { beforeAfterPairs } from '@/lib/source-content'

type BeforeAfterShowcaseProps = {
  slug: string
  limit?: number
}

export function BeforeAfterShowcase({ slug, limit = 6 }: BeforeAfterShowcaseProps) {
  const [activePairIndex, setActivePairIndex] = useState<number>(-1)
  const [activeImageOffset, setActiveImageOffset] = useState<number>(0)
  
  const pairs = beforeAfterPairs(slug).slice(0, limit)

  if (!pairs.length) return null

  return (
    <section className="bg-secondary py-20 md:py-24">
      <div className="container mx-auto">
        <SectionHeading
          eyebrow="Avant / après"
          title="Comparer les transformations"
          className="mb-12"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {pairs.map((pair, index) => (
            <BeforeAfterSlider
              key={`${pair.before.src}-${pair.after.src}`}
              before={pair.before}
              after={pair.after}
              title={pair.title}
              onZoom={() => {
                setActivePairIndex(index)
                setActiveImageOffset(0)
              }}
            />
          ))}
        </div>
      </div>

      {activePairIndex >= 0 && (
        <Lightbox
          images={[
            {
              src: pairs[activePairIndex].before.src,
              alt: pairs[activePairIndex].before.alt,
              title: `${pairs[activePairIndex].title} - Avant`,
            },
            {
              src: pairs[activePairIndex].after.src,
              alt: pairs[activePairIndex].after.alt,
              title: `${pairs[activePairIndex].title} - Après`,
            },
          ]}
          currentIndex={activeImageOffset}
          onClose={() => setActivePairIndex(-1)}
          onChangeIndex={setActiveImageOffset}
        />
      )}
    </section>
  )
}
