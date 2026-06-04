import Image, { type StaticImageData } from 'next/image'

type PageHeroProps = {
  image: StaticImageData | string
  alt: string
  eyebrow: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  heightClass?: string
}

/** Full-bleed image hero with gradient + bottom-aligned title. Shared by all inner pages. */
export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  heightClass = 'h-[60vh] min-h-[480px]',
}: PageHeroProps) {
  return (
    <section className={`relative ${heightClass} overflow-hidden`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        placeholder={typeof image === 'string' ? 'empty' : 'blur'}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 blueprint-surface opacity-30" />
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-16">
        <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold text-accent">
          <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[0.95] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 mt-4 text-base md:text-lg max-w-xl text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
