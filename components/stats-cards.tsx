"use client"

import { useState, useEffect } from "react"
import { DollarSign, CreditCard, TrendingDown, TrendingUp } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { getExpenseStats } from "@/lib/actions"
import { useCurrency } from "@/lib/currency-context"

interface ExpenseStats {
    totalSpent: number
    averageExpense: number
    largestExpense: number
    expensesThisMonth: number
}

export function StatsCards() {
    const [stats, setStats] = useState<ExpenseStats | null>(null)
    const [loading, setLoading] = useState(true)
    const { formatCurrency } = useCurrency()

    useEffect(() => {
        async function loadStats() {
            try {
                const data = await getExpenseStats()
                setStats(data)
            } catch (error) {
                console.error("Failed to load expense stats:", error)
            } finally {
                setLoading(false)
            }
        }

        loadStats()
    }, [])

    if (loading) {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-7 w-24 mb-1" />
                            <Skeleton className="h-4 w-32" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    // Fallback data if no stats are available
    const displayStats = stats || {
        totalSpent: 0,
        averageExpense: 0,
        largestExpense: 0,
        expensesThisMonth: 0,
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                    <DollarSign className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(displayStats.totalSpent)}</div>
                    <p className="text-xs text-muted-foreground">All time expenses</p>
                </CardContent>
            </Card>
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Expense</CardTitle>
                    <TrendingDown className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(displayStats.averageExpense)}</div>
                    <p className="text-xs text-muted-foreground">Per transaction</p>
                </CardContent>
            </Card>
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Largest Expense</CardTitle>
                    <TrendingUp className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(displayStats.largestExpense)}</div>
                    <p className="text-xs text-muted-foreground">Single transaction</p>
                </CardContent>
            </Card>
            <Card className="transition-transform hover:scale-[1.02] hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">This Month</CardTitle>
                    <CreditCard className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(displayStats.expensesThisMonth)}</div>
                    <p className="text-xs text-muted-foreground">Current month total</p>
                </CardContent>
            </Card>
        </div>
    )
}
