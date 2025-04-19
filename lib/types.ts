export interface Expense {
    id: string
    title: string
    amount: number
    date: string // for ISO
    category: string
    notes?: string
}
