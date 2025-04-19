"use client"

import { format } from "date-fns"
import {
    ShoppingCart,
    Car,
    Home,
    Film,
    ShoppingBag,
    Heart,
    Plane,
    GraduationCap,
    MoreHorizontal,
    Pencil,
    Trash2,
} from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCurrency } from "@/lib/currency-context"
import type { Expense } from "@/lib/types"

const categoryIcons = {
    food: ShoppingCart,
    transportation: Car,
    utilities: Home,
    entertainment: Film,
    shopping: ShoppingBag,
    health: Heart,
    travel: Plane,
    education: GraduationCap,
    other: MoreHorizontal,
}

interface ExpenseCardProps {
    expense: Expense
    onDelete: (id: string) => void
}

export function ExpenseCard({ expense, onDelete }: ExpenseCardProps) {
    const Icon = categoryIcons[expense.category as keyof typeof categoryIcons] || MoreHorizontal
    const { formatCurrency } = useCurrency()

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="flex items-start p-6">
                    <div
                        className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full mr-4",
                            "bg-primary/10 text-primary",
                        )}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">{expense.title}</h3>
                        <time className="text-sm text-muted-foreground">{format(new Date(expense.date), "PPP")}</time>
                        {expense.notes && <p className="text-sm text-muted-foreground mt-1">{expense.notes}</p>}
                    </div>
                    <div className="ml-auto font-medium">{formatCurrency(expense.amount)}</div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="text-xs text-muted-foreground">
                    Category: {expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link href={`/expenses/edit/${expense.id}`}>
                            <DropdownMenuItem>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit
                            </DropdownMenuItem>
                        </Link>
                        <DropdownMenuItem className="text-destructive focus:text-destructive" onClick={() => onDelete(expense.id)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
    )
}
