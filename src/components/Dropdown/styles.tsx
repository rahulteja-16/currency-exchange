import styled from 'styled-components'

export const LabelWrapper = styled.label`
	color: ${({ theme }) => theme.colors.border};
	font-size: ${({ theme }) => theme.fontSize.sm};
	font-weight: ${({ theme }) => theme.fontWeight.md};
	text-transform: uppercase;
	letter-spacing: 0.4px;
`

export const SelectWrapper = styled.select`
	font-size: ${({ theme }) => theme.fontSize.md};
	border: none;
	border-bottom: ${({ theme }) => theme.borderWidths.sm} solid
		${({ theme }) => theme.colors.border};
	padding-bottom: ${({ theme }) => theme.paddings.xsm};
	padding-top: ${({ theme }) => theme.paddings.xsm};
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.border};
	&:focus {
		outline: thin dotted;
	}
`
