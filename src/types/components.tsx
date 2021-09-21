import { Country } from './responses'

//Should be fixed
export interface DD {
	items: Country[]
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSelect?: Function
	keyValue?: string
	selectedValue?: string
	label?: string
}

export interface ButtonType {
	children: React.ReactNode
	onBtnClick: React.MouseEventHandler<HTMLButtonElement>
	bgColor?: string
}
