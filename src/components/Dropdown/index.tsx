import { StaticText as msg } from '../../constants'
import { DD } from '../../types'
import { LabelWrapper, SelectWrapper } from './styles'

const DropDown = ({ items, onSelect, keyValue, selectedValue, label }: DD) => {
	return (
		<>
			<LabelWrapper htmlFor={keyValue}>{label}</LabelWrapper>
			<SelectWrapper
				name={keyValue}
				onChange={() => onSelect}
				value={selectedValue}
				data-testid={`select${label}`}
			>
				<option key="default" disabled>
					{msg.DD_DEFAULT}
				</option>
				{items.map((item) => (
					<option
						key={item.id}
						value={item.code}
						data-testid={`${label}-${item.code}`}
					>
						{item.name}
					</option>
				))}
				x
			</SelectWrapper>
		</>
	)
}

export default DropDown
