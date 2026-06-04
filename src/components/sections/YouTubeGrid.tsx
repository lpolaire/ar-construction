import { YoutubeIcon } from '@/components/shared/BrandIcons'

type Video = {
  id: string
  title: string
  person: string
  description: string
}

type YouTubeGridProps = {
  videos: readonly Video[]
}

export function YouTubeGrid({ videos }: YouTubeGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {videos.map((video) => (
        <article
          key={video.id}
          className="overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)]"
        >
          <div className="relative aspect-video bg-foreground">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-accent">
              <YoutubeIcon size={15} />
              {video.person}
            </div>
            <h3 className="font-heading text-xl font-bold leading-tight text-foreground">
              {video.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {video.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
