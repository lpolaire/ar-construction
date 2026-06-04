import { MapPin, Phone, Mail } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ContactForm } from '@/components/forms/ContactForm'
import { SITE } from '@/lib/constants'

const contactItems = [
  { icon: MapPin, label: 'Adresse', value: SITE.address, href: undefined },
  { icon: Phone, label: 'Téléphone', value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: 'Courriel', value: SITE.email, href: SITE.emailHref },
]

export function ContactSection() {
  return (
    <Section id="contact" containerClassName="grid md:grid-cols-2 gap-16 lg:gap-24">
      <div>
        <SectionHeading eyebrow="Contact" title="Demandez votre soumission gratuite" />
        <p className="text-muted-foreground text-base leading-relaxed mt-7 mb-10 text-pretty">
          Notre équipe vous répond rapidement pour discuter de votre projet de construction ou de
          rénovation. N&apos;hésitez pas à nous contacter pour une soumission sans engagement.
        </p>
        <ul className="space-y-5">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-md shrink-0">
                <Icon size={17} />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{label}</div>
                {href ? (
                  <a
                    href={href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <div className="text-muted-foreground text-sm">{value}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ContactForm />
    </Section>
  )
}
