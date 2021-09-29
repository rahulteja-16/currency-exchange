import React, { ReactElement } from 'react'
import { StaticText } from '../../constants'
import { Country } from '../../types'
import Switch from '../Switch'
import { InputWrapper, ItemWrapper, SectionWrapper } from './styles'

// eslint-disable-next-line import/no-unresolved
const DropDown = React.lazy(() => import('shared/DropDown'))

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
		<React.Suspense fallback="Loading...">
			<SectionWrapper>
				<ItemWrapper>
					<DropDown
						items={items}
						label="From"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper />
				</ItemWrapper>
				<Switch />
				<ItemWrapper>
					<DropDown
						items={items}
						label="To"
						defaultText={StaticText.DD_DEFAULT}
					/>
					<InputWrapper />
				</ItemWrapper>
			</SectionWrapper>
		</React.Suspense>
	)
})

export default CurrencyItem
