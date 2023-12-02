import { CheckMarkContainer, CheckMarkHide, CheckMarkIcon } from "./ButtonCheckMark.styled.js"

const ButtonCheckMark = ({ color }) => {
    return (
        <CheckMarkContainer>
            <CheckMarkIcon color={color} />
            <CheckMarkHide color={color} />
        </CheckMarkContainer>
    )
}

export default ButtonCheckMark