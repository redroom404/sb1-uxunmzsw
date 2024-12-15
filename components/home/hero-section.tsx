import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Find the perfect freelance services for your business
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Connect with talented freelancers, get work done, and grow your business with Paruhwaktu
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search services..." />
          <Button type="submit">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}