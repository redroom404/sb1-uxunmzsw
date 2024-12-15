import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gig } from "@/types"
import { Clock, Package } from "lucide-react"

interface GigDetailsProps {
  gig: Gig
}

export function GigDetails({ gig }: GigDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={gig.image}
          alt={gig.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{gig.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{gig.deliveryTime} days delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <Package className="h-4 w-4" />
            <span>1 revision included</span>
          </div>
        </div>
      </div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {gig.description}
          </div>
        </TabsContent>
        <TabsContent value="requirements" className="mt-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ul>
              <li>Project requirements and specifications</li>
              <li>Brand guidelines if available</li>
              <li>Reference materials or inspiration</li>
              <li>Target audience information</li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}