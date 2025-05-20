import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">SmartEnergy</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" asChild><Link href="/">Home</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/analytics">Analytics</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/about">About</Link></Button></li>
            <li><Button variant="ghost" asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

