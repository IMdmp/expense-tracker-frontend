"use client"

export function useCurrency() {
    return {
        formatCurrency: (amount: number) => {
            return new Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
            }).format(amount)
        },
    }
}
