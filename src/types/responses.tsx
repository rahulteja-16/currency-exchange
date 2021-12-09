import { DeviceTypes, Status } from './variables'
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
	index: number
}

export interface RateItem {
	currency: string
	amount: number
}

export interface MetaType {
	deviceType: DeviceTypes
	isLoading: boolean
	isError: boolean
	errorMessage: string | ''
}

export interface ErrorObjType {
	message: string | ''
	status: boolean
}
