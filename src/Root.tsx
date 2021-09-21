import { Provider } from 'react-redux'
import CurrencyConverter from './CurrencyConverter'
import { store } from './redux/store'

const Root = () => {
	return (
		<Provider store={store}>
			<CurrencyConverter />
		</Provider>
	)
}

export default Root
