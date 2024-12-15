"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Gig } from "@/types"
import { formatPrice } from "@/lib/utils"

interface GigPricingProps {
  gig: Gig
}

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 1,
    deliveryTime: 3,
    revisions: 1,
  },
  {
    id: "standard",
    name: "Standard",
    price: 2,
    deliveryTime: 2,
    revisions: 3,
  },
  {
    id: "premium",
    name: "Premium",
    price: 3,
    deliveryTime: 1,
    revisions: 5,
  },
]

export function GigPricing({ gig }: GigPricingProps) {
  const [selectedPackage, setSelectedPackage] = useState("basic")

  const currentPackage = packages.find((p) => p.id === selectedPackage)
  const price = currentPackage ? gig.price * currentPackage.price : gig.price

  return (
    <Card className="p-6">
      <RadioGroup
        defaultValue="basic"
        onValueChange={setSelectedPackage}
        className="space-y-4"
      >
        {packages.map((pkg) => (
          <div key={pkg.id} className="flex items-center space-x-2">
            <RadioGroupItem value={pkg.id} id={pkg.id} />
            <Label
              htmlFor={pkg.id}
              className="flex flex-1 items-center justify-between"
            >
              <span>{pkg.name}</span>
              <span className="font-bold">{formatPrice(gig.price * pkg.price)}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Service Fee</span>
          <span>{formatPrice(price * 0.1)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{formatPrice(price * 1.1)}</span>
        </div>
        <Button className="w-full">Continue ({currentPackage?.deliveryTime} days delivery)</Button>
      </div>
    </Card>
  )
}