import { Country, Exchange, RateItem } from './responses'

//Should be fixed
export interface DD {
	items: Country[]
	onSelect?: () => void
	keyValue?: string
	selectedValue?: string
	label?: string
}

export interface ButtonType {
	children: React.ReactNode
	onBtnClick: React.MouseEventHandler<HTMLButtonElement>
	bgColor?: string
}

export enum InputTypes {
	TEXT = 'text',
	NUMBER = 'number',
}

export interface CurrencyItemProps {
	countriesArr: Country[]
	exchangeItem: Exchange
	rates: RateItem[]
}

export enum SwitchStatus {
	FROM = 'from',
	TO = 'to',
}
