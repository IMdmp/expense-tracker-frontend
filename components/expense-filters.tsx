"use client"

import { useState } from "react"
import { CalendarIcon, Filter } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export function ExpenseFilters() {
    const [date, setDate] = useState<Date>()
    const [category, setCategory] = useState<string>("")
    const [sortBy, setSortBy] = useState<string>("date-desc")

    return (
        <div className="flex flex-col sm:flex-row gap-4">
        <Popover>
            <PopoverTrigger asChild>
        <Button
            variant={"outline"}
    className={cn("w-full sm:w-auto justify-start text-left font-normal", !date && "text-muted-foreground")}
>
    <CalendarIcon className="mr-2 h-4 w-4" />
        {date ? format(date, "PPP") : <span>Filter by date</span>}
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
        </Popover>

        <Select value={category} onValueChange={setCategory}>
    <SelectTrigger className="w-full sm:w-[180px]">
    <SelectValue placeholder="All categories" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="all">All categories</SelectItem>
    <SelectItem value="food">Food & Dining</SelectItem>
        <SelectItem value="transportation">Transportation</SelectItem>
        <SelectItem value="utilities">Utilities</SelectItem>
        <SelectItem value="entertainment">Entertainment</SelectItem>
        <SelectItem value="shopping">Shopping</SelectItem>
        <SelectItem value="health">Health & Medical</SelectItem>
        <SelectItem value="travel">Travel</SelectItem>
        <SelectItem value="education">Education</SelectItem>
        <SelectItem value="other">Other</SelectItem>
        </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
    <SelectTrigger className="w-full sm:w-[180px]">
    <SelectValue placeholder="Sort by" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="date-desc">Newest first</SelectItem>
    <SelectItem value="date-asc">Oldest first</SelectItem>
    <SelectItem value="amount-desc">Highest amount</SelectItem>
    <SelectItem value="amount-asc">Lowest amount</SelectItem>
    </SelectContent>
    </Select>

    <Button variant="outline" size="icon" className="ml-auto">
    <Filter className="h-4 w-4" />
    <span className="sr-only">Filter</span>
        </Button>
        </div>
)
}
