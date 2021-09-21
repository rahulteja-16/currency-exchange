import { Button, Exchange, ExchangeButton, Icon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

const Switch = () => {
	return (
		<Exchange role="button" data-testid="switch">
			<ExchangeButton>
				<Button>
					<Icon>
						<FontAwesomeIcon icon={faRandom} />
					</Icon>
				</Button>
			</ExchangeButton>
		</Exchange>
	)
}

export default Switch
