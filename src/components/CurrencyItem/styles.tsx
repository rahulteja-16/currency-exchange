import styled from 'styled-components'

export const SectionWrapper = styled.section`
	display: flex;
	border: ${({ theme }) => theme.borderWidths.sm} solid
		${({ theme }) => theme.colors.secondary};
	justify-content: space-between;
	padding: ${({ theme }) => theme.paddings.md};
	margin: ${({ theme }) => theme.paddings.md};
	border-radius: ${({ theme }) => theme.radii.md};
	background-color: ${({ theme }) => theme.colors.secondary};
`
export const ItemWrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: 40%;
`

export const InputWrapper = styled.input`
	margin-top: 16px;
	height: 25px;
	border: none;
	padding-left: 4px;
	font-size: 18px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.border};
	&:focus {
		outline: thin dotted;
	}
`
