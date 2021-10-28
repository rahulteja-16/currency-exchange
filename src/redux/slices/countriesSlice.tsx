import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchApi from '../../helpers/fetchApi'
import { Country, ReqHeaders } from '../../types'

interface CountryType {
	countriesArr: Country[]
	symbols: string[]
}

const initialState: CountryType = {
	countriesArr: [],
	symbols: [],
}

export const getCountries = createAsyncThunk(
	'countries/get',
	async (reqObj: ReqHeaders) => {
		const response = await fetchApi(reqObj)
		const countriesArr: Country[] = []
		const symbols: any = []
		response.forEach((item: any) => {
			if (item.active) {
				console.log()
				symbols.push(item.code)
				const obj: Country = {
					active: item.active,
					code: item.code,
					name: `${item.name.substr(
						0,
						item.name.lastIndexOf(' ')
					)} - ${item.name.substr(item.name.lastIndexOf(' '))}`,
					id: parseInt(item.numeric_code),
				}
				countriesArr.push(obj)
			}
		})
		return { symbols, countriesArr }
	}
)

export const countriesSlice = createSlice({
	name: 'country',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder.addCase(getCountries.pending, (state, action) => {})
		builder.addCase(getCountries.fulfilled, (state, actions) => {
			const { countriesArr, symbols } = actions.payload
			state.countriesArr = countriesArr
			state.symbols = symbols
		})
		// builder.addCase(getCountries.rejected, (state, action) => {})
	},
})

// export const { increment, decrement, incrementByAmount } = currencySlice.actions

export default countriesSlice.reducer
