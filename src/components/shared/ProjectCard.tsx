import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  img: StaticImageData
  alt: string
  className?: string
  /** Aspect ratio applied via inline style, e.g. '16/9' or '4/3'. */
  aspect?: string
  onClick?: () => void
}

export function ProjectCard({ img, alt, className, aspect = '4/3', onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn('overflow-hidden rounded-lg bg-muted cursor-pointer', className)}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={img}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        placeholder="blur"
      />
    </div>
  )
}
