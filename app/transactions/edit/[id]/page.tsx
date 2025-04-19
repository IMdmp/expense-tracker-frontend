import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExpenseForm } from "@/components/expense-form"
import { getExpenseById } from "@/lib/actions"

export default async function EditExpensePage({ params }: { params: { id: string } }) {
    const expense = await getExpenseById(params.id)

    if (!expense) {
        notFound()
    }

    // Convert Date object to ISO string for serialization
    const serializedExpense = {
        ...expense,
        date: expense.date,
    }

    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Expense</CardTitle>
                    <CardDescription>Update the details of your expense.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ExpenseForm expense={serializedExpense} isEditing />
                </CardContent>
            </Card>
        </div>
    )
}
