/**
 * Seed content for the home page. Phase 3 replaces these arrays with Payload
 * queries (globals `HomeContent` / collections), keeping the same shapes so the
 * section components don't change.
 */
import type { StaticImageData } from 'next/image'
import { Home, Hammer, Package, type LucideIcon } from 'lucide-react'

import heroHouse from '@/assets/proj-2308.jpg'
import constructionSite from '@/assets/proj-2232.jpg'
import renovation from '@/assets/proj-2242.jpg'
import kit from '@/assets/ar-real7.jpg'
import real2 from '@/assets/proj-2208.jpg'
import real3 from '@/assets/ar-real2.jpg'
import real4 from '@/assets/ar-real4.jpg'
import real6 from '@/assets/ar-real6.jpg'

export const homeImages = { heroHouse, constructionSite, renovation, kit }

export type Service = {
  icon: LucideIcon
  title: string
  desc: string
  img: StaticImageData
  href: string
}

export const services: Service[] = [
  {
    icon: Home,
    title: 'Maison neuve clé en main',
    desc: "AR Construction s'occupe de tout, de la conception à la remise des clés. Le prix soumissionné, c'est le prix payé — garanti.",
    img: heroHouse,
    href: '/maison-neuve',
  },
  {
    icon: Hammer,
    title: 'Rénovation résidentielle et commerciale',
    desc: "Certifié Or par l'APCHQ pour vos projets de rénovation résidentielle et commerciale, du plan au suivi après-vente.",
    img: renovation,
    href: '/renovation',
  },
  {
    icon: Package,
    title: 'Forfait autoconstructeur',
    desc: 'Construisez votre maison en kit avec notre équipe. Matériaux livrés, prêt d’outils sans frais, économies importantes dès la signature.',
    img: kit,
    href: '/autoconstructeur',
  },
]

export type Stat = { num: string; label: string }

export const stats: Stat[] = [
  { num: '700', label: 'Maisons construites' },
  { num: '1 000', label: 'Projets de rénovation' },
  { num: '250', label: 'Terrains disponibles' },
  { num: '50+', label: 'Professionnels qualifiés' },
]

export type Certification = { label: string; sub: string }

export const certifications: Certification[] = [
  { label: 'APCHQ — Certifié Or', sub: 'Résidentiel & commercial' },
  { label: 'ACQ — Certifié Platine', sub: 'Association construction Québec' },
  { label: 'Novoclimat', sub: 'Programme efficacité énergétique' },
  { label: 'RBQ 8271-8974-17', sub: 'Licence entrepreneur' },
]

export const aboutPoints: string[] = [
  'Entrepreneur général en construction et rénovation depuis 2001',
  'Équipe chevronnée de plus de 50 professionnels',
  'Certifié Or APCHQ et Platine ACQ',
  'Plans 3D et visite virtuelle avant construction',
  "Le prix soumissionné, c'est le prix payé — garanti",
]

export type GalleryItem = { img: StaticImageData; alt: string }

export const gallery: GalleryItem[] = [
  { img: heroHouse, alt: 'Maison neuve construite par AR Construction' },
  { img: real2, alt: 'Réalisation résidentielle AR Construction' },
  { img: real3, alt: 'Projet de rénovation AR Construction' },
  { img: real4, alt: 'Construction résidentielle au Saguenay' },
  { img: real6, alt: 'Maison clé en main AR Construction' },
  { img: renovation, alt: 'Rénovation résidentielle AR Construction' },
]
