import { createSlice } from '@reduxjs/toolkit'
import { Exchange } from '../../types'

interface ExchangeType {
	exchanges: Exchange[]
}

const initialState: ExchangeType = {
	exchanges: [],
}

export const exchangeSlice = createSlice({
	name: 'exchange',
	initialState,
	reducers: {
		initialExchange: (state) => {
			state.exchanges = [
				{
					id: 'INR-USD-0',
					selectedFromCurrency: 'INR',
					selectedFromAmount: 0,
					selectedToAmount: 0,
					selectedToCurrency: 'USD',
					showAdd: true,
				},
			]
		},
		addExchange: (state) => {
			const obj = {
				id: `INR-USD-${state.exchanges.length}`,
				selectedFromCurrency: 'INR',
				selectedFromAmount: 0,
				selectedToAmount: 0,
				selectedToCurrency: 'USD',
				showAdd: true,
			}
			state.exchanges.push(obj)
		},
	},
})

export const { initialExchange, addExchange } = exchangeSlice.actions

export default exchangeSlice.reducer
