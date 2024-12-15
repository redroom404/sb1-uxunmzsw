import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { User } from "@/types"
import { Star, MessageSquare } from "lucide-react"

interface SellerCardProps {
  seller: User
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={seller.image || "https://github.com/shadcn.png"}
            alt={seller.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Link
            href={`/users/${seller.id}`}
            className="font-semibold hover:underline"
          >
            {seller.name}
          </Link>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{seller.rating}</span>
            <span>({seller.totalReviews} reviews)</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        {seller.bio}
      </div>
      <div className="mt-4 space-y-2">
        <Button className="w-full" variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Contact Me
        </Button>
      </div>
    </Card>
  )
}