import { Status } from './api'
export interface Country {
	id: number
	code: string
	name: string
	active: boolean
}
export interface CountryList {
	countries: Country[]
	status: Status
}
export interface Exchange {
	id: string
	selectedFromCurrency: string
	selectedFromAmount: number
	selectedToCurrency: string
	selectedToAmount: number
	showAdd: boolean
	index: number
}

export interface RateItem {
	currency: string
	amount: number
}
