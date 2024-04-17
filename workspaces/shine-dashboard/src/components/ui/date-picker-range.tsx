"use client"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { ptBR } from "date-fns/locale"

interface IDatePickerWithRange extends React.HTMLAttributes<HTMLDivElement> {
  classname?: string
  value: {
    from: Date | undefined
    to: Date | undefined
  }
}

export const DatePickerWithRange: React.FC<IDatePickerWithRange> = React.forwardRef(({ className, value, onChange }, ref) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "dd LLL, y")} -{" "}
                  {format(value.to, "dd LLL, y")}
                </>
              ) : (
                format(value.from, "dd LLL, y")
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            onSelect={onChange}
            numberOfMonths={2}
						locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
})

DatePickerWithRange.displayName = 'DatePickerWithRange'