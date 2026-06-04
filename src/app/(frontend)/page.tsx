import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { RealisationsGallery } from '@/components/sections/RealisationsGallery'
import { TerrainsCta } from '@/components/sections/TerrainsCta'
import { CertificationsRow } from '@/components/sections/CertificationsRow'
import { CareersCta } from '@/components/sections/CareersCta'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsBar />
      <ServicesGrid />
      <RealisationsGallery />
      <TerrainsCta />
      <CertificationsRow />
      <CareersCta />
      <ContactSection />
    </>
  )
}
