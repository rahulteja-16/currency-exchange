import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchApi from '../../helpers/fetchApi'
import { Country, ReqHeaders } from '../../types'

interface CountryType {
	countries: Country[]
	symbols: string[]
}

const initialState: CountryType = {
	countries: [],
	symbols: [],
}

export const getCountries = createAsyncThunk(
	'countries/get',
	async (reqObj: ReqHeaders) => {
		const response = await fetchApi(reqObj)
		const countries: Country[] = []
		const symbols: any = []
		response.forEach((item: any) => {
			if (item.active) {
				symbols.push(item.code)
				const obj: Country = {
					active: item.active,
					code: item.code,
					name: `${item.name} - ${item.code}`,
					id: parseInt(item.numeric_code),
				}
				countries.push(obj)
			}
		})
		return { symbols, countries }
	}
)

export const countriesSlice = createSlice({
	name: 'country',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addCase(getCountries.pending, (state, action) => {})
		builder.addCase(getCountries.fulfilled, (state, actions) => {
			const { countries, symbols } = actions.payload
			state.countries = countries
			state.symbols = symbols
		})
		// builder.addCase(getCountries.rejected, (state, action) => {})
	},
})

// export const { increment, decrement, incrementByAmount } = currencySlice.actions

export default countriesSlice.reducer
