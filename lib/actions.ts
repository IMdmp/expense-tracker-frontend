"use server"

import { revalidatePath } from "next/cache"
import type { Expense } from "@/lib/types"

// Mock data for initial state
const mockExpenses: Expense[] = [
    {
        id: "1",
        title: "Grocery Shopping",
        amount: 2500.75,
        date: new Date().toISOString(), // Store as ISO string
        category: "food",
        notes: "Weekly groceries from SM Supermarket",
    },
    {
        id: "2",
        title: "Grab Ride",
        amount: 350.5,
        date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
        category: "transportation",
        notes: "",
    },
    {
        id: "3",
        title: "PLDT Internet Bill",
        amount: 1899.99,
        date: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        category: "utilities",
        notes: "Monthly internet subscription",
    },
    {
        id: "4",
        title: "Movie Night",
        amount: 800.0,
        date: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        category: "entertainment",
        notes: "SM Cinema with friends",
    },
    {
        id: "5",
        title: "New Shoes",
        amount: 3200.0,
        date: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
        category: "shopping",
        notes: "Nike running shoes",
    },
    {
        id: "6",
        title: "Doctor's Appointment",
        amount: 1500.0,
        date: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
        category: "health",
        notes: "Annual checkup",
    },
    {
        id: "7",
        title: "Meralco Electricity",
        amount: 3500.0,
        date: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
        category: "utilities",
        notes: "Monthly electricity bill",
    },
]

// In-memory store for expenses
let expenses = [...mockExpenses]

export async function createExpense(data: Omit<Expense, "id">) {
    try {
        const newExpense: Expense = {
            id: Math.random().toString(36).substring(2, 9), // Generate a random ID
            ...data,
            // Ensure date is stored as ISO string
            date: data.date
        }

        expenses.push(newExpense)

        revalidatePath("/expenses")
        revalidatePath("/")
        return newExpense
    } catch (error) {
        console.error("Failed to create expense:", error)
        throw new Error("Failed to create expense")
    }
}

export async function getExpenses() {
    try {
        // Return all expenses
        return expenses
    } catch (error) {
        console.error("Failed to get expenses:", error)
        throw new Error("Failed to get expenses")
    }
}

export async function deleteExpense(id: string) {
    try {
        // Filter out the expense with the given ID
        expenses = expenses.filter((expense) => expense.id !== id)

        revalidatePath("/expenses")
        revalidatePath("/")
        return { success: true }
    } catch (error) {
        console.error("Failed to delete expense:", error)
        throw new Error("Failed to delete expense")
    }
}

