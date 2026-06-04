import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DetailContentPage } from '@/components/sections/DetailContentPage'
import {
  companySubpages,
  constructionSubpages,
  findPage,
  type DetailPageContent,
} from '@/lib/source-content'

const pages = [...constructionSubpages, ...companySubpages]

type PageProps = {
  params: Promise<{ slug: string }>
}

function getPage(slug: string): DetailPageContent | undefined {
  return findPage(pages, slug)
}

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getPage(slug)

  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
  }
}

export default async function DynamicInfoPage({ params }: PageProps) {
  const { slug } = await params
  const page = getPage(slug)

  if (!page) notFound()

  return <DetailContentPage page={page} />
}
