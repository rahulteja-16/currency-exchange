import React from 'react'
import './styles.css'

// eslint-disable-next-line import/no-unresolved
const Home = React.lazy(() => import('base/Home'))
export interface RouteItemType {
	path: string
	name: string
	component: React.FC
	exact: boolean
}

export interface HeaderType {
	title: string
	routes: RouteItemType[]
}

const App = () => {
	return (
		<React.Suspense fallback="Loading..">
			<Home />
		</React.Suspense>
	)
}

export default App
