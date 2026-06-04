import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ServiceCard } from '@/components/shared/ServiceCard'
import { services } from '@/lib/home-content'

export function ServicesGrid() {
  return (
    <Section id="services" className="paper-grain">
      <SectionHeading
        eyebrow="Nos services"
        title={
          <>
            Du rêve à la réalité,
            <br />
            on s&apos;occupe de tout
          </>
        }
        className="mb-16"
      />
      <div className="grid gap-5 lg:grid-cols-12">
        {services.map((s, index) => (
          <ServiceCard
            key={s.title}
            {...s}
            featured={index === 0}
            className={index === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}
          />
        ))}
      </div>
    </Section>
  )
}
