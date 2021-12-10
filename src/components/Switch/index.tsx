import React from 'react'
import { Icon } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line import/no-unresolved
const Button = React.lazy(() => import('shared/Button'))

interface SwitchType {
	onSwitch: () => void
}

const Switch = ({ onSwitch }: SwitchType) => {
	return (
		<Icon>
			<Button role="button" data-testid="switch" onBtnClick={onSwitch}>
				<FontAwesomeIcon icon={faRandom} />
			</Button>
		</Icon>
	)
}

export default Switch
