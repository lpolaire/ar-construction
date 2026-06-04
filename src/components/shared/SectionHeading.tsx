import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  /** `dark` = for use on dark/primary backgrounds. */
  tone?: 'default' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center mx-auto',
        align === 'center' && 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-5 inline-flex items-center gap-3 text-sm font-semibold text-accent">
          <span className="h-px w-9 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-heading text-4xl md:text-5xl font-bold leading-[0.95]',
          tone === 'dark' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed',
            tone === 'dark' ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
