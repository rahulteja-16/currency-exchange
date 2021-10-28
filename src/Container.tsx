/* eslint-disable import/no-unresolved */
import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { Exchange, ReqHeaders } from './types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { API, StaticText } from './constants'

import CurrencyItem from './components/CurrencyItem'

import { getCountries, getRates } from './redux/slices/countriesSlice'
import { setDate, updateDate } from './redux/slices/dateSlice'
import { addExchange, initialExchange } from './redux/slices/exchangeSlice'
import { RootState } from './redux/store'

const Button = React.lazy(() => import('shared/Button'))
const DatePicker = React.lazy(() => import('shared/DatePicker'))

const PositionWrapper = styled.div`
	margin: 0 auto;
	max-width: 1680px;
	padding: 8px;
`

const ButtonPosition = styled.div`
	display: flex;
	flex-flow: row-reverse;
	margin-right: 16px;
`

const ButtonItem = styled.div`
	color: var(--text-400);
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	padding: 10px;
`

const ButtonText = styled.span`
	padding-left: 8px;
`

const Container = () => {
	const dispatch = useDispatch()
	const exchangeArr = useSelector(
		(state: RootState) => state.exchanges.exchanges
	)
	const countries = useSelector((state: RootState) => state.countries)
	const { countriesArr, symbols, rates } = countries
	const date = useSelector((state: RootState) => state.date.date)

	const headers = useMemo(
		(): ReqHeaders => ({
			url: API.COUNTRIES_URL,
			method: 'GET',
			headers: {
				Authorization: `ApiKey ${API.KEY}`,
			},
		}),
		[]
	)

	useEffect(() => {
		dispatch(getCountries(headers))
		dispatch(setDate())
		dispatch(initialExchange())
	}, [dispatch, headers])

	useEffect(() => {
		const rateHeaders = { ...headers }
		rateHeaders.url = `${API.RATES_URL}&base_currency=${
			StaticText.BASE_CUR
		}&quote_currencies=${symbols.join()}`

		if (symbols.length > 0) {
			dispatch(getRates(rateHeaders))
		}
	}, [dispatch, headers, symbols])

	const onUpdateDate = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(updateDate(e.currentTarget.value))
	}

	const onButtonPress = () => dispatch(addExchange())

	return (
		<React.Suspense fallback="Loading...">
			<PositionWrapper>
				{exchangeArr && exchangeArr.length > 0 && (
					<>
						<DatePicker date={date} onUpdateDate={onUpdateDate} />
						{exchangeArr.map((item: Exchange) => {
							return (
								<CurrencyItem
									rates={rates}
									countriesArr={countriesArr}
									exchangeItem={item}
									key={item.index}
								/>
							)
						})}
						<ButtonPosition>
							<Button onBtnClick={onButtonPress}>
								<ButtonItem>
									<FontAwesomeIcon icon={faPlus} />
									<ButtonText>Add</ButtonText>
								</ButtonItem>
							</Button>
						</ButtonPosition>
					</>
				)}
				{exchangeArr && exchangeArr.length === 0 && <div>Loading...</div>}
			</PositionWrapper>
		</React.Suspense>
	)
}

export default Container
