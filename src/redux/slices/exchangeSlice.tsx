// eslint-disable-next-line import/named
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
					index: 0,
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
				index: state.exchanges.length,
			}
			state.exchanges.push(obj)
		},

		updateExchange: (state, action: PayloadAction<Exchange>) => {
			const { index } = action.payload
			state.exchanges[index] = action.payload
		},
	},
})

export const { initialExchange, addExchange, updateExchange } =
	exchangeSlice.actions

export default exchangeSlice.reducer
