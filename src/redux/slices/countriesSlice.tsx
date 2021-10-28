import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import fetchApi from '../../helpers/fetchApi'
import { Country, RateItem, ReqHeaders } from '../../types'

interface CountryType {
	countriesArr: Country[]
	symbols: string[]
	rates: RateItem[]
}

const initialState: CountryType = {
	countriesArr: [],
	symbols: [],
	rates: [],
}

export const getCountries = createAsyncThunk(
	'countries/get',
	async (reqObj: ReqHeaders) => {
		const response = await fetchApi(reqObj)
		const countriesArr: Country[] = []
		const symbols: string[] = []
		response.forEach((item: any) => {
			if (item.active) {
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

export const getRates = createAsyncThunk(
	'rates/get',
	async (reqObj: ReqHeaders) => {
		const conversionRates: RateItem[] = []
		const ratesResponse = await fetchApi(reqObj)
		ratesResponse.forEach((rateItem: any) => {
			const obj = {
				currency: rateItem.quote_currency,
				amount: rateItem.quote,
			}
			conversionRates.push(obj)
		})
		return { conversionRates }
	}
)

export const countriesSlice = createSlice({
	name: 'country',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCountries.fulfilled, (state, actions) => {
			const { countriesArr, symbols } = actions.payload
			state.countriesArr = countriesArr
			state.symbols = symbols
		}),
			builder.addCase(getRates.fulfilled, (state, actions) => {
				const { conversionRates } = actions.payload
				state.rates = conversionRates
			})
	},
})

export default countriesSlice.reducer
