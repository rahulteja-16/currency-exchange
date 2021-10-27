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
	border: 1px solid var(--blue-base);
	background-color: var(--blue-base);
`

export const ExchangeButton = styled.div`
	position: absolute;
	border-radius: 50%;
	right: 12px;
	left: 12px;
	top: 12px;
	bottom: 12px;
	background-color: var(--bg-blue);
	&:hover {
		box-shadow: 0px 0px 1px 1px var(--bg-blue);
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
	color: var(--blue-base);
`
