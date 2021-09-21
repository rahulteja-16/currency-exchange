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
}

export interface Store {
	date: string
	countries: Country[]
	rates: Record<string, never>
	exchanges: Exchange[]
	status: Status
}

export interface Action {
	[extraProps: string]: any
}
