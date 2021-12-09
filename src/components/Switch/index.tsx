import React from 'react'
import { Button, Exchange, ExchangeButton, Icon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line import/no-unresolved
const Boop = React.lazy(() => import('shared/Boop'))

interface SwitchType {
	onSwitch: () => void
}

const Switch = ({ onSwitch }: SwitchType) => {
	return (
		<Exchange>
			<ExchangeButton>
				<Boop rotation={20} timing={80}>
					<Button role="button" data-testid="switch" onClick={onSwitch}>
						<Icon>
							<FontAwesomeIcon icon={faRandom} />
						</Icon>
					</Button>
				</Boop>
			</ExchangeButton>
		</Exchange>
	)
}

export default Switch
