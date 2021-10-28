import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { StaticText } from '../../constants'
import { updateExchange } from '../../redux/slices/exchangeSlice'
import { Country, Exchange, RateItem } from '../../types'
import Switch from '../Switch'
import { InputWrapper, ItemWrapper, SectionWrapper } from './styles'

// eslint-disable-next-line import/no-unresolved
const DropDown = React.lazy(() => import('shared/DropDown'))

declare interface CurrencyItemProps {
	countriesArr: Country[]
	exchangeItem: Exchange
	rates: RateItem[]
}

enum SwitchStatus {
	FROM,
	TO,
}

const CurrencyItem = ({
	countriesArr,
	exchangeItem,
	rates,
}: CurrencyItemProps): ReactElement => {
	const dispatch = useDispatch()
	const fromCountries = [...countriesArr].filter(
		(item) => item.code !== exchangeItem.selectedFromCurrency
	)
	const toCountries = [...countriesArr].filter(
		(item) => item.code !== exchangeItem.selectedToCurrency
	)

	const updateAmount = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: SwitchStatus
	) => {
		const obj: Exchange = { ...exchangeItem }
		if (type === SwitchStatus.FROM) {
			obj.selectedFromAmount = +e.target.value
			const baseRates = rates.filter(
				(base) => base.currency === obj.selectedFromCurrency
			)
			if (baseRates.length > 0) {
				const currencyBase = baseRates[0].amount
				const inEuros = obj.selectedFromAmount / currencyBase
				const toRates = rates.filter(
					(rates) => rates.currency === obj.selectedToCurrency
				)
				const res = inEuros * toRates[0].amount
				obj.selectedToAmount = Number(res.toFixed(2))
			}
		} else if (type === SwitchStatus.TO) {
			obj.selectedToAmount = +e.target.value
		}
		console.log(obj)
		dispatch(updateExchange(obj))
	}

	const updateCountry = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: SwitchStatus
	) => {
		const obj: Exchange = { ...exchangeItem }
		if (type === SwitchStatus.FROM) {
			obj.id = `${e.target.value}-${obj.selectedToCurrency}-${obj.index}`
			obj.selectedFromCurrency = e.target.value
		} else if (type === SwitchStatus.TO) {
			obj.id = `${obj.selectedFromAmount}-${e.target.value}-${obj.index}`
			obj.selectedToCurrency = e.target.value
		}
		dispatch(updateExchange(obj))
	}

	return (
		<React.Suspense fallback="Loading...">
			<SectionWrapper>
				<ItemWrapper>
					<DropDown
						onSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
							updateCountry(e, SwitchStatus.FROM)
						}
						selectedValue={exchangeItem.selectedFromCurrency}
						items={toCountries}
						keyValue={exchangeItem.selectedFromCurrency}
						label="From"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						type="number"
						min="0"
						value={exchangeItem.selectedFromAmount}
						onChange={(e) => updateAmount(e, SwitchStatus.FROM)}
					/>
				</ItemWrapper>
				<Switch />
				<ItemWrapper>
					<DropDown
						onSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
							updateCountry(e, SwitchStatus.TO)
						}
						selectedValue={exchangeItem.selectedToCurrency}
						items={fromCountries}
						keyValue={exchangeItem.selectedFromCurrency}
						label="To"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						type="number"
						min="0"
						value={exchangeItem.selectedToAmount}
						onChange={(e) => updateAmount(e, SwitchStatus.TO)}
						disabled
					/>
				</ItemWrapper>
			</SectionWrapper>
		</React.Suspense>
	)
}

export default CurrencyItem
