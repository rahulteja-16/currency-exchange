/* eslint-disable import/no-unresolved */
import React from 'react'
import Container from './Container'

const ThemeProvider = React.lazy(() => import('base/ThemeProvider'))
const GlobalStyles = React.lazy(() => import('base/GlobalStyles'))

const CurrencyConverter = () => {
	return (
		<React.Suspense fallback="Loading..">
			<ThemeProvider>
				<GlobalStyles />
				<Container />
			</ThemeProvider>
		</React.Suspense>
	)
}

export default CurrencyConverter
