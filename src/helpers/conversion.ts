import { Exchange, RateItem } from './../types/responses'
export const getConvertedAmount = (
	rates: RateItem[],
	exchangeObj: Exchange
) => {
	/**
	 * 
	 * id: "INR-USD-0"
		index: 0
		selectedFromAmount: 10
		selectedFromCurrency: "INR"
		selectedToAmount: 0.01
		selectedToCurrency: "USD"
	 * 
	 */
	const newExchangeObj = { ...exchangeObj }
	const baseRates = rates.filter(
		(base) => base.currency === exchangeObj.selectedFromCurrency
	)
	const currencyBase = baseRates[0].amount
	const inEuros = exchangeObj.selectedFromAmount / currencyBase
	const toRates = rates.filter(
		(rates) => rates.currency === exchangeObj.selectedToCurrency
	)
	const convertedAmount = inEuros * toRates[0].amount
	newExchangeObj.selectedToAmount = Number(convertedAmount.toFixed(2))

	/**
	 * 	id: "INR-USD-0"
		index: 0
		selectedFromAmount: 100
		selectedFromCurrency: "INR"
		selectedToAmount: 0.13
		selectedToCurrency: "USD"
	 * 
	 */
	return newExchangeObj
}
