import { Award } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { certifications } from '@/lib/home-content'

export function CertificationsRow() {
  return (
    <section className="py-20 bg-secondary/80 border-y border-border">
      <Container>
        <p className="mb-10 text-center text-sm font-semibold text-muted-foreground">
          Certifications &amp; Reconnaissances
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certifications.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-3 rounded-md border border-border/60 bg-card/90 p-6 text-center shadow-[var(--shadow-card)]"
            >
              <Award className="text-accent" size={26} />
              <div>
                <div className="font-heading font-bold text-foreground text-base leading-none">
                  {c.label}
                </div>
                <div className="text-muted-foreground text-xs mt-1">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
