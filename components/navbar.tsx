"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Clock className="h-6 w-6" />
            <span className="font-bold">Paruhwaktu</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-6">
          <Link
            href="/categories"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/categories' ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Categories
          </Link>
          <Link
            href="/gigs"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/gigs' ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            Explore
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Join</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}