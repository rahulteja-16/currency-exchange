import { Exchange, RateItem } from './../types/responses'
export const getConvertedAmount = (
	rates: RateItem[],
	exchangeObj: Exchange
) => {
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
	return newExchangeObj
}
