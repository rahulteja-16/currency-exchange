/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react'
// import React from 'react'
import Container from './Container'

const GlobalStyles = React.lazy(() => import('shared/GlobalStyles'))

const CurrencyConverter = () => {
	// for development
	useEffect(() => {
		document.body.dataset.theme = 'light'
	}, [])

	return (
		<React.Suspense fallback="Loading..">
			<GlobalStyles />
			<Container />
		</React.Suspense>
	)
}

export default CurrencyConverter
