import manifestJson from '../../../public/ar-source/manifest.json'
import type { SiteImage } from './types'

type ManifestImage = {
  publicPath: string
  alt?: string
}

type ManifestPage = {
  images?: ManifestImage[]
}

const manifest = manifestJson as Record<string, ManifestPage>

function readableAlt(slug: string, alt?: string) {
  if (alt && alt !== slug) return alt.replace(/_/g, ' ')

  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace('Realisations', 'Réalisations')
    .replace('Renovation', 'Rénovation')
}

export function sourceImages(slug: string): SiteImage[] {
  return (manifest[slug]?.images ?? []).map((image) => ({
    src: image.publicPath,
    alt: readableAlt(slug, image.alt),
  }))
}

export function heroFrom(slug: string, fallback = '/ar-source/realisations/01-23-08.jpg') {
  return sourceImages(slug)[0]?.src ?? fallback
}

export function beforeAfterPairs(slug: string) {
  const images = sourceImages(slug)
  const pairs: { before: SiteImage; after: SiteImage; title: string }[] = []

  for (let index = 0; index + 1 < images.length; index += 2) {
    pairs.push({
      before: { ...images[index], alt: `${images[index].alt} avant` },
      after: { ...images[index + 1], alt: `${images[index + 1].alt} après` },
      title: `Transformation ${String(index / 2 + 1).padStart(2, '0')}`,
    })
  }

  return pairs
}
