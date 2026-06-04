import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DetailContentPage } from '@/components/sections/DetailContentPage'
import { findPage, realisationSubpages } from '@/lib/source-content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return realisationSubpages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = findPage(realisationSubpages, slug)

  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function RealisationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = findPage(realisationSubpages, slug)

  if (!page) notFound()

  return <DetailContentPage page={page} galleryLimit={36} />
}
