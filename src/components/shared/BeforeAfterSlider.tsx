'use client'

import Image from 'next/image'
import { MoveHorizontal, Maximize2 } from 'lucide-react'
import { useId, useState } from 'react'
import type { SiteImage } from '@/lib/source-content'

type BeforeAfterSliderProps = {
  before: SiteImage
  after: SiteImage
  title: string
  onZoom?: () => void
}

export function BeforeAfterSlider({ before, after, title, onZoom }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const inputId = useId()

  return (
    <figure className="overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] select-none overflow-hidden bg-muted">
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
          <div className="h-full w-px bg-primary-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
          <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-md border border-white/60 bg-foreground/80 text-xs font-bold text-primary-foreground backdrop-blur">
            <MoveHorizontal size={18} aria-hidden="true" />
          </div>
        </div>

        <div className="absolute left-3 top-3 rounded-md bg-foreground/80 px-3 py-1 text-xs font-semibold text-primary-foreground">
          Avant
        </div>
        <div className="absolute right-3 top-3 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          Après
        </div>

        <input
          id={inputId}
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          aria-label={`Comparer avant et après: ${title}`}
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-border/50 px-5 py-4">
        <label htmlFor={inputId} className="text-sm font-semibold text-foreground">
          {title}
        </label>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Glisser</span>
          {onZoom && (
            <>
              <span className="text-border">|</span>
              <button
                type="button"
                onClick={onZoom}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                title="Agrandir en plein écran"
              >
                <Maximize2 size={13} />
                Agrandir
              </button>
            </>
          )}
        </div>
      </figcaption>
    </figure>
  )
}
