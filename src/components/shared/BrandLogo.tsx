import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  markClassName?: string
  textClassName?: string
  compact?: boolean
}

export function BrandLogo({ className, markClassName, textClassName, compact }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3 text-primary-foreground', className)}>
      <span
        className={cn(
          'relative flex h-12 w-12 shrink-0 items-end justify-center overflow-hidden rounded-md border border-current/20 bg-accent text-accent-foreground shadow-[var(--shadow-card)]',
          markClassName,
        )}
        aria-hidden="true"
      >
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 48 48" fill="none">
          <path d="M9 25.5L24 11L39 25.5" stroke="currentColor" strokeWidth="3.2" />
          <path d="M15 38V24.5H24L33 38" stroke="currentColor" strokeWidth="3.2" />
          <path d="M24 24.5H31.5" stroke="currentColor" strokeWidth="3.2" />
          <path d="M8 39.5H40" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
        </svg>
      </span>
      {!compact && (
        <span className={cn('flex flex-col leading-none', textClassName)}>
          <span className="font-heading text-[28px] font-bold">AR Construction</span>
          <span className="mt-1 text-[11px] font-semibold text-current/65">
            Entrepreneur general
          </span>
        </span>
      )}
    </span>
  )
}
