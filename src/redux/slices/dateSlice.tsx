import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DateType {
	date: string
}

const initialState: DateType = {
	date: '',
}

export const dateSlice = createSlice({
	name: 'date',
	initialState,
	reducers: {
		setDate: (state) => {
			state.date = new Date().toISOString().split('T')[0]
		},

		updateDate: (state, action: PayloadAction<string>) => {
			state.date = action.payload
		},
	},
})

export const { setDate, updateDate } = dateSlice.actions

export default dateSlice.reducer
