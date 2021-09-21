import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg); 
    }
`

export const Exchange = styled.div`
    height: 65px;
    width: 65px;
    margin-top: 16px;
    position: relative;
    border-radius: 50%;
    border: 1px solid :${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.text};
`

export const ExchangeButton = styled.div`
	position: absolute;
	border-radius: 50%;
	right: 12px;
	left: 12px;
	top: 12px;
	bottom: 12px;
	background-color: ${({ theme }) => theme.colors.info};
	&:hover {
		box-shadow: 0px 0px 6px 1px ${({ theme }) => theme.colors.border};
		animation: ${spin} 1s ease-in 0s 1 normal;
	}
`

export const Button = styled.button`
	background-color: transparent;
	border: none;
	height: 25px;
	margin-left: 10px;
	margin-top: 9px;
	width: 25px;
`

export const Icon = styled.div`
	position: absolute;
	top: 14px;
	left: 14px;
	bottom: 14px;
	right: 14px;
	color: ${({ theme }) => theme.colors.text};
`
