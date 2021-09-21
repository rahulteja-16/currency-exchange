import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Exchange, ReqHeaders } from './types'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { API } from './constants'

import CurrencyItem from './components/CurrencyItem'
import Button from './components/Button'

import { getCountries } from './redux/slices/countriesSlice'
import { setDate, updateDate } from './redux/slices/dateSlice'
import { addExchange, initialExchange } from './redux/slices/exchangeSlice'
import { RootState } from './redux/store'
import { Loader } from './styles/Loader'
import DatePicker from './components/DatePicker'

const PositionWrapper = styled.div`
	margin: 0 auto;
	max-width: 1680px;
	padding: ${({ theme }) => theme.paddings.xsm};
`

const ButtonPosition = styled.div`
	display: flex;
	flex-flow: row-reverse;
	margin-right: ${({ theme }) => theme.paddings.sm};
`

const ButtonItem = styled.div`
	color: ${({ theme }) => theme.colors.background};
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.5px;
`

const ButtonText = styled.span`
	padding-left: ${({ theme }) => theme.paddings.xsm};
`

const Container = () => {
	const exchangeArr = useSelector(
		(state: RootState) => state.exchanges.exchanges
	)
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

	// const rateHeaders = { ...headers };
	// rateHeaders.url = API.RATES_URL;

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getCountries(headers))
		dispatch(setDate())
		dispatch(initialExchange())
	}, [dispatch, headers])

	const onUpdateDate = (e: React.FormEvent<HTMLInputElement>) => {
		dispatch(updateDate(e.currentTarget.value))
	}

	const onButtonPress = () => dispatch(addExchange())

	return (
		<>
			{/* <Header /> */}
			<PositionWrapper>
				<DatePicker date={date} onUpdateDate={onUpdateDate} />
				{exchangeArr && exchangeArr.length > 0 && (
					<>
						{exchangeArr.map((item: Exchange) => {
							return <CurrencyItem key={item.id} />
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
				{exchangeArr && exchangeArr.length === 0 && <Loader />}
			</PositionWrapper>
		</>
	)
}

export default Container
