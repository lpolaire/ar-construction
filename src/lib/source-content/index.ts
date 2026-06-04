export type { DetailPageContent, DetailSection, SiteImage } from './types'
export { beforeAfterPairs, heroFrom, sourceImages } from './media'
export { constructionSubpages } from './construction'
export { renovationSubpages } from './renovation'
export { realisationSubpages } from './realisations'
export { terrainSubpages } from './terrains'
export { companySubpages } from './company'
export { testimonialVideos } from './testimonials'

import type { DetailPageContent } from './types'

export function findPage(collection: DetailPageContent[], slug: string) {
  return collection.find((page) => page.slug === slug)
}
