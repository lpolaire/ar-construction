import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/home-content'
import { cn } from '@/lib/utils'

type ServiceCardProps = Service & {
  className?: string
  featured?: boolean
}

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  img,
  href,
  className,
  featured,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        'group grid h-full overflow-hidden rounded-lg border border-border/50 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40',
        featured && 'lg:grid-cols-[1.08fr_0.92fr]',
        className,
      )}
    >
      <div className={cn('overflow-hidden', featured ? 'min-h-[320px]' : 'aspect-[4/3]')}>
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
        />
      </div>
      <div className={cn('flex flex-col p-7 md:p-8', featured && 'justify-center lg:p-10')}>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Icon size={25} />
        </div>
        <h3 className="font-heading text-2xl font-bold leading-none text-foreground">{title}</h3>
        <p className="mt-4 mb-7 text-sm leading-relaxed text-muted-foreground text-pretty">
          {desc}
        </p>
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3 hover:text-accent"
        >
          En savoir plus <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  )
}
