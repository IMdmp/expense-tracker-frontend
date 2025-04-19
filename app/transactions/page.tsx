import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseList } from "@/components/expense-list"
import { ExpenseFilters } from "@/components/expense-filters"
import {AddExpenseButton} from "@/components/add-expense-button";

export default function TransactionPage() {
    return (
        <div className="container mx-auto max-w-7xl py-16 space-y-10">
            <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">All Expenses</h1>
            <AddExpenseButton/>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Expenses</CardTitle>
                    <CardDescription>View and manage all your expenses.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ExpenseFilters/>
                    <ExpenseList/>
                </CardContent>
            </Card>
        </div>
    )
}
