import React, { ReactElement, useState } from 'react'
import { StaticText } from '../../constants'
import { Country, Exchange } from '../../types'
import Switch from '../Switch'
import { InputWrapper, ItemWrapper, SectionWrapper } from './styles'

// eslint-disable-next-line import/no-unresolved
const DropDown = React.lazy(() => import('shared/DropDown'))

declare interface CurrencyItemProps {
	countriesArr: Country[]
	exchangeItem: Exchange
}

const CurrencyItem = ({
	countriesArr,
	exchangeItem,
}: CurrencyItemProps): ReactElement => {
	const fromCountries = [...countriesArr].filter(
		(item) => item.code !== exchangeItem.selectedFromCurrency
	)
	const toCountries = [...countriesArr].filter(
		(item) => item.code !== exchangeItem.selectedToCurrency
	)
	const [fromAmount, SetFromAmount] = useState<number>(
		exchangeItem.selectedFromAmount
	)
	const [toAmount, SetToAmount] = useState<number>(
		exchangeItem.selectedToAmount
	)

	const updateFromAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		SetFromAmount(+e.target.value)
	}
	const updateToAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		SetToAmount(+e.target.value)
	}

	const updateFromCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
	}

	return (
		<React.Suspense fallback="Loading...">
			<SectionWrapper>
				<ItemWrapper>
					<DropDown
						onSelect={updateFromCurrency}
						selectedValue={exchangeItem.selectedFromCurrency}
						items={toCountries}
						keyValue={exchangeItem.selectedFromCurrency}
						label="From"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						type="number"
						min="0"
						value={fromAmount}
						onChange={updateFromAmount}
					/>
				</ItemWrapper>
				<Switch />
				<ItemWrapper>
					<DropDown
						onSelect={() => {
							console.log('test')
						}}
						selectedValue={exchangeItem.selectedToCurrency}
						items={fromCountries}
						keyValue={exchangeItem.selectedFromCurrency}
						label="To"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						type="number"
						min="0"
						value={toAmount}
						onChange={updateToAmount}
					/>
				</ItemWrapper>
			</SectionWrapper>
		</React.Suspense>
	)
}

export default CurrencyItem
