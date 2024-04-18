import { format } from "date-fns"

export const formatToCurrency = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
})

export const formatDate = (date: Date) => format(date, "ii/LL/yyyy")