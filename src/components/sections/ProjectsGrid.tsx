'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lightbox } from '../shared/Lightbox'
import proj2308 from '@/assets/proj-2308.jpg'
import proj2242 from '@/assets/proj-2242.jpg'
import proj2232 from '@/assets/proj-2232.jpg'
import proj2208 from '@/assets/proj-2208.jpg'
import arReal2 from '@/assets/ar-real2.jpg'
import arReal3 from '@/assets/ar-real3.jpg'
import arReal4 from '@/assets/ar-real4.jpg'
import arReal6 from '@/assets/ar-real6.jpg'
import arReal7 from '@/assets/ar-real7.jpg'
import arReal8 from '@/assets/ar-real8.jpg'
import arReal9 from '@/assets/ar-real9.jpg'
import arMaison1 from '@/assets/ar-maison1.jpg'
import arMaison2 from '@/assets/ar-maison2.jpg'

type Category =
  | 'Tous'
  | 'Plain-pied'
  | 'À niveaux'
  | 'Deux étages'
  | 'Jumelé'
  | 'Rénovation'
  | 'Commercial'

const categories: Category[] = [
  'Tous',
  'Plain-pied',
  'À niveaux',
  'Deux étages',
  'Jumelé',
  'Rénovation',
  'Commercial',
]

const projects = [
  { id: '23-08', cat: 'Plain-pied', img: proj2308, title: 'Maison plain-pied 23-08', year: '2023' },
  { id: '22-42', cat: 'Rénovation', img: proj2242, title: 'Rénovation 22-42', year: '2022' },
  {
    id: '22-32',
    cat: 'Deux étages',
    img: proj2232,
    title: 'Maison deux étages 22-32',
    year: '2022',
  },
  { id: '22-08', cat: 'Plain-pied', img: proj2208, title: 'Maison plain-pied 22-08', year: '2022' },
  { id: '22-41', cat: 'Plain-pied', img: arReal6, title: 'Maison plain-pied 22-41', year: '2022' },
  { id: '22-40', cat: 'À niveaux', img: arMaison1, title: 'Maison à niveaux 22-40', year: '2022' },
  {
    id: '22-38',
    cat: 'Deux étages',
    img: arReal7,
    title: 'Maison deux étages 22-38',
    year: '2022',
  },
  {
    id: '22-35',
    cat: 'Rénovation',
    img: arReal8,
    title: 'Rénovation commerciale 22-35',
    year: '2022',
  },
  { id: '22-34', cat: 'Jumelé', img: arReal9, title: 'Jumelé 22-34', year: '2022' },
  { id: '22-06', cat: 'Jumelé', img: arReal4, title: 'Jumelé 22-06', year: '2022' },
  { id: '22-03', cat: 'Plain-pied', img: arReal3, title: 'Maison plain-pied 22-03', year: '2022' },
  { id: '22-44', cat: 'À niveaux', img: arReal2, title: 'Maison à niveaux 22-44', year: '2022' },
  {
    id: 'com-01',
    cat: 'Commercial',
    img: arMaison2,
    title: 'Projet commercial multilogement',
    year: '2022',
  },
] as const

export function ProjectsGrid() {
  const [active, setActive] = useState<Category>('Tous')
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1)
  const filtered = active === 'Tous' ? projects : projects.filter((p) => p.cat === active)

  return (
    <>
      {/* Filtre */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-all duration-200 active:translate-y-px ${
              active === cat
                ? 'bg-primary text-primary-foreground shadow-[var(--shadow-card)]'
                : 'bg-card text-foreground hover:bg-primary/10 hover:text-primary border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            onClick={() => setLightboxIndex(i)}
            className={`overflow-hidden rounded-lg group cursor-pointer shadow-[var(--shadow-card)] ${
              i === 0 && active === 'Tous' ? 'sm:col-span-2' : ''
            }`}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: i === 0 && active === 'Tous' ? '16/7' : '4/3' }}
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-5">
                <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-xs text-accent font-semibold">{p.cat}</div>
                  <div className="text-primary-foreground font-heading font-bold text-base mt-1">
                    {p.title}
                  </div>
                  <div className="text-primary-foreground/70 text-xs">{p.year}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={filtered.map((p) => ({
            src: p.img,
            alt: p.title,
            title: `${p.title} (${p.cat} - ${p.year})`,
          }))}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(-1)}
          onChangeIndex={setLightboxIndex}
        />
      )}
    </>
  )
}
