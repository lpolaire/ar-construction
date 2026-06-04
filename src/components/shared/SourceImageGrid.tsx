'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { SiteImage } from '@/lib/source-content'
import { cn } from '@/lib/utils'
import { Lightbox } from './Lightbox'

type SourceImageGridProps = {
  images: SiteImage[]
  aspect?: string
  limit?: number
  className?: string
}

export function SourceImageGrid({
  images,
  aspect = '4/3',
  limit,
  className,
}: SourceImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)
  const visible = typeof limit === 'number' ? images.slice(0, limit) : images

  if (!visible.length) return null

  return (
    <>
      <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)}>
        {visible.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            onClick={() => setLightboxIndex(index)}
            className={cn(
              'group overflow-hidden rounded-lg bg-muted shadow-[var(--shadow-card)] cursor-pointer',
              index === 0 && visible.length > 5 && 'sm:col-span-2',
            )}
            style={{ aspectRatio: index === 0 && visible.length > 5 ? '16/8' : aspect }}
          >
            <div className="relative h-full w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-foreground/80 to-transparent px-4 pb-4 pt-16 text-xs font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={visible}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  )
}
