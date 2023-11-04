import { InputContainer } from '../InputField/InputField.styled.js'
import { PasswordContainer, PasswordButton, VisibleIcon, InvisibleIcon } from "./PasswordField.styled"
import usePasswordVisibility from "../../hooks/usePasswordVisibility.js"

/* Password field with show and hide button */
const PasswordField = () => {
    const { visibilty, setVisibility } = usePasswordVisibility(false)

    return (
        <InputContainer>
            <label htmlFor="password">Password*</label>
            <PasswordContainer>
                <input type={visibilty ? "text" : "password"}
                    name="password" id="password" placeholder="6+ characters required" />
                <PasswordButton type="button" onClick={setVisibility}>
                    {visibilty ? <VisibleIcon /> : <InvisibleIcon />}
                </PasswordButton>
            </PasswordContainer>
        </InputContainer>
    )
}

export default PasswordField