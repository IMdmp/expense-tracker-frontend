import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseList } from "@/components/expense-list"
import { ExpenseFilters } from "@/components/expense-filters"

export default function TransactionPage() {
    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">All Expenses</h1>
                <Link href="/expenses/new">
                    <Button className="bg-primary hover:bg-primary/90">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Expense
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Expenses</CardTitle>
                    <CardDescription>View and manage all your expenses.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ExpenseFilters />
                    <ExpenseList />
                </CardContent>
            </Card>
        </div>
    )
}
