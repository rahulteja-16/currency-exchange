import styled from 'styled-components'

const DatePickerWrapper = styled.input`
	height: 30px;
	width: 200px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	color: ${({ theme }) => theme.colors.border};
	font-size: ${({ theme }) => theme.fontSize.md};
	background-color: ${({ theme }) => theme.colors.background};
	margin: ${({ theme }) => theme.paddings.xsm}
		${({ theme }) => theme.paddings.md};
	&:focus {
		outline: thin dotted;
		color: ${({ theme }) => theme.colors.border};
	}
`

interface DatePickerType {
	date: string
	onUpdateDate: React.ChangeEventHandler<HTMLInputElement>
}

const DatePicker = ({ date, onUpdateDate }: DatePickerType) => {
	return (
		<DatePickerWrapper
			type="date"
			value={date}
			onChange={onUpdateDate}
			max={date}
			data-testid="date"
		/>
	)
}

export default DatePicker
