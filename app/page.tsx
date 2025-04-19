import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseList } from "@/components/expense-list"
import {StatsCards} from "@/components/stats-cards";
import {AddExpenseButton} from "@/components/add-expense-button";

export default function Home() {
    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">Expense Tracker</h1>
                <AddExpenseButton/>
            </div>
            <StatsCards/>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Expenses</CardTitle>
                    <CardDescription>Your most recent expenses are shown below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ExpenseList />
                </CardContent>
            </Card>
        </div>
    )
}
