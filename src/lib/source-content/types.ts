export type SiteImage = {
  src: string
  alt: string
}

export type DetailSection = {
  title: string
  body: string
}

export type DetailPageContent = {
  slug: string
  href: string
  menuLabel: string
  title: string
  eyebrow: string
  description: string
  subtitle: string
  heroImage: any
  gallerySlug?: string
  beforeAfterSlug?: string
  highlights: string[]
  sections: DetailSection[]
}
