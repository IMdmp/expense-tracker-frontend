import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseForm } from "@/components/expense-form"

export default function NewExpensePage() {
    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Expense</CardTitle>
                    <CardDescription>Enter the details of your new expense.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ExpenseForm />
                </CardContent>
            </Card>
        </div>
    )
}
