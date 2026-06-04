import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DetailContentPage } from '@/components/sections/DetailContentPage'
import { findPage, terrainSubpages } from '@/lib/source-content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return terrainSubpages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = findPage(terrainSubpages, slug)

  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function TerrainDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = findPage(terrainSubpages, slug)

  if (!page) notFound()

  return <DetailContentPage page={page} />
}
