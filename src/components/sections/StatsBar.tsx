import { Container } from '@/components/layout/Container'
import { stats } from '@/lib/home-content'

export function StatsBar() {
  return (
    <section className="blueprint-surface bg-foreground py-16 text-primary-foreground">
      <Container className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-primary-foreground/10 bg-primary-foreground/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-foreground/80 p-6 text-left md:p-8">
            <div className="font-heading text-5xl md:text-6xl font-bold text-accent">{s.num}</div>
            <div className="mt-2 text-xs font-semibold text-primary-foreground/70 md:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
