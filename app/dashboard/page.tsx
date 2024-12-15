import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentOrders } from "@/components/dashboard/recent-orders"
import { EarningsChart } from "@/components/dashboard/earnings-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your freelance business
        </p>
      </div>
      <DashboardStats />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <EarningsChart className="lg:col-span-4" />
        <RecentOrders className="lg:col-span-3" />
      </div>
    </div>
  )
}