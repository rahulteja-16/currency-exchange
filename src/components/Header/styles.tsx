import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.paddings.md};
    color: ${({ theme }) => theme.colors.text};
    height: ${({ theme }) => theme.heights.lg}
    display: flex;
    flex-flow: column;
    justify-content: center;
`

export const HeaderText = styled.h1`
	font-weight: ${({ theme }) => theme.fontWeight.md};
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSize.lg};
	margin: 0 auto;
	max-width: 1680px;
`
