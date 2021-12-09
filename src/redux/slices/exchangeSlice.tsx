// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exchange } from '../../types'

interface ExchangeType {
	exchangeInstance: Exchange[]
	date: string
	showAdd: boolean
}

const initialState: ExchangeType = {
	exchangeInstance: [],
	date: '',
	showAdd: true,
}

export const exchangeSlice = createSlice({
	name: 'exchange',
	initialState,
	reducers: {
		initialExchange: (state) => {
			state.exchangeInstance = [
				{
					id: 'INR-USD-0',
					selectedFromCurrency: 'INR',
					selectedFromAmount: 0,
					selectedToAmount: 0,
					selectedToCurrency: 'USD',
					index: 0,
				},
			]
		},
		addExchange: (state) => {
			const obj: Exchange = {
				id: `INR-USD-${state.exchangeInstance.length}`,
				selectedFromCurrency: 'INR',
				selectedFromAmount: 0,
				selectedToAmount: 0,
				selectedToCurrency: 'USD',
				index: state.exchangeInstance.length,
			}
			state.exchangeInstance.push(obj)
			if (state.exchangeInstance.length === 5) {
				state.showAdd = false
			}
		},

		updateExchange: (state, action: PayloadAction<Exchange>) => {
			const { index } = action.payload
			state.exchangeInstance[index] = action.payload
		},

		setDate: (state) => {
			state.date = new Date().toISOString().split('T')[0]
		},

		updateDate: (state, action: PayloadAction<string>) => {
			state.date = action.payload
		},
	},
})

export const {
	initialExchange,
	addExchange,
	updateExchange,
	setDate,
	updateDate,
} = exchangeSlice.actions

export default exchangeSlice.reducer
