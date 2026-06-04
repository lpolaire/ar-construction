'use client'

import { useEffect } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type LightboxImage = {
  src: string | StaticImageData
  alt: string
  title?: string
}

type LightboxProps = {
  images: LightboxImage[]
  currentIndex: number
  onClose: () => void
  onChangeIndex: (index: number) => void
}

export function Lightbox({ images, currentIndex, onClose, onChangeIndex }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

  if (!images.length || currentIndex < 0 || currentIndex >= images.length) return null

  const current = images[currentIndex]

  const handleNext = () => {
    onChangeIndex((currentIndex + 1) % images.length)
  }

  const handlePrev = () => {
    onChangeIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-foreground/90 p-4 backdrop-blur-md transition-opacity duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-md bg-black/40 p-3 text-primary-foreground hover:bg-black/60 transition-colors"
        aria-label="Fermer"
      >
        <X size={24} />
      </button>

      {/* Main container */}
      <div className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center">
        {/* Navigation - Prev */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-10 rounded-md bg-black/40 p-3 text-primary-foreground hover:bg-black/60 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Image wrapper */}
        <div className="relative aspect-[4/3] w-full max-h-[75vh] md:max-h-[80vh] overflow-hidden rounded-lg">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* Navigation - Next */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-10 rounded-md bg-black/40 p-3 text-primary-foreground hover:bg-black/60 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Caption */}
        <div className="mt-4 text-center text-primary-foreground">
          <p className="text-sm font-semibold">{current.title || current.alt}</p>
          {images.length > 1 && (
            <p className="text-xs text-primary-foreground/60 mt-1">
              {currentIndex + 1} / {images.length}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
