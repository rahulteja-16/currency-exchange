import React, { ReactElement } from 'react'
import { Country } from '../../types'
import DropDown from '../Dropdown'
import Switch from '../Switch'
import { InputWrapper, ItemWrapper, SectionWrapper } from './styles'

const CurrencyItem: React.FC = React.memo((): ReactElement => {
	const items: Country[] = [
		{
			id: 123,
			code: 'dsadsad',
			name: 'India',
			active: true,
		},
	]
	return (
		<SectionWrapper>
			<ItemWrapper>
				<DropDown items={items} label="From" />
				<InputWrapper />
			</ItemWrapper>
			<Switch />
			<ItemWrapper>
				<DropDown items={items} label="To" />
				<InputWrapper />
			</ItemWrapper>
		</SectionWrapper>
	)
})

export default CurrencyItem
