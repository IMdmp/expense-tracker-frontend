import Link from "next/link"
import { Home, BarChart, PlusCircle, Settings, PieChart } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="border-b">
            <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <BarChart className="h-6 w-6 text-primary" />
                    <span>Expense Tracker</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            <span className="hidden sm:inline">Dashboard</span>
                        </Button>
                    </Link>
                    <Link href="/transactions">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <BarChart className="h-4 w-4" />
                            <span className="hidden sm:inline">Expenses</span>
                        </Button>
                    </Link>
                    <Link href="/transactions/new">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2">
                            <PlusCircle className="h-4 w-4" />
                            <span className="hidden sm:inline">New Expense</span>
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
