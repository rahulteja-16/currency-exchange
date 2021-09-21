import { ButtonType } from '../../types'
import { ButtonWrapper } from './styles'

const Button = ({ children, onBtnClick }: ButtonType) => {
	return (
		<ButtonWrapper type="button" onClick={onBtnClick}>
			{children}
		</ButtonWrapper>
	)
}

export default Button
