import { configureStore } from '@reduxjs/toolkit'
import countriesSlice from './slices/countriesSlice'
import dateSlice from './slices/dateSlice'
import exchangeSlice from './slices/exchangeSlice'

export const store = configureStore({
	devTools: process.env.NODE_ENV === 'development' ? true : false,
	reducer: {
		date: dateSlice,
		countries: countriesSlice,
		exchanges: exchangeSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
