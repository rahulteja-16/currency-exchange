/* eslint-disable import/no-unresolved */
import React from 'react'
import Container from './Container'

const ThemeProvider = React.lazy(() => import('base/ThemeProvider'))
const GlobalStyles = React.lazy(() => import('base/GlobalStyles'))

const CurrencyConverter = () => {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Container />
		</ThemeProvider>
	)
}

export default CurrencyConverter
