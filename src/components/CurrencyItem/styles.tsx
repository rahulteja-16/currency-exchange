import styled from 'styled-components'

export const SectionWrapper = styled.section`
	display: flex;
	border: 1px solid var(--blue-40);
	justify-content: space-between;
	padding: 20px;
	margin: 10px 10px 20px 10px;
	border-radius: var(--border-radius);
	background-color: var(--bg-blue);
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
	border-bottom: 1px solid var(--blue-40);
	background-color: var(--bg-blue);
	color: var(--text-200);
	&:focus {
		outline: thin dotted;
		color: var(--blue-20);
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`
