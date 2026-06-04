import { cn } from '@/lib/utils'
import { Container } from './Container'

type SectionProps = {
  id?: string
  className?: string
  /** Set false to manage the inner Container yourself (e.g. full-bleed backgrounds). */
  contained?: boolean
  containerClassName?: string
  children: React.ReactNode
}

/** Vertical rhythm band. Default = standard section padding + centered container. */
export function Section({
  id,
  className,
  contained = true,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28 lg:py-32', className)}>
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </section>
  )
}
