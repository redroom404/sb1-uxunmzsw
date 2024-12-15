import { notFound } from "next/navigation"
import { gigs, users } from "@/lib/data"
import { GigDetails } from "@/components/gigs/gig-details"
import { GigPricing } from "@/components/gigs/gig-pricing"
import { GigReviews } from "@/components/gigs/gig-reviews"
import { SellerCard } from "@/components/gigs/seller-card"

interface GigPageProps {
  params: {
    id: string
  }
}

export default function GigPage({ params }: GigPageProps) {
  const gig = gigs.find((g) => g.id === params.id)
  
  if (!gig) {
    notFound()
  }

  const seller = users.find((u) => u.id === gig.sellerId)
  
  if (!seller) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div className="space-y-8">
          <GigDetails gig={gig} />
          <GigReviews gig={gig} />
        </div>
        <div className="space-y-6">
          <GigPricing gig={gig} />
          <SellerCard seller={seller} />
        </div>
      </div>
    </div>
  )
}