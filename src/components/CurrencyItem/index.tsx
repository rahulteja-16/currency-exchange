import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { StaticText } from '../../constants'
import { getConvertedAmount } from '../../helpers/conversion'
import { updateExchange } from '../../redux/slices/exchangeSlice'
import {
	CurrencyItemProps,
	Exchange,
	InputTypes,
	SwitchStatus,
} from '../../types'
import Switch from '../Switch'
import { InputWrapper, ItemWrapper, SectionWrapper } from './styles'

// eslint-disable-next-line import/no-unresolved
const DropDown = React.lazy(() => import('componentLibrary/DropDown'))

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

	const updateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length <= 10) {
			const obj: Exchange = getConvertedAmount(rates, {
				...exchangeItem,
				selectedFromAmount: +e.target.value,
			})
			dispatch(updateExchange(obj))
		}
	}

	const updateCountry = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: SwitchStatus
	) => {
		if (type === SwitchStatus.FROM) {
			const obj: Exchange = getConvertedAmount(rates, {
				...exchangeItem,
				selectedFromCurrency: e.target.value,
			})
			obj.id = `${e.target.value}-${obj.selectedToCurrency}-${obj.index}`
			dispatch(updateExchange(obj))
		} else if (type === SwitchStatus.TO) {
			const obj: Exchange = getConvertedAmount(rates, {
				...exchangeItem,
				selectedToCurrency: e.target.value,
			})
			obj.id = `${obj.selectedFromCurrency}-${e.target.value}-${obj.index}`
			dispatch(updateExchange(obj))
		}
	}

	const onSwitchHandler = () => {
		const {
			index,
			id,
			selectedToCurrency,
			selectedFromCurrency,
			selectedFromAmount,
			selectedToAmount,
		} = { ...exchangeItem }

		dispatch(
			updateExchange({
				selectedFromCurrency: selectedToCurrency,
				selectedFromAmount: selectedToAmount,
				selectedToAmount: selectedFromAmount,
				selectedToCurrency: selectedFromCurrency,
				index,
				id,
			})
		)
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
						label={StaticText.FROM_LABEL}
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						type={InputTypes.NUMBER}
						min="0"
						value={
							exchangeItem.selectedFromAmount === 0
								? ''
								: exchangeItem.selectedFromAmount
						}
						onChange={updateAmount}
					/>
				</ItemWrapper>
				<Switch onSwitch={onSwitchHandler} />
				<ItemWrapper>
					<DropDown
						onSelect={(e: React.ChangeEvent<HTMLInputElement>) =>
							updateCountry(e, SwitchStatus.TO)
						}
						selectedValue={exchangeItem.selectedToCurrency}
						items={fromCountries}
						keyValue={exchangeItem.selectedFromCurrency}
						label={StaticText.TO_LABEL}
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper
						inputMode="numeric"
						type={InputTypes.TEXT}
						min="0"
						value={
							exchangeItem.selectedToAmount === 0
								? ''
								: exchangeItem.selectedToAmount.toLocaleString(
										'en-US',
										{
											style: 'currency',
											currency: exchangeItem.selectedToCurrency,
										}
								  )
						}
						onChange={updateAmount}
						disabled
					/>
				</ItemWrapper>
			</SectionWrapper>
		</React.Suspense>
	)
}

export default CurrencyItem
