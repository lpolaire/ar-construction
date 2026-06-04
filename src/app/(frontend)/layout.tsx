import type { Metadata } from 'next'
import { Barlow_Condensed, Manrope } from 'next/font/google'
import { Toaster } from 'sonner'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE } from '@/lib/constants'
import './styles.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ar-construction.ca'),
  title: {
    default: `${SITE.name} — Constructeur de maisons neuves au Saguenay`,
    template: `%s · ${SITE.name}`,
  },
  description:
    'Entrepreneur général au Saguenay-Lac-Saint-Jean depuis 2001. Maisons neuves clé en main, rénovation, autoconstruction et terrains. Certifié Or APCHQ.',
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: SITE.name,
  },
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${manrope.variable} ${barlowCondensed.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
