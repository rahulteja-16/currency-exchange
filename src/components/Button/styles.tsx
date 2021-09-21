import styled from 'styled-components'

export const ButtonWrapper = styled.button`
	padding: ${({ theme }) => theme.paddings.sm};
	font-size: ${({ theme }) => theme.fontSize.md};
	font-weight: ${({ theme }) => theme.fontWeight.md};
	background-color: ${({ theme }) => theme.colors.info};
	border: 1px solid ${({ theme }) => theme.colors.info};
	border-radius: ${({ theme }) => theme.radii.sm};

	&:hover {
		box-shadow: 0px 0px 6px 1px ${({ theme }) => theme.colors.border};
	}
`
