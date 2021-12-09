import styled from 'styled-components'

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
`

export const Button = styled.button`
	background-color: transparent;
	border: none;
	height: 25px;
	margin-left: 10px;
	margin-top: 9px;
	width: 25px;
	cursor: pointer;
`

export const Icon = styled.div`
	position: absolute;
	top: 14px;
	left: 14px;
	bottom: 14px;
	right: 14px;
	color: var(--blue-base);
	cursor: pointer;
`
