import { CategoryCard } from "./category-card"

const categories = [
  {
    title: "Graphic Design",
    slug: "graphic-design",
    description: "Logo design, branding, and visual content creation",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description: "Custom websites, web apps, and e-commerce solutions",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "SEO, social media, and content marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
]

export function CategoriesSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Popular Categories
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore our most sought-after service categories
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} {...category} />
        ))}
      </div>
    </section>
  )
}