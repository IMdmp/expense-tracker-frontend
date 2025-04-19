"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { ExpenseCard } from "@/components/expense-card"
import { Skeleton } from "@/components/ui/skeleton"
import { getExpenses, deleteExpense } from "@/lib/actions"
import type { Expense } from "@/lib/types"

export function ExpenseList() {
    const router = useRouter()
    const [expenses, setExpenses] = useState<Expense[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadExpenses() {
            try {
                const data = await getExpenses()
                setExpenses(data)
            } catch (error) {
                console.error("Failed to load expenses:", error)
            } finally {
                setLoading(false)
            }
        }

        loadExpenses()
    }, [])

    const handleDelete = async (id: string) => {
        try {
            await deleteExpense(id)
            setExpenses(expenses.filter((expense) => expense.id !== id))
            router.refresh()
        } catch (error) {
            console.error("Failed to delete expense:", error)
        }
    }

    if (loading) {
        return (
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 p-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (expenses.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-muted-foreground">No expenses found. Add your first expense!</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {expenses.map((expense) => (
                <ExpenseCard key={expense.id} expense={expense} onDelete={handleDelete} />
            ))}
        </div>
    )
}
