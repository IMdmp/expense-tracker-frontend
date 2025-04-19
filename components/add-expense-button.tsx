"use client"

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

export function AddExpenseButton(){
    return (
        <Link href="/expenses/new">
            <Button className="bg-primary hover:scale-[1.02] hover:bg-primary/90">
                <PlusCircle className="mr-2 h-4 w-4"/>
                Add Expense
            </Button>
        </Link>
    )
}
