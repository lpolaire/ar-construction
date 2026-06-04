import { cn } from '@/lib/utils'

type CtaBandProps = {
  title: React.ReactNode
  text?: React.ReactNode
  tone?: 'primary' | 'secondary' | 'light'
  children: React.ReactNode
}

/** Closing call-to-action band. `children` = the button(s). Shared by inner pages. */
export function CtaBand({ title, text, tone = 'primary', children }: CtaBandProps) {
  const band =
    tone === 'primary'
      ? 'blueprint-surface bg-primary text-primary-foreground'
      : tone === 'secondary'
        ? 'paper-grain border-t border-border'
        : 'bg-background border-t border-border'

  return (
    <section className={cn('py-20 md:py-24', band)}>
      <div className="container mx-auto text-center max-w-xl">
        <h2
          className={cn(
            'font-heading text-3xl md:text-4xl font-bold mb-6 leading-[0.95]',
            tone !== 'primary' && 'text-foreground',
          )}
        >
          {title}
        </h2>
        {text && (
          <p
            className={cn(
              'mb-8',
              tone === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground',
            )}
          >
            {text}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">{children}</div>
      </div>
    </section>
  )
}
