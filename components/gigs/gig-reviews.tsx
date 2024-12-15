import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gig } from "@/types"

interface GigReviewsProps {
  gig: Gig
}

const reviews = [
  { rating: 5, percentage: 75 },
  { rating: 4, percentage: 15 },
  { rating: 3, percentage: 7 },
  { rating: 2, percentage: 2 },
  { rating: 1, percentage: 1 },
]

export function GigReviews({ gig }: GigReviewsProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Reviews</h2>
      <div className="mt-4 flex items-center gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{gig.rating}</div>
          <div className="flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(gig.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {gig.reviews} reviews
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {reviews.map((review) => (
            <div key={review.rating} className="flex items-center gap-2">
              <div className="w-12 text-sm">{review.rating} stars</div>
              <Progress value={review.percentage} className="h-2" />
              <div className="w-12 text-sm text-muted-foreground">
                {review.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}