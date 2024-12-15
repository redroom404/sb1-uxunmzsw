import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const orders = [
  {
    id: "1",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      image: "https://github.com/shadcn.png",
    },
    status: "in_progress",
    total: "$250.00",
  },
  {
    id: "2",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      image: "https://github.com/shadcn.png",
    },
    status: "completed",
    total: "$450.00",
  },
  {
    id: "3",
    customer: {
      name: "Mike Johnson",
      email: "mike@example.com",
      image: "https://github.com/shadcn.png",
    },
    status: "in_progress",
    total: "$150.00",
  },
]

const statusStyles = {
  in_progress: "bg-blue-500/10 text-blue-500",
  completed: "bg-green-500/10 text-green-500",
  cancelled: "bg-red-500/10 text-red-500",
}

interface RecentOrdersProps {
  className?: string
}

export function RecentOrders({ className }: RecentOrdersProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={order.customer.image} alt="Avatar" />
                <AvatarFallback>
                  {order.customer.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {order.customer.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {order.customer.email}
                </p>
              </div>
              <div className="ml-auto font-medium">
                <Badge
                  variant="secondary"
                  className={statusStyles[order.status as keyof typeof statusStyles]}
                >
                  {order.status.replace("_", " ")}
                </Badge>
              </div>
              <div className="ml-4 font-medium">{order.total}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}