import { cn } from '@/lib/utils'

/** Centered max-width wrapper. Width/padding come from the Tailwind `container` config. */
export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={cn('container mx-auto', className)}>{children}</div>
}
