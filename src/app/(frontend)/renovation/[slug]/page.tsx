import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DetailContentPage } from '@/components/sections/DetailContentPage'
import { findPage, renovationSubpages } from '@/lib/source-content'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return renovationSubpages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = findPage(renovationSubpages, slug)

  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function RenovationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = findPage(renovationSubpages, slug)

  if (!page) notFound()

  return <DetailContentPage page={page} />
}
