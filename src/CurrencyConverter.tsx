/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useTransition, animated } from 'react-spring'

const GlobalStyles = React.lazy(() => import('shared/GlobalStyles'))

const CurrencyConverter = () => {
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		// for development
		// document.body.dataset.theme = 'light'
		setIsLoading(false)
	}, [])

	const transition = useTransition(isLoading, {
		from: { x: 0, y: 800, opacity: 0, delay: 1000 },
		enter: { x: 0, y: 0, opacity: 1, delay: 1000 },
		leave: { x: 0, y: 800, opacity: 0, delay: 1000 },
	})

	return (
		<React.Suspense fallback="Loading..">
			{transition((style, item) =>
				!item ? (
					<animated.div style={style}>
						<GlobalStyles />
						<Container />
					</animated.div>
				) : (
					''
				)
			)}
		</React.Suspense>
	)
}

export default CurrencyConverter
