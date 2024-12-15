import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  slug: string
  description: string
  image: string
}

export function CategoryCard({ title, slug, description, image }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="group relative overflow-hidden rounded-lg border p-2 hover:border-foreground"
    >
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading text-xl">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}